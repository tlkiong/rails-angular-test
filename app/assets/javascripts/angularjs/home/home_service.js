(function() {
	angular.module('Home')
		.service('homeService', homeService);

		homeService.$inject = [];
		function homeService() {
			var service = this;

			/* ======================================== Var ==================================================== */
			service.d = ['Angular', 'Rails 4.1', 'UI Router', 'Together!!'];

	        /* ======================================== Services =============================================== */

	        /* ======================================== Public Methods ========================================= */

	        /* ======================================== Private Methods ======================================== */
		}

})();