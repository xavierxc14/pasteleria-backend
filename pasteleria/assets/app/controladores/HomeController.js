app.controller('HomeController', ['$scope', 'toastr', 'UsuarioFactory', function ($scope, toastr, UsuarioFactory) {

    UsuarioFactory.query().$promise.then(
        function succes(respuesta) {
            console.log(respuesta);
            $scope.usuarios = respuesta;
        },
        function error(error) {
            console.log(error);
        });


    $scope.editarUsuario = function (usuario) {
        UsuarioFactory.actualizar({
            idUsuario: usuario.id
        }, {
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            edad: usuario.edad,
            correo: usuario.correo,
            ciudad: usuario.ciudad,
            foto: usuario.foto
        }).$promise.then(function success(respuesta) {
                console.log(respuesta);
                toastr.info('Éxito al actualizar el usuario.', 'Éxito');
            }, function error(error) {
                console.log(error);
                toastr.error('Error al actualizar el usuario.', 'Error');
            });
    };

}]);
