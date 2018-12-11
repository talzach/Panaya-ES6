
///
/// Method definition shorthand syntax
///

// Before
function getCar(make, model, value) {
	return {
		tal: function() {
			this.value -= 2500;
		}
	};
}

// After
function getCar(make, model, value) {
	return {
		tal() {
			this.value -= 2500;
		}
	};
}