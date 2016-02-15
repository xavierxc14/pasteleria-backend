app.factory('IngredienteFactory', ['$resource', function ($resource) {

    var factory = $resource(
        'https://pasteleria-backend-xavierxc14.c9users.io/Ingrediente/:idIngrediente',
        {
            idIngrediente: '@idIngrediente'
        },
        {
            actualizar: {
                method: 'PUT',
                params: {
                    idIngrediente: '@idIngrediente'
                }

            }
        });

    return factory;
}]);

