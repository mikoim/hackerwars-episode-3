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
    root.HomeQuest.Status = factory(root.HomeQuest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Status model module.
   * @module model/Status
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>Status</code>.
   * @alias module:model/Status
   * @class
   * @param familyName
   * @param givenName
   * @param point
   * @param isAdmin
   * @param userUuid
   */
  var exports = function(familyName, givenName, point, isAdmin, userUuid) {

    this['family_name'] = familyName;
    this['given_name'] = givenName;
    this['point'] = point;
    this['is_admin'] = isAdmin;
    this['user_uuid'] = userUuid;
  };

  /**
   * Constructs a <code>Status</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Status} obj Optional instance to populate.
   * @return {module:model/Status} The populated <code>Status</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('family_name')) {
        obj['family_name'] = ApiClient.convertToType(data['family_name'], 'String');
      }
      if (data.hasOwnProperty('given_name')) {
        obj['given_name'] = ApiClient.convertToType(data['given_name'], 'String');
      }
      if (data.hasOwnProperty('point')) {
        obj['point'] = ApiClient.convertToType(data['point'], 'Integer');
      }
      if (data.hasOwnProperty('is_admin')) {
        obj['is_admin'] = ApiClient.convertToType(data['is_admin'], 'Boolean');
      }
      if (data.hasOwnProperty('user_uuid')) {
        obj['user_uuid'] = ApiClient.convertToType(data['user_uuid'], 'String');
      }
    }
    return obj;
  }


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

  /**
   * Point
   * @member {Integer} point
   */
  exports.prototype['point'] = undefined;

  /**
   * Is account administrator?
   * @member {Boolean} is_admin
   */
  exports.prototype['is_admin'] = undefined;

  /**
   * UUID of User
   * @member {String} user_uuid
   */
  exports.prototype['user_uuid'] = undefined;




  return exports;
}));
