require 'json'
require 'securerandom'

@@homequest_tokens = Hash.new

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

  {"message" => "yes, it worked"}.to_json
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
  @client[:parent].find(parent_uuid).limit(1).each do |doc|
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
  puts request.env
  parent_uuid = @@homequest_tokens[request.env['HTTP_HOMEQUEST_TOKEN']]
  uuid = SecureRandom.uuid
  @client[:parent].find(:uuid => parent_uuid).each do |doc|
    @family_name = doc[:family_name] if parent_uuid
  end
  @child = { given_name: JSON.parse(request.body.read)["given_name"],
             parent_uuid: parent_uuid,
             uuid: uuid,
             family_name: @family_name,
             is_admin: false
  }
  @child.store(:login_id, SecureRandom.hex)
  #store @child in datebase
  matches = @client[:parent].find(:uuid => parent_uuid)
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
  @client[:notification].find(:child_uuid => child_uuid).each do |node|
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
    @client[:child].find(:login_token => login_token).each do |doc|
      @child = doc
    end
    @@homequest_tokens.store(SecureRandom.hex, @child[:uuid])
    return {:homequest_token => @@homequest_tokens[@child[:uuid]]}
  elsif @signin["email"] then
    @client[:parent].find(:email => @signin["email"]).limit(1).each do |doc|
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
  puts @parent
  @parent.store(:children, Array.new)
  @parent.store(:uuid, SecureRandom.uuid)
  @parent.store(:is_admin, true)
  @client[:parent].insert_one(@parent)
  
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

  {"message" => "yes, it worked"}.to_json
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
  
  @task = Array.new
  content_type :json
  @client[:task].find.each do |document|
    @task << document
  end
  #TODO: return is_accept based on users
  @task.to_json 
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
  @client[:task].insert_one(@task)
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
    @client[:task].find(:uuid => params[:task_uuid]).delete_one
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

  if !request.body then
    #uuidの取得
    request = JSON.parse(request.body.read)
    uuid = request[:task_uuid]
    @task = @client[:task].find(:uuid => uuid)
    @task.to_json 
  else
    {"message" => "yes, it worked"}.to_json
  end
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

  {"message" => "yes, it worked"}.to_json
end
