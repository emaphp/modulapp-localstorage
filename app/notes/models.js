/**
 * models.js
 * ---------
 * Models for Notes module
 */

var Backbone = require('backbone');
var LocalStorage = require('localstorage');
var Config = require('../config');
var Model = require('../model');
var Collection = require('../collection');
var moment = require('moment');

var Note = Model.extend({
    localStorage: new LocalStorage(Config.Notes.collectionId),
    validation: {
        title: {
            required: true
        },
        body: {
            required: true
        }
    }
});

var NotesCollection = Collection.extend({
    model: Note,
    localStorage: new LocalStorage(Config.Notes.collectionId),
    comparator: function (n1, n2) {
        var t1 = moment(n1.get('createdAt')).format('X');
        var t2 = moment(n2.get('createdAt')).format('X');
        return t2 - t1;
    }
});

module.exports = {
    Note: Note,
    NotesCollection: NotesCollection
};