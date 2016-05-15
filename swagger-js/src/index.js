(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/Child', './model/Error', './model/NewChild', './model/NewReward', './model/NewSignin', './model/NewTask', './model/Notification', './model/Reward', './model/Signin', './model/Signup', './model/Status', './model/Task', './model/UpdateTaskState', './api/DefaultApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Child'), require('./model/Error'), require('./model/NewChild'), require('./model/NewReward'), require('./model/NewSignin'), require('./model/NewTask'), require('./model/Notification'), require('./model/Reward'), require('./model/Signin'), require('./model/Signup'), require('./model/Status'), require('./model/Task'), require('./model/UpdateTaskState'), require('./api/DefaultApi'));
  }
}(function(ApiClient, Child, Error, NewChild, NewReward, NewSignin, NewTask, Notification, Reward, Signin, Signup, Status, Task, UpdateTaskState, DefaultApi) {
  'use strict';

  /**
   * ToDo App for Kids.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var HomeQuest = require('./index'); // See note below*.
   * var xxxSvc = new HomeQuest.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new HomeQuest.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['./index'], function(){...}) and put the application logic within the
   * callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new HomeQuest.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new HomeQuest.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.0.2
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Child model constructor.
     * @property {module:model/Child}
     */
    Child: Child,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The NewChild model constructor.
     * @property {module:model/NewChild}
     */
    NewChild: NewChild,
    /**
     * The NewReward model constructor.
     * @property {module:model/NewReward}
     */
    NewReward: NewReward,
    /**
     * The NewSignin model constructor.
     * @property {module:model/NewSignin}
     */
    NewSignin: NewSignin,
    /**
     * The NewTask model constructor.
     * @property {module:model/NewTask}
     */
    NewTask: NewTask,
    /**
     * The Notification model constructor.
     * @property {module:model/Notification}
     */
    Notification: Notification,
    /**
     * The Reward model constructor.
     * @property {module:model/Reward}
     */
    Reward: Reward,
    /**
     * The Signin model constructor.
     * @property {module:model/Signin}
     */
    Signin: Signin,
    /**
     * The Signup model constructor.
     * @property {module:model/Signup}
     */
    Signup: Signup,
    /**
     * The Status model constructor.
     * @property {module:model/Status}
     */
    Status: Status,
    /**
     * The Task model constructor.
     * @property {module:model/Task}
     */
    Task: Task,
    /**
     * The UpdateTaskState model constructor.
     * @property {module:model/UpdateTaskState}
     */
    UpdateTaskState: UpdateTaskState,
    /**
     * The DefaultApi service constructor.
     * @property {module:api/DefaultApi}
     */
    DefaultApi: DefaultApi
  };

  return exports;
}));
