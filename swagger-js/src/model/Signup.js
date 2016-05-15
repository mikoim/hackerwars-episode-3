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
    root.HomeQuest.Signup = factory(root.HomeQuest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Signup model module.
   * @module model/Signup
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>Signup</code>.
   * @alias module:model/Signup
   * @class
   * @param email
   * @param password
   * @param familyName
   * @param givenName
   */
  var exports = function(email, password, familyName, givenName) {

    this['email'] = email;
    this['password'] = password;
    this['family_name'] = familyName;
    this['given_name'] = givenName;
  };

  /**
   * Constructs a <code>Signup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Signup} obj Optional instance to populate.
   * @return {module:model/Signup} The populated <code>Signup</code> instance.
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
      if (data.hasOwnProperty('family_name')) {
        obj['family_name'] = ApiClient.convertToType(data['family_name'], 'String');
      }
      if (data.hasOwnProperty('given_name')) {
        obj['given_name'] = ApiClient.convertToType(data['given_name'], 'String');
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
   * Family name
   * @member {String} family_name
   */
  exports.prototype['family_name'] = undefined;

  /**
   * Given name
   * @member {String} given_name
   */
  exports.prototype['given_name'] = undefined;




  return exports;
}));
