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
    root.HomeQuest.Notification = factory(root.HomeQuest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Notification model module.
   * @module model/Notification
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>Notification</code>.
   * @alias module:model/Notification
   * @class
   * @param timestamp
   * @param message
   */
  var exports = function(timestamp, message) {
    var _this = this;

    _this['timestamp'] = timestamp;
    _this['message'] = message;
  };

  /**
   * Constructs a <code>Notification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Notification} obj Optional instance to populate.
   * @return {module:model/Notification} The populated <code>Notification</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Integer');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }

  /**
   * Unix Time Stamp
   * @member {Integer} timestamp
   */
  exports.prototype['timestamp'] = undefined;
  /**
   * Notify message
   * @member {String} message
   */
  exports.prototype['message'] = undefined;




  return exports;
}));


