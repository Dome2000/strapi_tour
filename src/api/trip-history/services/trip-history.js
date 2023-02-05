'use strict';

/**
 * trip-history service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trip-history.trip-history');
