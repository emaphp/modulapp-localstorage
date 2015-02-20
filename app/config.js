/**
 * config.js
 * ---------
 * Main configuration file
 */
 
module.exports = {
    debug: true, //log debug messages

    //notes config
    Notes: {
        collectionId: "NotesCollection"
    },

    //contacts config
    Contacts: {
        collectionId: "ContactsCollection",
		filterDelay: 250 //contact filter delay in ms
    },

    //notifier config
    Notifier: {
        position: 'bottom' //"bottom" or "top"
    }
};