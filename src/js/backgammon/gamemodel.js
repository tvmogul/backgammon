define(
	[ "./gamefactory" ],
	function( gf ) {

		return function() {
			
			this.game = "backgammon, no really";
			this.positions = gf.positions;

		}

	}
);