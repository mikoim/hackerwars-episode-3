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
    root.HomeQuest.NewSignin = factory(root.HomeQuest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NewSignin model module.
   * @module model/NewSignin
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>NewSignin</code>.
   * @alias module:model/NewSignin
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>NewSignin</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewSignin} obj Optional instance to populate.
   * @return {module:model/NewSignin} The populated <code>NewSignin</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('login_token')) {
        obj['login_token'] = ApiClient.convertToType(data['login_token'], 'String');
      }
    }
    return obj;
  }


  /**
   * E-mail address
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * Password
   * @member {String} password
   */
  exports.prototype['password'] = undefined;

  /**
   * Login token
   * @member {String} login_token
   */
  exports.prototype['login_token'] = undefined;




  return exports;
}));
