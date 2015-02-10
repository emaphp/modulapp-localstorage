/**
 * models.js
 * ---------
 * Models for Contacts module
 */

var Backbone = require('backbone');
var LocalStorage = require('localstorage');
var Config = require('../config');

var Contact = Backbone.Model.extend({
    localStorage: new LocalStorage("ContactsCollection"),
    
    validation: {
        name: {
            required: true
        },
        email: {
            required: false,
            pattern: 'email'
        },
        phone: {
            required: false,
            pattern: 'digits'
        },
        twitter: {
            required: false,
            pattern: /^\w+$/,
            msg: "Invalid twitter account"
        }
    }
});

var ContactsCollection = Backbone.Collection.extend({
    model: Contact,
    comparator: 'name',
    localStorage: new LocalStorage("ContactsCollection")
});

module.exports = {
    Contact: Contact,
    ContactsCollection: ContactsCollection
};