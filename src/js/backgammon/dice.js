define(
	function() {

		return function() {
			
			this.roll = function() {
				return Math.ceil( Math.random() * 6 );
			}

		}

	}
);