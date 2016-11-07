(function($){
	
	
	function initialize_field( $el ) {
		
		//$el.doStuff();

		var gllpLatlonPicker;

		gllpLatlonPicker = ( $el ).find( '.gllpLatlonPicker' );

		// console.log( gllpLatlonPicker );

		gllpLatlonPicker.each(function() {
			$obj = $(document).gMapsLatLonPicker();

			$obj.params.strings.markerText = "Drag this Marker (example edit)";

			$obj.params.displayError = function(message) {
				console.log("MAPS ERROR: " + message); // instead of alert()
			};

			$obj.init( $(this) );
		});
		
	}
	
	
	if( typeof acf.add_action !== 'undefined' ) {
	
		/*
		*  ready append (ACF5)
		*
		*  These are 2 events which are fired during the page load
		*  ready = on page load similar to $(document).ready()
		*  append = on new DOM elements appended via repeater field
		*
		*  @type	event
		*  @date	20/07/13
		*
		*  @param	$el (jQuery selection) the jQuery element which contains the ACF fields
		*  @return	n/a
		*/
		
		acf.add_action('ready append', function( $el ){
			
			// search $el for fields of type 'latlong_locator'
			acf.get_fields({ type : 'latlong_locator'}, $el).each(function(){
				
				initialize_field( $(this) );
				
			});
			
		});
		
		
	} else {
		
		
		/*
		*  acf/setup_fields (ACF4)
		*
		*  This event is triggered when ACF adds any new elements to the DOM. 
		*
		*  @type	function
		*  @since	1.0.0
		*  @date	01/01/12
		*
		*  @param	event		e: an event object. This can be ignored
		*  @param	Element		postbox: An element which contains the new HTML
		*
		*  @return	n/a
		*/
		
		$(document).on('acf/setup_fields', function(e, postbox){
			
			$(postbox).find('.field[data-field_type="latlong_locator"]').each(function(){
				
				initialize_field( $(this) );
				
			});
		
		});
	
	
	}


})(jQuery);
