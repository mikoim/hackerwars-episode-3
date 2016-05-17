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
    root.HomeQuest.NewTask = factory(root.HomeQuest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NewTask model module.
   * @module model/NewTask
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>NewTask</code>.
   * @alias module:model/NewTask
   * @class
   * @param title
   * @param applicationDeadline
   * @param completionDeadline
   * @param point
   * @param difficulty
   * @param description
   */
  var exports = function(title, applicationDeadline, completionDeadline, point, difficulty, description) {
    var _this = this;

    _this['title'] = title;
    _this['application_deadline'] = applicationDeadline;
    _this['completion_deadline'] = completionDeadline;
    _this['point'] = point;
    _this['difficulty'] = difficulty;
    _this['description'] = description;
  };

  /**
   * Constructs a <code>NewTask</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewTask} obj Optional instance to populate.
   * @return {module:model/NewTask} The populated <code>NewTask</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

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
    }
    return obj;
  }

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




  return exports;
}));


