/**
 * Collection
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {

  attributes: {
  	name:   { type: 'string' },
    path:   { type: 'string' },
    model:  { type: 'string' },
    cards:  { type: 'string' },
    active: { type: 'boolean' }
  },

  adapter: 'mongo'

};
