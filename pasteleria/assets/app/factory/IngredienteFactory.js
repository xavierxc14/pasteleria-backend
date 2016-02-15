app.factory('IngredienteFactory', ['$resource', function ($resource) {

    var factory = $resource(
        'http://localhost:1337/Ingrediente/:idIngrediente',
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

