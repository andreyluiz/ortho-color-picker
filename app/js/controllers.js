'use strict';

angular.module('myApp.controllers', [])
    .controller('MyCtrl1', ['$scope', function($scope) {
        $scope.cores = [
            {
                "descricao": "Amarelo Cristal",
                "imagem": "img/amarelo-cristal-cortado.png",
                "fundo": "#99FF33",
                "fonte": "#000"
            },
            {
                "descricao": "Amarelo",
                "imagem": "img/amarelo-cortado.png",
                "fundo": "#FF0",
                "fonte": "#000"
            },
            {
                "descricao": "Azul Claro",
                "imagem": "img/azul-claro-cortado.png",
                "fundo": "#8DB3E3",
                "fonte": "#000"
            },
            {
                "descricao": "Azul Marinho",
                "imagem": "img/azul-marinho-cortado.png",
                "fundo": "#254061",
                "fonte": "#FFF"
            },
            {
                "descricao": "Azul",
                "imagem": "img/azul-cortado.png",
                "fundo": "#0032D1",
                "fonte": "#FFF"
            },
            {
                "descricao": "Cinza",
                "imagem": "img/cinza-cortado.png",
                "fundo": "#676767",
                "fonte": "#FFF"
            },
            {
                "descricao": "Laranja",
                "imagem": "img/laranja-cortado.png",
                "fundo": "#FF8500",
                "fonte": "#000"
            },
            {
                "descricao": "Lilás",
                "imagem": "img/lilas-cortado.png",
                "fundo": "#9766B9",
                "fonte": "#000"
            },
            {
                "descricao": "Marfin",
                "imagem": "img/marfin-cortado.png",
                "fundo": "#FFF",
                "fonte": "#000"
            },
            {
                "descricao": "Pink",
                "imagem": "img/pink-cortado.png",
                "fundo": "#E556A6",
                "fonte": "#000"
            },
            {
                "descricao": "Prata",
                "imagem": "img/prata-cortado.png",
                "fundo": "#999",
                "fonte": "#000"
            },
            {
                "descricao": "Preto",
                "imagem": "img/preto-cortado.png",
                "fundo": "#000",
                "fonte": "#FFF"
            },
            {
                "descricao": "Rosa",
                "imagem": "img/rosa-cortado.png",
                "fundo": "#DC8190",
                "fonte": "#000"
            },
            {
                "descricao": "Roxo",
                "imagem": "img/roxo-cortado.png",
                "fundo": "#6D2478",
                "fonte": "#FFF"
            },
            {
                "descricao": "Verde Água",
                "imagem": "img/verde-agua-cortado.png",
                "fundo": "#00B050",
                "fonte": "#000"
            },
            {
                "descricao": "Verde Cristal",
                "imagem": "img/verde-cristal-cortado.png",
                "fundo": "#0C0",
                "fonte": "#000"
            },
            {
                "descricao": "Verde Musgo",
                "imagem": "img/verde-musgo-cortado.png",
                "fundo": "#030",
                "fonte": "#FFF"
            },
            {
                "descricao": "Verde Pérola",
                "imagem": "img/verde-perola-cortado.png",
                "fundo": "#00B050",
                "fonte": "#000"
            },
            {
                "descricao": "Vermelho Cristal",
                "imagem": "img/vermelho-cristal-cortado.png",
                "fundo": "#F00",
                "fonte": "#000"
            },
            {
                "descricao": "Vermelho Pérola",
                "imagem": "img/vermelho-perola-cortado.png",
                "fundo": "#930",
                "fonte": "#000"
            },
            {
                "descricao": "Vermelho",
                "imagem": "img/vermelho-cortado.png",
                "fundo": "#E00",
                "fonte": "#000"
            },
            {
                "descricao": "Vinho",
                "imagem": "img/vinho-cortado.png",
                "fundo": "#8A2624",
                "fonte": "#000"
            }
        ];

        $scope.cor = $scope.cores[0];

        $scope.mudarCor = function(cor) {
            $scope.cor = cor;
        };
    }])
    .controller('MyCtrl2', ['$scope', function($scope) {

    }]);
