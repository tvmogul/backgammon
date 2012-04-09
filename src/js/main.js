require(
	[ "jquery", "backgammon/main" ],
	function( $, bgm ) {
		
	    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
	    $( function( ) {
	        // alert( "game? " + bgm.game );

	    } );

		$( 'body' ).append( '<h2>' + bgm.game + '</h2>' );

	}
);
//define("main", function(){});