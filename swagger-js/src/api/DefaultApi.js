(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/Child', 'model/NewChild', 'model/Notification', 'model/Reward', 'model/NewReward', 'model/NewSignin', 'model/Signin', 'model/Signup', 'model/Status', 'model/Task', 'model/NewTask', 'model/UpdateTaskState'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/Child'), require('../model/NewChild'), require('../model/Notification'), require('../model/Reward'), require('../model/NewReward'), require('../model/NewSignin'), require('../model/Signin'), require('../model/Signup'), require('../model/Status'), require('../model/Task'), require('../model/NewTask'), require('../model/UpdateTaskState'));
  } else {
    // Browser globals (root is window)
    if (!root.HomeQuest) {
      root.HomeQuest = {};
    }
    root.HomeQuest.DefaultApi = factory(root.HomeQuest.ApiClient, root.HomeQuest.Error, root.HomeQuest.Child, root.HomeQuest.NewChild, root.HomeQuest.Notification, root.HomeQuest.Reward, root.HomeQuest.NewReward, root.HomeQuest.NewSignin, root.HomeQuest.Signin, root.HomeQuest.Signup, root.HomeQuest.Status, root.HomeQuest.Task, root.HomeQuest.NewTask, root.HomeQuest.UpdateTaskState);
  }
}(this, function(ApiClient, Error, Child, NewChild, Notification, Reward, NewReward, NewSignin, Signin, Signup, Status, Task, NewTask, UpdateTaskState) {
  'use strict';

  /**
   * Default service.
   * @module api/DefaultApi
   * @version 0.0.3
   */

  /**
   * Constructs a new DefaultApi. 
   * @alias module:api/DefaultApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the childChildUuidDelete operation.
     * @callback module:api/DefaultApi~childChildUuidDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Child
     * @param {String} childUuid UUID of Child
     * @param {module:api/DefaultApi~childChildUuidDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.childChildUuidDelete = function(childUuid, callback) {
      var postBody = null;

      // verify the required parameter 'childUuid' is set
      if (childUuid == undefined || childUuid == null) {
        throw "Missing the required parameter 'childUuid' when calling childChildUuidDelete";
      }


      var pathParams = {
        'child_uuid': childUuid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/child/{child_uuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the childGet operation.
     * @callback module:api/DefaultApi~childGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Child>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get array of Child
     * @param {module:api/DefaultApi~childGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Child>}
     */
    this.childGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Child];

      return this.apiClient.callApi(
        '/child', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the childPost operation.
     * @callback module:api/DefaultApi~childPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Child} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Child
     * @param {module:model/NewChild} body 
     * @param {module:api/DefaultApi~childPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Child}
     */
    this.childPost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling childPost";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Child;

      return this.apiClient.callApi(
        '/child', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the notificationGet operation.
     * @callback module:api/DefaultApi~notificationGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Notification>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get array of Notification
     * @param {module:api/DefaultApi~notificationGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Notification>}
     */
    this.notificationGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Notification];

      return this.apiClient.callApi(
        '/notification', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the rewardGet operation.
     * @callback module:api/DefaultApi~rewardGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Reward>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get array of Reward
     * @param {module:api/DefaultApi~rewardGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Reward>}
     */
    this.rewardGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Reward];

      return this.apiClient.callApi(
        '/reward', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the rewardPost operation.
     * @callback module:api/DefaultApi~rewardPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Reward} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create reward
     * @param {module:model/NewReward} body 
     * @param {module:api/DefaultApi~rewardPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Reward}
     */
    this.rewardPost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling rewardPost";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Reward;

      return this.apiClient.callApi(
        '/reward', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the rewardRewardUuidGet operation.
     * @callback module:api/DefaultApi~rewardRewardUuidGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Earn Reward
     * @param {String} rewardUuid UUID of Reward
     * @param {module:api/DefaultApi~rewardRewardUuidGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.rewardRewardUuidGet = function(rewardUuid, callback) {
      var postBody = null;

      // verify the required parameter 'rewardUuid' is set
      if (rewardUuid == undefined || rewardUuid == null) {
        throw "Missing the required parameter 'rewardUuid' when calling rewardRewardUuidGet";
      }


      var pathParams = {
        'reward_uuid': rewardUuid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/reward/{reward_uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the signinPost operation.
     * @callback module:api/DefaultApi~signinPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Signin} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Login
     * @param {module:model/NewSignin} body 
     * @param {module:api/DefaultApi~signinPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Signin}
     */
    this.signinPost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling signinPost";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Signin;

      return this.apiClient.callApi(
        '/signin', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the signupPost operation.
     * @callback module:api/DefaultApi~signupPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register family account
     * @param {module:model/Signup} body Signup object
     * @param {module:api/DefaultApi~signupPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.signupPost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling signupPost";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/signup', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the statusGet operation.
     * @callback module:api/DefaultApi~statusGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Status} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Status
     * @param {module:api/DefaultApi~statusGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Status}
     */
    this.statusGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Status;

      return this.apiClient.callApi(
        '/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the taskGet operation.
     * @callback module:api/DefaultApi~taskGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Task>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get array of Task
     * @param {module:api/DefaultApi~taskGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Task>}
     */
    this.taskGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Task];

      return this.apiClient.callApi(
        '/task', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the taskPost operation.
     * @callback module:api/DefaultApi~taskPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Task} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Task
     * @param {module:model/NewTask} body 
     * @param {module:api/DefaultApi~taskPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Task}
     */
    this.taskPost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling taskPost";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Task;

      return this.apiClient.callApi(
        '/task', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the taskTaskUuidDelete operation.
     * @callback module:api/DefaultApi~taskTaskUuidDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Task
     * @param {String} taskUuid UUID of Task
     * @param {module:api/DefaultApi~taskTaskUuidDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.taskTaskUuidDelete = function(taskUuid, callback) {
      var postBody = null;

      // verify the required parameter 'taskUuid' is set
      if (taskUuid == undefined || taskUuid == null) {
        throw "Missing the required parameter 'taskUuid' when calling taskTaskUuidDelete";
      }


      var pathParams = {
        'task_uuid': taskUuid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/task/{task_uuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the taskTaskUuidGet operation.
     * @callback module:api/DefaultApi~taskTaskUuidGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Task} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Task
     * @param {String} taskUuid UUID of Task
     * @param {module:api/DefaultApi~taskTaskUuidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Task}
     */
    this.taskTaskUuidGet = function(taskUuid, callback) {
      var postBody = null;

      // verify the required parameter 'taskUuid' is set
      if (taskUuid == undefined || taskUuid == null) {
        throw "Missing the required parameter 'taskUuid' when calling taskTaskUuidGet";
      }


      var pathParams = {
        'task_uuid': taskUuid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Task;

      return this.apiClient.callApi(
        '/task/{task_uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the taskTaskUuidPost operation.
     * @callback module:api/DefaultApi~taskTaskUuidPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Task} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update status of Task
     * @param {String} taskUuid UUID of Task
     * @param {module:model/UpdateTaskState} body updateTaskState object
     * @param {module:api/DefaultApi~taskTaskUuidPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Task}
     */
    this.taskTaskUuidPost = function(taskUuid, body, callback) {
      var postBody = body;

      // verify the required parameter 'taskUuid' is set
      if (taskUuid == undefined || taskUuid == null) {
        throw "Missing the required parameter 'taskUuid' when calling taskTaskUuidPost";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling taskTaskUuidPost";
      }


      var pathParams = {
        'task_uuid': taskUuid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Task;

      return this.apiClient.callApi(
        '/task/{task_uuid}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
