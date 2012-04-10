require(
	[ "jquery", "backgammon/main" ],
	function( $, bgm ) {
		
	    $( function( ) {
	        // alert( "game? " + bgm.game );

	    } );

		$( 'body' ).append( '<h2>' + bgm.game + '</h2>' );
		$( 'body' ).append( '<h2>' + bgm.positions.toString() + '</h2>' );

	}
);
//define("main", function(){});