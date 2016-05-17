require 'json'
require 'securerandom'


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

  user_uuid = @homequest_tokens[request.env['HTTP_HOMEQUEST_TOKEN']]
  child_uuid = params['child_uuid']

  if user_uuid.nil?
    status 401
    return message '子ユーザーを削除するにはログインする必要があります'
  end

  parent = search_parent('uuid', user_uuid)

  if parent.nil?
    status 403
    return message '子ユーザーを削除するには親ユーザーでログインする必要があります'
  end

  if search_child('uuid', child_uuid).nil?
    status 404
    return message '子ユーザーは見つかりませんでした'
  end

  parent['children'].delete_if {|c| c['uuid'] == child_uuid}

  settings.db['parent'].find({uuid: parent['uuid']}).update_one(parent)

  return nil
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

  user_uuid = @homequest_tokens[request.env['HTTP_HOMEQUEST_TOKEN']]

  if user_uuid.nil?
    status 401
    return message '子ユーザーを取得するにはログインする必要があります'
  end

  parent = search_parent('uuid', user_uuid)

  if parent.nil?
    status 403
    return message '子ユーザーを取得するには親ユーザーでログインする必要があります'
  end

  return json parent['children']
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
  # ToDo: implement validation

  user_uuid = @homequest_tokens[request.env['HTTP_HOMEQUEST_TOKEN']]

  if user_uuid.nil?
    status 401
    return message '子ユーザーを作成するにはログインする必要があります'
  end

  parent = search_parent('uuid', user_uuid)

  if parent.nil?
    status 403
    return message '子供のユーザーを作成するには親ユーザーでログインする必要があります'
  end

  uuid = SecureRandom.uuid
  child = {given_name: JSON.parse(request.body.read)["given_name"],
           parent_uuid: parent['uuid'],
           uuid: uuid,
           family_name: parent['family_name'],
           is_admin: false,
           login_token: SecureRandom.hex,
           point: 0}

  parent['children'].push(child)

  settings.db['parent'].find({uuid: parent['uuid']}).update_one(parent)

  return json child
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

  user_uuid = @homequest_tokens[headers['homequest_token']]

  if user_uuid.nil?
    status 401
    return message '通知を取得するにはログインする必要があります'
  end

  notifications = settings.db['notification'].find('user_uuid' => user_uuid)
  notified = notifications.to_a

  notifications.delete_many

  return json notified
end

HomeQuest.add_route('POST', '/v1/signin', {
    "resourcePath" => "/Default",
    "summary" => "Login",
    "nickname" => "signin_post",
    "responseClass" => "Signin",
    "endpoint" => "/signin",
    "notes" => "",
    "parameters" => [
        {
            "name" => "body",
            "description" => "",
            "dataType" => "NewSignin",
            "paramType" => "body",
        }
    ]}) do
  cross_origin
  # ToDo: implement validation

  signin = JSON.parse request.body.read
  homequest_token = SecureRandom.hex

  begin
    case
      when signin['login_token'] # for Child
        login_token = signin['login_token']
        child = search_child('login_token', login_token)

        if child.nil?
          raise HomeQuest::Error::InvalidCredential
        end

        @homequest_tokens.store(homequest_token, child['uuid'])
      when signin['email'] && signin['password'] # for Parent
        parent = search_parent('email', signin['email'])

        if parent.nil? || parent['password'] != signin['password']
          raise HomeQuest::Error::InvalidCredential
        end

        @homequest_tokens.store(homequest_token, parent['uuid'])
      else
        raise HomeQuest::Error::InvalidCredential
    end

  rescue HomeQuest::Error::InvalidCredential
    status 401
    return message 'ログインに失敗しました'
  end

  return json :'homequest_token' => homequest_token
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
  # ToDo: implement validation

  parent = JSON.parse request.body.read
  parent.store(:children, Array.new)
  parent.store(:uuid, SecureRandom.uuid)
  parent.store(:is_admin, true)

  begin
    settings.db[:parent].insert_one(parent)
  rescue Mongo::Error::OperationFailure
    status 500
    return message 'データベースでエラーが発生しました'
  end

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

  user_uuid = @homequest_tokens[request.env['HTTP_HOMEQUEST_TOKEN']]

  if user_uuid.nil?
    status 401
    return message 'ユーザーの状態を取得するにはログインする必要があります'
  end

  parent = search_parent('uuid', user_uuid)
  child = search_child('uuid', user_uuid)

  if parent
    return json({'family_name': parent['family_name'],
                 'given_name': parent['given_name'],
                 'point': 0,
                 'is_admin': true,
                 'user_uuid': parent['uuid']})
  elsif child
    return json({'family_name': child[:family_name],
                 'given_name': child[:given_name],
                 'point': child[:point],
                 'is_admin': false,
                 'user_uuid': user_uuid})
  else
    status 500
    return message 'ユーザーは見つかりませんでした'
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

  user_uuid = @homequest_tokens[request.env['HTTP_HOMEQUEST_TOKEN']]

  if user_uuid.nil?
    status 401
    return message 'タスクを取得するにはログインする必要があります'
  end

  parent = search_parent('uuid', user_uuid)

  tasks = settings.db['task'].find({parent_uuid: parent['uuid']}).projection({_id: 0}).to_a
  tasks.map! do |task|
    case
      when task['verified_child'].include?(user_uuid)
        task['is_accepted'] = true
        task['is_completed'] = true
        task['is_verified'] = true
      when task['completed_child'].include?(user_uuid)
        task['is_accepted'] = true
        task['is_completed'] = true
        task['is_verified'] = false
      when task['accepted_child'].include?(user_uuid)
        task['is_accepted'] = true
        task['is_completed'] = false
        task['is_verified'] = false
      else
        task['is_accepted'] = false
        task['is_completed'] = false
        task['is_verified'] = false
    end

    next task
  end

  return json tasks
end

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
  # ToDo: implement validation

  user_uuid = @homequest_tokens[request.env['HTTP_HOMEQUEST_TOKEN']]

  if user_uuid.nil?
    status 401
    return message 'タスクを作成するにはログインする必要があります'
  end

  parent = search_parent('uuid', user_uuid)

  if parent.nil?
    status 403
    return message 'タスクを作成するには親ユーザーでログインする必要があります'
  end

  task = JSON.parse request.body.read
  task['uuid'] = SecureRandom.uuid
  task['parent_uuid'] = parent['uuid']
  task['accepted_child'] = []
  task['completed_child'] = []
  task['verified_child'] = []

  settings.db['task'].insert_one(task)

  # append dummy response
  task['is_accepted'] = false
  task['is_canceled'] = false
  task['is_completed'] = false
  task['is_rejected'] = false
  task['is_verified'] = false

  return json task
end

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

  task_uuid = params['task_uuid']
  user_uuid = @homequest_tokens[request.env['HTTP_HOMEQUEST_TOKEN']]

  if user_uuid.nil?
    status 401
    return message 'タクスを削除するにはログインする必要があります'
  end

  parent = search_parent('uuid', user_uuid)

  if parent.nil?
    status 403
    return message 'タスクを削除するには親ユーザーでログインする必要があります'
  end

  tasks = settings.db['task'].find({uuid: task_uuid, parent_uuid: user_uuid})

  case tasks.count
    when 0
      status 404
      return message 'タスクは見つかりませんでした'
    when 1
      tasks.delete_one
      return nil
    else
      status 500
      return message '同じUUIDを持つ複数のタスクが見つかりました'
  end
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
    status 500
    return message 'ユーザーは見つかりませんでした'
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
