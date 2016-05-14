require 'json'


MyApp.add_route('DELETE', '/v1/child/{child_uuid}', {
  "resourcePath" => "/Default",
  "summary" => "\u5B50\u4F9B\u3092\u6D88\u3059",
  "nickname" => "child_child_uuid_delete", 
  "responseClass" => "Child", 
  "endpoint" => "/child/{child_uuid}", 
  "notes" => "",
  "parameters" => [
    
    
    {
      "name" => "child_uuid",
      "description" => "\u5B50\u4F9B\u306EUUID",
      "dataType" => "string",
      "paramType" => "path",
    },
    
    
    
    ]}) do
  cross_origin
  # the guts live here

  {"message" => "yes, it worked"}.to_json
end


MyApp.add_route('GET', '/v1/child', {
  "resourcePath" => "/Default",
  "summary" => "\u5B50\u4F9B\u306E\u4E00\u89A7\u3092\u53D6\u5F97",
  "nickname" => "child_get", 
  "responseClass" => "Child", 
  "endpoint" => "/child", 
  "notes" => "",
  "parameters" => [
    
    
    
    
    {
      "name" => "body",
      "description" => "",
      "dataType" => "Child",
      "paramType" => "body",
    }
    
    ]}) do
  cross_origin
  # the guts live here

  {"message" => "yes, it worked"}.to_json
end


MyApp.add_route('POST', '/v1/child', {
  "resourcePath" => "/Default",
  "summary" => "\u5B50\u4F9B\u3092\u4EBA\u4F53\u932C\u6210",
  "nickname" => "child_post", 
  "responseClass" => "Child", 
  "endpoint" => "/child", 
  "notes" => "",
  "parameters" => [
    
    
    
    
    {
      "name" => "body",
      "description" => "",
      "dataType" => "Child",
      "paramType" => "body",
    }
    
    ]}) do
  cross_origin
  # the guts live here

  {"message" => "yes, it worked"}.to_json
end


MyApp.add_route('GET', '/v1/notification', {
  "resourcePath" => "/Default",
  "summary" => "\u901A\u77E5",
  "nickname" => "notification_get", 
  "responseClass" => "Notification", 
  "endpoint" => "/notification", 
  "notes" => "",
  "parameters" => [
    
    
    
    
    {
      "name" => "body",
      "description" => "",
      "dataType" => "Notification",
      "paramType" => "body",
    }
    
    ]}) do
  cross_origin
  # the guts live here

  {"message" => "yes, it worked"}.to_json
end


MyApp.add_route('POST', '/v1/signin', {
  "resourcePath" => "/Default",
  "summary" => "\u30B5\u30A4\u30F3\u30A4\u30F3",
  "nickname" => "signin_post", 
  "responseClass" => "Signin", 
  "endpoint" => "/signin", 
  "notes" => "",
  "parameters" => [
    
    
    
    
    {
      "name" => "body",
      "description" => "",
      "dataType" => "Signin",
      "paramType" => "body",
    }
    
    ]}) do
  cross_origin
  # the guts live here

  {"message" => "yes, it worked"}.to_json
end


MyApp.add_route('POST', '/v1/signup', {
  "resourcePath" => "/Default",
  "summary" => "\u5BB6\u65CF\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u4F5C\u6210",
  "nickname" => "signup_post", 
  "responseClass" => "Signup", 
  "endpoint" => "/signup", 
  "notes" => "",
  "parameters" => [
    
    
    
    
    {
      "name" => "body",
      "description" => "\u5BB6\u65CF\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u60C5\u5831\u3092\u8868\u3059\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8",
      "dataType" => "Signup",
      "paramType" => "body",
    }
    
    ]}) do
  cross_origin
  # the guts live here

  {"message" => "yes, it worked"}.to_json
end


MyApp.add_route('GET', '/v1/status', {
  "resourcePath" => "/Default",
  "summary" => "\u30E6\u30FC\u30B6\u30FC\u306E\u72B6\u614B\u3092\u53D6\u5F97",
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


MyApp.add_route('GET', '/v1/task', {
  "resourcePath" => "/Default",
  "summary" => "\u30BF\u30B9\u30AF\u306E\u4E00\u89A7\u3092\u53D6\u5F97",
  "nickname" => "task_get", 
  "responseClass" => "array[Task]", 
  "endpoint" => "/task", 
  "notes" => "",
  "parameters" => [
    
    
    
    
    ]}) do
  cross_origin
  # the guts live here

  {"message" => "yes, it worked"}.to_json
end


MyApp.add_route('POST', '/v1/task', {
  "resourcePath" => "/Default",
  "summary" => "\u30BF\u30B9\u30AF\u3092\u4F5C\u6210",
  "nickname" => "task_post", 
  "responseClass" => "Task", 
  "endpoint" => "/task", 
  "notes" => "",
  "parameters" => [
    
    
    
    
    {
      "name" => "body",
      "description" => "",
      "dataType" => "Task",
      "paramType" => "body",
    }
    
    ]}) do
  cross_origin
  # the guts live here

  {"message" => "yes, it worked"}.to_json
end


MyApp.add_route('DELETE', '/v1/task/{task_uuid}', {
  "resourcePath" => "/Default",
  "summary" => "\u30BF\u30B9\u30AF\u3092\u524A\u9664",
  "nickname" => "task_task_uuid_delete", 
  "responseClass" => "void", 
  "endpoint" => "/task/{task_uuid}", 
  "notes" => "",
  "parameters" => [
    
    
    {
      "name" => "task_uuid",
      "description" => "\u30BF\u30B9\u30AF\u306EUUID",
      "dataType" => "string",
      "paramType" => "path",
    },
    
    
    
    ]}) do
  cross_origin
  # the guts live here

  {"message" => "yes, it worked"}.to_json
end


MyApp.add_route('GET', '/v1/task/{task_uuid}', {
  "resourcePath" => "/Default",
  "summary" => "\u30BF\u30B9\u30AF\u3092\u53D6\u5F97",
  "nickname" => "task_task_uuid_get", 
  "responseClass" => "Task", 
  "endpoint" => "/task/{task_uuid}", 
  "notes" => "",
  "parameters" => [
    
    
    {
      "name" => "task_uuid",
      "description" => "\u30BF\u30B9\u30AF\u306EUUID",
      "dataType" => "string",
      "paramType" => "path",
    },
    
    
    
    ]}) do
  cross_origin
  # the guts live here

  {"message" => "yes, it worked"}.to_json
end


MyApp.add_route('POST', '/v1/task/{task_uuid}', {
  "resourcePath" => "/Default",
  "summary" => "\u30BF\u30B9\u30AF\u306E\u72B6\u614B\u3092\u5909\u66F4",
  "nickname" => "task_task_uuid_post", 
  "responseClass" => "Task", 
  "endpoint" => "/task/{task_uuid}", 
  "notes" => "",
  "parameters" => [
    
    
    {
      "name" => "task_uuid",
      "description" => "\u30BF\u30B9\u30AF\u306EUUID",
      "dataType" => "string",
      "paramType" => "path",
    },
    
    
    
    {
      "name" => "body",
      "description" => "\u30BF\u30B9\u30AF\u306E\u72B6\u614B\u3092\u8868\u3059\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8",
      "dataType" => "UpdateTaskState",
      "paramType" => "body",
    }
    
    ]}) do
  cross_origin
  # the guts live here

  {"message" => "yes, it worked"}.to_json
end

