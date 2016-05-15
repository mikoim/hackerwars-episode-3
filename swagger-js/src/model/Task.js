(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Child'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Child'));
  } else {
    // Browser globals (root is window)
    if (!root.HomeQuest) {
      root.HomeQuest = {};
    }
    root.HomeQuest.Task = factory(root.HomeQuest.ApiClient, root.HomeQuest.Child);
  }
}(this, function(ApiClient, Child) {
  'use strict';

  /**
   * The Task model module.
   * @module model/Task
   * @version 0.0.2
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
   * @param isAccept
   * @param acceptedChild
   */
  var exports = function(uuid, title, applicationDeadline, completionDeadline, point, difficulty, description, isAccept, acceptedChild) {

    this['uuid'] = uuid;
    this['title'] = title;
    this['application_deadline'] = applicationDeadline;
    this['completion_deadline'] = completionDeadline;
    this['point'] = point;
    this['difficulty'] = difficulty;
    this['description'] = description;
    this['is_accept'] = isAccept;
    this['accepted_child'] = acceptedChild;
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
      if (data.hasOwnProperty('is_accept')) {
        obj['is_accept'] = ApiClient.convertToType(data['is_accept'], 'Boolean');
      }
      if (data.hasOwnProperty('accepted_child')) {
        obj['accepted_child'] = ApiClient.convertToType(data['accepted_child'], [Child]);
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
   * @member {Boolean} is_accept
   */
  exports.prototype['is_accept'] = undefined;

  /**
   * Array of Child
   * @member {Array.<module:model/Child>} accepted_child
   */
  exports.prototype['accepted_child'] = undefined;




  return exports;
}));
