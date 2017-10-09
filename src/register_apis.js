'use strict'

module.exports = (Mozaik, configFile, config) => {
    Mozaik.registerApi('pagarme', require('mozaik-ext-pagarme/client'))    
}
