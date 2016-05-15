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
    root.HomeQuest.NewChild = factory(root.HomeQuest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NewChild model module.
   * @module model/NewChild
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>NewChild</code>.
   * @alias module:model/NewChild
   * @class
   * @param givenName
   */
  var exports = function(givenName) {

    this['given_name'] = givenName;
  };

  /**
   * Constructs a <code>NewChild</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewChild} obj Optional instance to populate.
   * @return {module:model/NewChild} The populated <code>NewChild</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('given_name')) {
        obj['given_name'] = ApiClient.convertToType(data['given_name'], 'String');
      }
    }
    return obj;
  }


  /**
   * Given name
   * @member {String} given_name
   */
  exports.prototype['given_name'] = undefined;




  return exports;
}));
