/**
 * models.js
 * ---------
 * Models for Contacts module
 */

var LocalStorage = require('localstorage');
var Config = require('../config');
var Model = require('../model');
var Collection = require('../collection');

var Contact = Model.extend({
    localStorage: new LocalStorage(Config.Contacts.collectionId),
    
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

var ContactsCollection = Collection.extend({
    model: Contact,
    comparator: 'name',
    localStorage: new LocalStorage(Config.Contacts.collectionId)
});

module.exports = {
    Contact: Contact,
    ContactsCollection: ContactsCollection
};