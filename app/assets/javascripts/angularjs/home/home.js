(function () {
	angular.module('Home', [])
		.config(function ($stateProvider) {
			$stateProvider
				.state('home', {
                    url: '/',
                    views: {
                        'main': {
                            templateUrl: 'home/home.html',
                            controller: 'homeController as vm',
                            controllerAs: 'vm'
                        }
                    }
                });
		})
})();