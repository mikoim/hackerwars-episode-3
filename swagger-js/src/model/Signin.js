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
    root.HomeQuest.Signin = factory(root.HomeQuest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Signin model module.
   * @module model/Signin
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>Signin</code>.
   * @alias module:model/Signin
   * @class
   * @param homequestToken
   */
  var exports = function(homequestToken) {

    this['homequest_token'] = homequestToken;
  };

  /**
   * Constructs a <code>Signin</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Signin} obj Optional instance to populate.
   * @return {module:model/Signin} The populated <code>Signin</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('homequest_token')) {
        obj['homequest_token'] = ApiClient.convertToType(data['homequest_token'], 'String');
      }
    }
    return obj;
  }


  /**
   * Authenticated login token
   * @member {String} homequest_token
   */
  exports.prototype['homequest_token'] = undefined;




  return exports;
}));
