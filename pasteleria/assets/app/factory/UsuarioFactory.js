app.factory('UsuarioFactory', ['$resource', function ($resource) {

    var factory = $resource(
        'https://pasteleria-backend-xavierxc14.c9users.io/usuario/:idUsuario',
        {
            idUsuario: '@idUsuario'
        },
        {
            actualizar: {
                method: 'PUT',
                params: {
                    idUsuario: '@idUsuario'
                }

            }
        });

    return factory;


}]);