(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
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
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>UpdateTaskState</code>.
   * @alias module:model/UpdateTaskState
   * @class
   */
  var exports = function() {






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

      if (data.hasOwnProperty('is_accept')) {
        obj['is_accept'] = ApiClient.convertToType(data['is_accept'], 'Boolean');
      }
      if (data.hasOwnProperty('is_cancel')) {
        obj['is_cancel'] = ApiClient.convertToType(data['is_cancel'], 'Boolean');
      }
      if (data.hasOwnProperty('is_complete')) {
        obj['is_complete'] = ApiClient.convertToType(data['is_complete'], 'Boolean');
      }
      if (data.hasOwnProperty('is_reject')) {
        obj['is_reject'] = ApiClient.convertToType(data['is_reject'], 'Boolean');
      }
      if (data.hasOwnProperty('is_verified')) {
        obj['is_verified'] = ApiClient.convertToType(data['is_verified'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * Is quest accepted?
   * @member {Boolean} is_accept
   */
  exports.prototype['is_accept'] = undefined;

  /**
   * Is quest cancelled?
   * @member {Boolean} is_cancel
   */
  exports.prototype['is_cancel'] = undefined;

  /**
   * Is quest completed?
   * @member {Boolean} is_complete
   */
  exports.prototype['is_complete'] = undefined;

  /**
   * Is quest rejected?
   * @member {Boolean} is_reject
   */
  exports.prototype['is_reject'] = undefined;

  /**
   * Is quest verified?
   * @member {Boolean} is_verified
   */
  exports.prototype['is_verified'] = undefined;




  return exports;
}));
