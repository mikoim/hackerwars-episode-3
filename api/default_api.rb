require 'json'
require 'securerandom'

@@homequest_tokens = Hash.new

def search_for_child(parents, key, value)
  parents.each do |parent|
    parent[:children].find do |child|
      child[key] = value
    end
  end
end

HomeQuest.add_route('DELETE', '/v1/child/{child_uuid}', {
  "resourcePath" => "/Default",
  "summary" => "Delete Child",
  "nickname" => "child_child_uuid_delete",
  "responseClass" => "void",
  "endpoint" => "/child/{child_uuid}",
  "notes" => "",
  "parameters" => [


    {
      "name" => "child_uuid",
      "description" => "UUID of Child",
      "dataType" => "string",
      "paramType" => "path",
    },



    ]}) do
  cross_origin
  # the guts live here
  uuid = @@homequest_tokens[headers['homequest_token']] if @@homequest_tokens[headers['homequest_token']]

  if uuid["is_admin"] then
    settings.db[:parent].find(prams[:child_uuid]).limit(1).each do |mortal_child|
      mortal.child.delete_one
      return nil
    end
  else
    {"message" => "you is not admin"}.to_json
  end



end


HomeQuest.add_route('GET', '/v1/child', {
  "resourcePath" => "/Default",
  "summary" => "Get array of Child",
  "nickname" => "child_get",
  "responseClass" => "array[Child]",
  "endpoint" => "/child",
  "notes" => "",
  "parameters" => [




    ]}) do
  cross_origin
  # the guts live here
  parent_uuid = @@homequest_tokens[request.env['HTTP_HOMEQUEST_TOKEN']]
  settings.db[:parent].find(:uuid => parent_uuid).limit(1).each do |doc|
    @parent = doc
  end
  @parent[:children].to_json
end


HomeQuest.add_route('POST', '/v1/child', {
  "resourcePath" => "/Default",
  "summary" => "Create Child",
  "nickname" => "child_post",
  "responseClass" => "Child",
  "endpoint" => "/child",
  "notes" => "",
  "parameters" => [




    {
      "name" => "body",
      "description" => "",
      "dataType" => "NewChild",
      "paramType" => "body",
    }

    ]}) do
  cross_origin
  # the guts live here
  parent_uuid = @@homequest_tokens[request.env['HTTP_HOMEQUEST_TOKEN']]
  uuid = SecureRandom.uuid
  settings.db[:parent].find(:uuid => parent_uuid).each do |doc|
    @family_name = doc[:family_name] if parent_uuid
  end


  @child = { given_name: JSON.parse(request.body.read)["given_name"],
             parent_uuid: parent_uuid,
             uuid: uuid,
             family_name: @family_name,
             is_admin: false
  }
  @child.store(:login_token, SecureRandom.hex)
  #store @child in datebase
  matches = settings.db[:parent].find(:uuid => parent_uuid)
  matches.limit(1).each do |doc|
    @parent = doc
    doc[:children] << @child
  end
  matches.find_one_and_replace(@parent)
  @child.delete(:parent_uuid)
  @child.to_json
end


HomeQuest.add_route('GET', '/v1/notification', {
  "resourcePath" => "/Default",
  "summary" => "Get array of Notification",
  "nickname" => "notification_get",
  "responseClass" => "array[Notification]",
  "endpoint" => "/notification",
  "notes" => "",
  "parameters" => [




    ]}) do
  cross_origin
  # the guts live here

  @notifi = Array.new
  content_type :json
  child_uuid = params[:child_uuid]
  settings.db[:notification].find(:child_uuid => child_uuid).each do |node|
    @notifi << node.to_json
    node.delete_one
  end

  return @notifi.to_json

end

HomeQuest.add_route('POST', '/v1/signin', {
  "resourcePath" => "/Default",
  "summary" => "Login",
  "nickname" => "signin_post",
  "responseClass" => "Signin",
  "endpoint" => "/signin", "notes" => "",
  "parameters" => [
    {
      "name" => "body",
      "description" => "",
      "dataType" => "NewSignin",
      "paramType" => "body",
    }
    ]}) do
  cross_origin
  # the guts live here
  @signin = JSON.parse request.body.read
  if login_token = @signin["login_token"] then
    @child = search_for_child(settings.db[:parent].find, :login_token, login_token)
    @@homequest_tokens.store(SecureRandom.hex, @child[:uuid])
    return {:homequest_token => @@homequest_tokens[@child[:uuid]]}
  elsif @signin["email"] then
    settings.db[:parent].find(:email => @signin["email"]).limit(1).each do |doc|
      @parent = doc
    end
    if @parent[:password] == @signin["password"] then
      homequest_token = SecureRandom.hex
      @@homequest_tokens.store(homequest_token, @parent[:uuid])
      return {:homequest_token => homequest_token}.to_json
    end
  else
    puts 'epic fail'
  end
end


HomeQuest.add_route('POST', '/v1/signup', {
  "resourcePath" => "/Default",
  "summary" => "Register family account",
  "nickname" => "signup_post",
  "responseClass" => "void",
  "endpoint" => "/signup",
  "notes" => "",
  "parameters" => [




    {
      "name" => "body",
      "description" => "Signup object",
      "dataType" => "Signup",
      "paramType" => "body",
    }

    ]}) do
  cross_origin
  # the guts live here

  @parent = JSON.parse request.body.read
  @parent.store(:children, Array.new)
  @parent.store(:uuid, SecureRandom.uuid)
  @parent.store(:is_admin, true)
  settings.db[:parent].insert_one(@parent)

  #nilで良い
  return nil
end

HomeQuest.add_route('GET', '/v1/status', {
  "resourcePath" => "/Default",
  "summary" => "Get Status",
  "nickname" => "status_get",
  "responseClass" => "Status",
  "endpoint" => "/status",
  "notes" => "",
  "parameters" => [




    ]}) do
  cross_origin
  # the guts live here
  user_uuid = @@homequest_tokens[request.env['HTTP_HOMEQUEST_TOKEN']]
  puts user_uuid
  matches = settings.db[:parent].find(:uuid => user_uuid)
  if matches.count != 0 then
    matches.each do |doc|
      @user = doc
    end
    return { "family_name": @user[:family_name], "given_name": @user[:given_name], "point": 0, "is_admin": true, "user_uuid": user_uuid }.to_json
  else
    @user = search_for_child(settings.db[:parents].find, :uuid, user_uuid)
    return { "family_name": @user[:family_name], "given_name": @user[:given_name], "point": @user[:point], "is_admin": false, "user_uuid": user_uuid }.to_json
  end
end


HomeQuest.add_route('GET', '/v1/task', {
  "resourcePath" => "/Default",
  "summary" => "Get array of Task",
  "nickname" => "task_get",
  "responseClass" => "array[Task]",
  "endpoint" => "/task",
  "notes" => "",
  "parameters" => [




    ]}) do
  cross_origin
  # the guts live here
  content_type :json

  @task = []
  uuid = @@homequest_tokens[request.env['HTTP_HOMEQUEST_TOKEN']]
  settings.db[:parent].find(:uuid => uuid).limit(1).each do |otona|
    settings.db[:task].find(:owner => uuid).each do |quest|
      @task << quest
    end

    #kodononara
    if otona.count == 0 then
      @child = search_for_child(settings.db[:parent].find, :uuid, uuid)
      @child[:task].each do |quest|
        @task << quest
      end
    end

  end

  #TODO: return is_accept based on users
  return @task.to_json
end

# データベースに入れたうえで, 格納した時と同じ挙動
HomeQuest.add_route('POST', '/v1/task', {
  "resourcePath" => "/Default",
  "summary" => "Create Task",
  "nickname" => "task_post",
  "responseClass" => "Task",
  "endpoint" => "/task",
  "notes" => "",
  "parameters" => [




    {
      "name" => "body",
      "description" => "",
      "dataType" => "NewTask",
      "paramType" => "body",
    }

    ]}) do
  cross_origin
  # the guts live here
  @task = JSON.parse request.body.read
  @task.store(:uuid, SecureRandom.uuid)
  settings.db[:task].insert_one(@task)
  @task.to_json

end

# Return nothing
HomeQuest.add_route('DELETE', '/v1/task/{task_uuid}', {
  "resourcePath" => "/Default",
  "summary" => "Delete Task",
  "nickname" => "task_task_uuid_delete",
  "responseClass" => "void",
  "endpoint" => "/task/{task_uuid}",
  "notes" => "",
  "parameters" => [


    {
      "name" => "task_uuid",
      "description" => "UUID of Task",
      "dataType" => "string",
      "paramType" => "path",
    },



    ]}) do
  cross_origin
  # the guts live here
    settings.db[:task].find(:uuid => params[:task_uuid]).delete_one
    return nil
end

HomeQuest.add_route('GET', '/v1/task/{task_uuid}', {
  "resourcePath" => "/Default",
  "summary" => "Get Task",
  "nickname" => "task_task_uuid_get",
  "responseClass" => "Task",
  "endpoint" => "/task/{task_uuid}",
  "notes" => "",
  "parameters" => [


    {
      "name" => "task_uuid",
      "description" => "UUID of Task",
      "dataType" => "string",
      "paramType" => "path",
    },



    ]}) do
  cross_origin
  # the guts live here

  content_type :json
  settings.db[:task].find(:uuid => params[:task_uuid]).each do |tmp|
    @task = tmp
  end

  @task.to_json
end

HomeQuest.add_route('POST', '/v1/task/{task_uuid}', {
  "resourcePath" => "/Default",
  "summary" => "Update status of Task",
  "nickname" => "task_task_uuid_post",
  "responseClass" => "Task",
  "endpoint" => "/task/{task_uuid}",
  "notes" => "",
  "parameters" => [


    {
      "name" => "task_uuid",
      "description" => "UUID of Task",
      "dataType" => "string",
      "paramType" => "path",
    },



    {
      "name" => "body",
      "description" => "updateTaskState object",
      "dataType" => "UpdateTaskState",
      "paramType" => "body",
    }

    ]}) do
  cross_origin
  # the guts live here

  @target_task = {}
  content_type :json
  #一個だけほしかったけど、わからないのでこうなった
  settings.db[:task].find(:uuid => params[:task_uuid]).each do |tmp|
    @target_task = tmp
  end

  task = JSON.parse(request.body.read)

  if @target_task then
    @target_task[:is_accept] = task["is_accept"]
    @target_task[:is_cancel] = task["is_cancel"]
    @target_task[:is_complete] = task["is_complete"]
    @target_task[:is_reject] = task["is_reject"]
    @target_task[:is_verified] = task["is_verified"]
  end

  return @target_task.to_json

end



HomeQuest.add_route('GET', '/v1/reward', {
  "resourcePath" => "/Default",
  "summary" => "Get array of Reward",
  "nickname" => "reward_get",
  "responseClass" => "array[Reward]",
  "endpoint" => "/reward",
  "notes" => "",
  "parameters" => [




    ]}) do
  cross_origin
  # the guts live here
  @rewards = Array.new
  settings.db[:reward].find.each do |doc|
    @rewards << doc
  end

  @rewards.to_json
end


HomeQuest.add_route('POST', '/v1/reward', {
  "resourcePath" => "/Default",
  "summary" => "Create reward",
  "nickname" => "reward_post",
  "responseClass" => "Reward",
  "endpoint" => "/reward",
  "notes" => "",
  "parameters" => [




    {
      "name" => "body",
      "description" => "",
      "dataType" => "NewReward",
      "paramType" => "body",
    }

    ]}) do
  cross_origin
  # the guts live here
  @reward = JSON.parse request.body.read
  @reward.store(:uuid, SecureRandom.uuid)
  @reward.store(:owner, @@homequest_tokens[request.env['HTTP_HOMEQUEST_TOKEN']])
  settings.db[:reward].insert_one(@reward)
  @reward.to_json
end


HomeQuest.add_route('GET', '/v1/reward/{reward_uuid}', {
  "resourcePath" => "/Default",
  "summary" => "Earn Reward",
  "nickname" => "reward_reward_uuid_get",
  "responseClass" => "void",
  "endpoint" => "/reward/{reward_uuid}",
  "notes" => "",
  "parameters" => [


    {
      "name" => "reward_uuid",
      "description" => "UUID of Reward",
      "dataType" => "string",
      "paramType" => "path",
    },



    ]}) do
  cross_origin
  # the guts live here
  user_uuid = @@homequest_tokens[request.env['HTTP_HOMEQUEST_TOKEN']]
  unless @user = search_for_child(settings.db[:parents].find, :uuid, user_uuid) then
    return { message: "ユーザーは見つかりませんでした。" }.to_json
  end
  settings.db[:reward].find(:uuid => params[:uuid]).each do |doc|
    @reward = doc
  end
  if @reward[:owner] == @user[:parent_uuid] then
    @user[:point] -= @reward[:point]
    matches = settings.db[:parent].find(:uuid => @user[:parent_uuid])
    matches.find_one_and_replace(@parent)
  end
  return nil
end
