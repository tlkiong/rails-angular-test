(function() {
    angular.module('Home')
        .controller('homeController', homeController);

    homeController.$inject = ['homeService'];

    function homeController(homeService) {
        var vm = this;

        /* ======================================== Var ==================================================== */
        vm.things = [];

        /* ======================================== Services =============================================== */
        var svc = homeService;

        /* ======================================== Public Methods ========================================= */

        /* ======================================== Private Methods ======================================== */
        function init() {
            angular.copy(svc.d, vm.things);
        }

        init();
    }
})();