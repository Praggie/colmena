'use strict'

const { relationMixin } = require('../../lib/relation-mixin')

module.exports = (Model, options) => {
  options.targetModel = 'SystemDomain'
  options.foreignKey = options.foreignKey || 'systemDomainId'
  options.required = options.required || false
  return relationMixin(Model, options)
}
