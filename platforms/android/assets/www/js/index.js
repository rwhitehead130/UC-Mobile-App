var app = {
	
    initialize: function() {
        this.bindEvents();
    },
    
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    onDeviceReady: function() {
		navigator.geolocation.getCurrentPosition(app.onSuccess, app.onError);
    },
    
    onSuccess: function(position) {
		
		var mapOptions = {
			center: new google.maps.LatLng(-43.523893, 172.583649),
			zoom: 15,
			scrollwheel: false,
			styles: styles,
			disableDefaultUI: true
		};
	
		var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);	
	
	},
	
	onError: function(error) {
		alert(error.message);
	}

};
