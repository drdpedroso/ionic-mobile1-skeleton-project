var Messages = {
    // Add here your messages for the default language.
    // Generate a similar file with a language suffix containing the translated messages.
    // key1 : message1,
};

var wlInitOptions = {
    // Options to initialize with the WL.Client object.
    // For initialization options please refer to IBM MobileFirst Platform Foundation Knowledge Center.
};

// Called automatically after MFP framework initialization by WL.Client.init(wlInitOptions).
function wlCommonInit(){
	// Common initialization code goes here
    document.getElementById('app_version').textContent = WL.Client.getAppProperty("APP_VERSION");
    document.getElementById('mobilefirst').setAttribute('style', 'display:block;');
}

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, 'app.receivedEvent(...);' must be explicitly called.
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    // Update the DOM on a received event.
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
