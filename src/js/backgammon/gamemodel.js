define(
	[ "./gamefactory" ],
	function( GameFactory ) {

		var gf = new GameFactory();

		return function() {
			
			this.game = "backgammon, no really";
			this.positions = gf.createPositions();

		}

	}
);