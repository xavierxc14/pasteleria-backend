app.factory('PastelFactory', ['$resource', function ($resource) {

    var factory = $resource(
        'https://pasteleria-backend-xavierxc14.c9users.io/Pastel/:idPastel',
        {
            idPastel: '@idPastel'
        },
        {
            actualizar: {
                method: 'PUT',
                params: {
                    idPastel: '@idPastel'
                }

            },
            buscarPorIdUsuario: {
                url: 'https://pasteleria-backend-xavierxc14.c9users.io/Pastel?idUsuario=:idUsuario',
                method: 'GET',
                params: {
                    idPastel: '@idPastel'
                },
                isArray: true
            }
        });

    return factory;
}]);

