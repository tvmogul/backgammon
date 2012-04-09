define(
	[ "./gamemodel" ],
	function( GameModel ) {

		var model = new GameModel();

		return {
			game: model.game
		}

	}
);