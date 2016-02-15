app.controller('PastelController', ['$scope', 'toastr', '$stateParams', 'PastelFactory', 'UsuarioFactory', 'PastelFactory', 'IngredienteFactory', function ($scope, toastr, $stateParams, PastelFactory, UsuarioFactory, PastelFactory, IngredienteFactory) {

    $scope.tipos = ['hojaldre', 'azucarada', 'escaldadas', 'reposteria'];

    function buscarPasteles() {
        PastelFactory.buscarPorIdUsuario({
            idUsuario: $stateParams.idUsuario
        }).$promise.then(
            function success(respuesta) {
                $scope.pasteles = respuesta;
                console.log(respuesta);
            },
            function error(error) {
                console.log(error);
            });
    }
    buscarPasteles();

    UsuarioFactory.get({
        id: $stateParams.idUsuario
    }).$promise.then(
        function success(respuesta) {
            $scope.usuario = respuesta;
            console.log($scope.usuario);
        },
        function error(error) {
            console.log(error);
        });

    $scope.guardarPastel = function (pastel) {
        pastel.idUsuario = $stateParams.idUsuario;
        PastelFactory.save(pastel, function (respuesta) {
            console.log(respuesta);
            toastr.info('Éxito al crear el pastel.', 'Éxito');
            $scope.pasteles.push(respuesta);
            $scope.pastel = {};
        });
    };
    console.log($scope.pasteles);
    $scope.guardarIngrediente = function (ingrediente, idPastel) {
        ingrediente.idPastel = idPastel;
        IngredienteFactory.save(ingrediente, function (respuesta) {
            console.log(respuesta);
            toastr.info('Éxito al agregar el ingrediente.', 'Éxito');
            buscarPasteles();
            //console.log($scope.pasteles);
            //$scope.pasteles.ingredientes.push(respuesta);
            //$scope.ingrediente = {};
        });
    };
}]);
