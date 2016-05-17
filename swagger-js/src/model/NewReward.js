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
    root.HomeQuest.NewReward = factory(root.HomeQuest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NewReward model module.
   * @module model/NewReward
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>NewReward</code>.
   * @alias module:model/NewReward
   * @class
   * @param title
   * @param point
   */
  var exports = function(title, point) {
    var _this = this;

    _this['title'] = title;
    _this['point'] = point;
  };

  /**
   * Constructs a <code>NewReward</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewReward} obj Optional instance to populate.
   * @return {module:model/NewReward} The populated <code>NewReward</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

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


