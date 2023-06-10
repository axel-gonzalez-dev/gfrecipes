'use strict';

/**
 * street-food service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::street-food.street-food');
