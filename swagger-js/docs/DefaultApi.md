# HomeQuest.DefaultApi

All URIs are relative to *http://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**childChildUuidDelete**](DefaultApi.md#childChildUuidDelete) | **DELETE** /child/{child_uuid} | Delete Child
[**childGet**](DefaultApi.md#childGet) | **GET** /child | Get array of Child
[**childPost**](DefaultApi.md#childPost) | **POST** /child | Create Child
[**notificationGet**](DefaultApi.md#notificationGet) | **GET** /notification | Get array of Notification
[**rewardGet**](DefaultApi.md#rewardGet) | **GET** /reward | Get array of Reward
[**rewardPost**](DefaultApi.md#rewardPost) | **POST** /reward | Create reward
[**rewardRewardUuidGet**](DefaultApi.md#rewardRewardUuidGet) | **GET** /reward/{reward_uuid} | Earn Reward
[**signinPost**](DefaultApi.md#signinPost) | **POST** /signin | Login
[**signupPost**](DefaultApi.md#signupPost) | **POST** /signup | Register family account
[**statusGet**](DefaultApi.md#statusGet) | **GET** /status | Get Status
[**taskGet**](DefaultApi.md#taskGet) | **GET** /task | Get array of Task
[**taskPost**](DefaultApi.md#taskPost) | **POST** /task | Create Task
[**taskTaskUuidDelete**](DefaultApi.md#taskTaskUuidDelete) | **DELETE** /task/{task_uuid} | Delete Task
[**taskTaskUuidGet**](DefaultApi.md#taskTaskUuidGet) | **GET** /task/{task_uuid} | Get Task
[**taskTaskUuidPost**](DefaultApi.md#taskTaskUuidPost) | **POST** /task/{task_uuid} | Update status of Task


<a name="childChildUuidDelete"></a>
# **childChildUuidDelete**
> childChildUuidDelete(childUuid)

Delete Child

### Example
```javascript
var HomeQuest = require('home-quest');
var defaultClient = HomeQuest.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new HomeQuest.DefaultApi();

var childUuid = "childUuid_example"; // String | UUID of Child


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.childChildUuidDelete(childUuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **childUuid** | **String**| UUID of Child | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="childGet"></a>
# **childGet**
> [Child] childGet()

Get array of Child

### Example
```javascript
var HomeQuest = require('home-quest');
var defaultClient = HomeQuest.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new HomeQuest.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.childGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Child]**](Child.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="childPost"></a>
# **childPost**
> Child childPost(body)

Create Child

### Example
```javascript
var HomeQuest = require('home-quest');
var defaultClient = HomeQuest.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new HomeQuest.DefaultApi();

var body = new HomeQuest.NewChild(); // NewChild | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.childPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NewChild**](NewChild.md)|  | 

### Return type

[**Child**](Child.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="notificationGet"></a>
# **notificationGet**
> [Notification] notificationGet()

Get array of Notification

### Example
```javascript
var HomeQuest = require('home-quest');
var defaultClient = HomeQuest.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new HomeQuest.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.notificationGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Notification]**](Notification.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="rewardGet"></a>
# **rewardGet**
> [Reward] rewardGet()

Get array of Reward

### Example
```javascript
var HomeQuest = require('home-quest');
var defaultClient = HomeQuest.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new HomeQuest.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rewardGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Reward]**](Reward.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="rewardPost"></a>
# **rewardPost**
> Reward rewardPost(body)

Create reward

### Example
```javascript
var HomeQuest = require('home-quest');
var defaultClient = HomeQuest.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new HomeQuest.DefaultApi();

var body = new HomeQuest.NewReward(); // NewReward | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rewardPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NewReward**](NewReward.md)|  | 

### Return type

[**Reward**](Reward.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="rewardRewardUuidGet"></a>
# **rewardRewardUuidGet**
> rewardRewardUuidGet(rewardUuid)

Earn Reward

### Example
```javascript
var HomeQuest = require('home-quest');
var defaultClient = HomeQuest.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new HomeQuest.DefaultApi();

var rewardUuid = "rewardUuid_example"; // String | UUID of Reward


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.rewardRewardUuidGet(rewardUuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rewardUuid** | **String**| UUID of Reward | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="signinPost"></a>
# **signinPost**
> Signin signinPost(body)

Login

### Example
```javascript
var HomeQuest = require('home-quest');

var apiInstance = new HomeQuest.DefaultApi();

var body = new HomeQuest.NewSignin(); // NewSignin | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.signinPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NewSignin**](NewSignin.md)|  | 

### Return type

[**Signin**](Signin.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="signupPost"></a>
# **signupPost**
> signupPost(body)

Register family account

### Example
```javascript
var HomeQuest = require('home-quest');

var apiInstance = new HomeQuest.DefaultApi();

var body = new HomeQuest.Signup(); // Signup | Signup object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.signupPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Signup**](Signup.md)| Signup object | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="statusGet"></a>
# **statusGet**
> Status statusGet()

Get Status

### Example
```javascript
var HomeQuest = require('home-quest');
var defaultClient = HomeQuest.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new HomeQuest.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.statusGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Status**](Status.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="taskGet"></a>
# **taskGet**
> [Task] taskGet()

Get array of Task

### Example
```javascript
var HomeQuest = require('home-quest');
var defaultClient = HomeQuest.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new HomeQuest.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.taskGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Task]**](Task.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="taskPost"></a>
# **taskPost**
> Task taskPost(body)

Create Task

### Example
```javascript
var HomeQuest = require('home-quest');
var defaultClient = HomeQuest.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new HomeQuest.DefaultApi();

var body = new HomeQuest.NewTask(); // NewTask | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.taskPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NewTask**](NewTask.md)|  | 

### Return type

[**Task**](Task.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="taskTaskUuidDelete"></a>
# **taskTaskUuidDelete**
> taskTaskUuidDelete(taskUuid)

Delete Task

### Example
```javascript
var HomeQuest = require('home-quest');
var defaultClient = HomeQuest.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new HomeQuest.DefaultApi();

var taskUuid = "taskUuid_example"; // String | UUID of Task


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.taskTaskUuidDelete(taskUuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskUuid** | **String**| UUID of Task | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="taskTaskUuidGet"></a>
# **taskTaskUuidGet**
> Task taskTaskUuidGet(taskUuid)

Get Task

### Example
```javascript
var HomeQuest = require('home-quest');
var defaultClient = HomeQuest.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new HomeQuest.DefaultApi();

var taskUuid = "taskUuid_example"; // String | UUID of Task


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.taskTaskUuidGet(taskUuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskUuid** | **String**| UUID of Task | 

### Return type

[**Task**](Task.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="taskTaskUuidPost"></a>
# **taskTaskUuidPost**
> Task taskTaskUuidPost(taskUuid, body)

Update status of Task

### Example
```javascript
var HomeQuest = require('home-quest');
var defaultClient = HomeQuest.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new HomeQuest.DefaultApi();

var taskUuid = "taskUuid_example"; // String | UUID of Task

var body = new HomeQuest.UpdateTaskState(); // UpdateTaskState | updateTaskState object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.taskTaskUuidPost(taskUuid, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskUuid** | **String**| UUID of Task | 
 **body** | [**UpdateTaskState**](UpdateTaskState.md)| updateTaskState object | 

### Return type

[**Task**](Task.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

