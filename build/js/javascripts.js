angular.module('myApp', [
    'ngRoute',
    'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/cores', {templateUrl: 'partials/cores.html', controller: 'CoresCtrl'});
    $routeProvider.otherwise({redirectTo: '/cores'});
}]);

angular.module('myApp.controllers', [])
    .controller('CoresCtrl', ['$scope', function($scope) {
        $scope.cores = [
            {
                "descricao": "Amarelo Cristal",
                "imagem": "img/amarelo-cristal.png",
                "fundo": "#AAEE55",
                "fonte": "#000"
            },
            {
                "descricao": "Amarelo",
                "imagem": "img/amarelo.png",
                "fundo": "#EE0",
                "fonte": "#000"
            },
            {
                "descricao": "Azul Claro",
                "imagem": "img/azul-claro.png",
                "fundo": "#8DB3E3",
                "fonte": "#000"
            },
            {
                "descricao": "Azul Marinho",
                "imagem": "img/azul-marinho.png",
                "fundo": "#254061",
                "fonte": "#FFF"
            },
            {
                "descricao": "Azul",
                "imagem": "img/azul.png",
                "fundo": "#4455D1",
                "fonte": "#FFF"
            },
            {
                "descricao": "Cinza",
                "imagem": "img/cinza.png",
                "fundo": "#676767",
                "fonte": "#FFF"
            },
            {
                "descricao": "Laranja",
                "imagem": "img/laranja.png",
                "fundo": "#FF8500",
                "fonte": "#000"
            },
            {
                "descricao": "Lilás",
                "imagem": "img/lilas.png",
                "fundo": "#9766B9",
                "fonte": "#000"
            },
            {
                "descricao": "Marfin",
                "imagem": "img/marfin.png",
                "fundo": "#FFF",
                "fonte": "#000"
            },
            {
                "descricao": "Pink",
                "imagem": "img/pink.png",
                "fundo": "#E556A6",
                "fonte": "#000"
            },
            {
                "descricao": "Prata",
                "imagem": "img/prata.png",
                "fundo": "#999",
                "fonte": "#000"
            },
            {
                "descricao": "Preto",
                "imagem": "img/preto.png",
                "fundo": "#000",
                "fonte": "#FFF"
            },
            {
                "descricao": "Rosa",
                "imagem": "img/rosa.png",
                "fundo": "#DC8190",
                "fonte": "#000"
            },
            {
                "descricao": "Roxo",
                "imagem": "img/roxo.png",
                "fundo": "#6D2478",
                "fonte": "#FFF"
            },
            {
                "descricao": "Verde Água",
                "imagem": "img/verde-agua.png",
                "fundo": "#00B050",
                "fonte": "#000"
            },
            {
                "descricao": "Verde Cristal",
                "imagem": "img/verde-cristal.png",
                "fundo": "#0C0",
                "fonte": "#000"
            },
            {
                "descricao": "Verde Musgo",
                "imagem": "img/verde-musgo.png",
                "fundo": "#030",
                "fonte": "#FFF"
            },
            {
                "descricao": "Verde Pérola",
                "imagem": "img/verde-perola.png",
                "fundo": "#00B050",
                "fonte": "#000"
            },
            {
                "descricao": "Vermelho Cristal",
                "imagem": "img/vermelho-cristal.png",
                "fundo": "#F44",
                "fonte": "#000"
            },
            {
                "descricao": "Vermelho Pérola",
                "imagem": "img/vermelho-perola.png",
                "fundo": "#930",
                "fonte": "#000"
            },
            {
                "descricao": "Vermelho",
                "imagem": "img/vermelho.png",
                "fundo": "#E44",
                "fonte": "#000"
            },
            {
                "descricao": "Vinho",
                "imagem": "img/vinho.png",
                "fundo": "#8A2624",
                "fonte": "#000"
            }
        ];

        // $scope.cor = $scope.cores[0];

        $scope.mudarCor = function(cor) {
            $scope.cor = cor;
        };
    }]);
