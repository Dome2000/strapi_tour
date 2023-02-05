'use strict';

/**
 * invoid service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::invoid.invoid');
