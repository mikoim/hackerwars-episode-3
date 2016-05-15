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
    root.HomeQuest.Child = factory(root.HomeQuest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Child model module.
   * @module model/Child
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>Child</code>.
   * @alias module:model/Child
   * @class
   * @param uuid
   * @param givenName
   * @param familyName
   * @param loginToken
   */
  var exports = function(uuid, givenName, familyName, loginToken) {

    this['uuid'] = uuid;
    this['given_name'] = givenName;
    this['family_name'] = familyName;
    this['login_token'] = loginToken;
  };

  /**
   * Constructs a <code>Child</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Child} obj Optional instance to populate.
   * @return {module:model/Child} The populated <code>Child</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('given_name')) {
        obj['given_name'] = ApiClient.convertToType(data['given_name'], 'String');
      }
      if (data.hasOwnProperty('family_name')) {
        obj['family_name'] = ApiClient.convertToType(data['family_name'], 'String');
      }
      if (data.hasOwnProperty('login_token')) {
        obj['login_token'] = ApiClient.convertToType(data['login_token'], 'String');
      }
    }
    return obj;
  }


  /**
   * UUID of Child
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;

  /**
   * Given name
   * @member {String} given_name
   */
  exports.prototype['given_name'] = undefined;

  /**
   * Family name
   * @member {String} family_name
   */
  exports.prototype['family_name'] = undefined;

  /**
   * Login token
   * @member {String} login_token
   */
  exports.prototype['login_token'] = undefined;




  return exports;
}));
