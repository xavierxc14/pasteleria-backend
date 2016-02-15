app.controller('NuevoUsuarioController', ['$scope', 'toastr', 'UsuarioFactory', function ($scope, toastr, UsuarioFactory) {

    UsuarioFactory.query().$promise.then(
        function succes(respuesta) {
            console.log(respuesta);
            $scope.usuarios = respuesta;
        },
        function error(error) {
            console.log(error);
        });


    $scope.guardarUsuario = function (usuario) {
        UsuarioFactory.save(usuario, function (respuesta) {
            console.log(respuesta);
            toastr.info('Éxito al crear el usuario.', 'Éxito');
            $scope.usuario = {};
        });
    };

}]);
