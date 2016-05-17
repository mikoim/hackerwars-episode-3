(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.HomeQuest) {
      root.HomeQuest = {};
    }
    root.HomeQuest.Task = factory(root.HomeQuest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Task model module.
   * @module model/Task
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>Task</code>.
   * @alias module:model/Task
   * @class
   * @param uuid
   * @param title
   * @param applicationDeadline
   * @param completionDeadline
   * @param point
   * @param difficulty
   * @param description
   * @param isAccepted
   * @param isCanceled
   * @param isCompleted
   * @param isRejected
   * @param isVerified
   * @param acceptedChild
   * @param completedChild
   * @param verifiedChild
   */
  var exports = function(uuid, title, applicationDeadline, completionDeadline, point, difficulty, description, isAccepted, isCanceled, isCompleted, isRejected, isVerified, acceptedChild, completedChild, verifiedChild) {
    var _this = this;

    _this['uuid'] = uuid;
    _this['title'] = title;
    _this['application_deadline'] = applicationDeadline;
    _this['completion_deadline'] = completionDeadline;
    _this['point'] = point;
    _this['difficulty'] = difficulty;
    _this['description'] = description;
    _this['is_accepted'] = isAccepted;
    _this['is_canceled'] = isCanceled;
    _this['is_completed'] = isCompleted;
    _this['is_rejected'] = isRejected;
    _this['is_verified'] = isVerified;
    _this['accepted_child'] = acceptedChild;
    _this['completed_child'] = completedChild;
    _this['verified_child'] = verifiedChild;
  };

  /**
   * Constructs a <code>Task</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Task} obj Optional instance to populate.
   * @return {module:model/Task} The populated <code>Task</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('application_deadline')) {
        obj['application_deadline'] = ApiClient.convertToType(data['application_deadline'], 'Integer');
      }
      if (data.hasOwnProperty('completion_deadline')) {
        obj['completion_deadline'] = ApiClient.convertToType(data['completion_deadline'], 'Integer');
      }
      if (data.hasOwnProperty('point')) {
        obj['point'] = ApiClient.convertToType(data['point'], 'Integer');
      }
      if (data.hasOwnProperty('difficulty')) {
        obj['difficulty'] = ApiClient.convertToType(data['difficulty'], 'Integer');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('is_accepted')) {
        obj['is_accepted'] = ApiClient.convertToType(data['is_accepted'], 'Boolean');
      }
      if (data.hasOwnProperty('is_canceled')) {
        obj['is_canceled'] = ApiClient.convertToType(data['is_canceled'], 'Boolean');
      }
      if (data.hasOwnProperty('is_completed')) {
        obj['is_completed'] = ApiClient.convertToType(data['is_completed'], 'Boolean');
      }
      if (data.hasOwnProperty('is_rejected')) {
        obj['is_rejected'] = ApiClient.convertToType(data['is_rejected'], 'Boolean');
      }
      if (data.hasOwnProperty('is_verified')) {
        obj['is_verified'] = ApiClient.convertToType(data['is_verified'], 'Boolean');
      }
      if (data.hasOwnProperty('accepted_child')) {
        obj['accepted_child'] = ApiClient.convertToType(data['accepted_child'], ['String']);
      }
      if (data.hasOwnProperty('completed_child')) {
        obj['completed_child'] = ApiClient.convertToType(data['completed_child'], ['String']);
      }
      if (data.hasOwnProperty('verified_child')) {
        obj['verified_child'] = ApiClient.convertToType(data['verified_child'], ['String']);
      }
    }
    return obj;
  }

  /**
   * UUID of Task
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * Quest name
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * Deadline of application
   * @member {Integer} application_deadline
   */
  exports.prototype['application_deadline'] = undefined;
  /**
   * Deadline of completion
   * @member {Integer} completion_deadline
   */
  exports.prototype['completion_deadline'] = undefined;
  /**
   * Point
   * @member {Integer} point
   */
  exports.prototype['point'] = undefined;
  /**
   * Difficulty
   * @member {Integer} difficulty
   */
  exports.prototype['difficulty'] = undefined;
  /**
   * Description
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Is quest accepted?
   * @member {Boolean} is_accepted
   */
  exports.prototype['is_accepted'] = undefined;
  /**
   * Is quest canceled?
   * @member {Boolean} is_canceled
   */
  exports.prototype['is_canceled'] = undefined;
  /**
   * Is quest completed?
   * @member {Boolean} is_completed
   */
  exports.prototype['is_completed'] = undefined;
  /**
   * Is quest rejected?
   * @member {Boolean} is_rejected
   */
  exports.prototype['is_rejected'] = undefined;
  /**
   * Is quest verified?
   * @member {Boolean} is_verified
   */
  exports.prototype['is_verified'] = undefined;
  /**
   * Array of Child UUID
   * @member {Array.<String>} accepted_child
   */
  exports.prototype['accepted_child'] = undefined;
  /**
   * Array of Child UUID
   * @member {Array.<String>} completed_child
   */
  exports.prototype['completed_child'] = undefined;
  /**
   * Array of Child UUID
   * @member {Array.<String>} verified_child
   */
  exports.prototype['verified_child'] = undefined;




  return exports;
}));


