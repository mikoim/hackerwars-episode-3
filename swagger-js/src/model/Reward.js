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
    root.HomeQuest.Reward = factory(root.HomeQuest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Reward model module.
   * @module model/Reward
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>Reward</code>.
   * @alias module:model/Reward
   * @class
   * @param uuid
   * @param title
   * @param point
   */
  var exports = function(uuid, title, point) {

    this['uuid'] = uuid;
    this['title'] = title;
    this['point'] = point;
  };

  /**
   * Constructs a <code>Reward</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Reward} obj Optional instance to populate.
   * @return {module:model/Reward} The populated <code>Reward</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('point')) {
        obj['point'] = ApiClient.convertToType(data['point'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * UUID of Reward
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;

  /**
   * Reward name
   * @member {String} title
   */
  exports.prototype['title'] = undefined;

  /**
   * Cost
   * @member {Integer} point
   */
  exports.prototype['point'] = undefined;




  return exports;
}));
