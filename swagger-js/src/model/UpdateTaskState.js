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
    root.HomeQuest.UpdateTaskState = factory(root.HomeQuest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UpdateTaskState model module.
   * @module model/UpdateTaskState
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>UpdateTaskState</code>.
   * @alias module:model/UpdateTaskState
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>UpdateTaskState</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateTaskState} obj Optional instance to populate.
   * @return {module:model/UpdateTaskState} The populated <code>UpdateTaskState</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

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
    }
    return obj;
  }

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




  return exports;
}));


