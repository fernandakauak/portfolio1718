var app = angular.module('portfolio', []);

app.controller('portfolioWebItemsController', ['$scope', function($scope) {
    $scope.items = [
        {
            img: 'img/portfolio/halekin.jpg',
            title: 'Halekin',
            description: '[Proyecto en construcción]  Sitio web para banda musical',
            more: 'http://fernandakauak.cl/halekin-beta'
        },
        {
            img: 'img/portfolio/puppybox.jpg',
            title: 'PuppyBox',
            description: 'Diseño de sitio web de servicio de entrega mensual de artículos para perros',
            more: 'http://www.puppybox.cl'
        },
        {
            img: 'img/portfolio/lnrepuestos.jpg',
            title: 'LN Repuestos',
            description: 'Diseño y maqueta de sitio web de tienda de repuestos para automóviles',
            more: 'http://www.lnrepuestos.cl'
        },
        {
            img: 'img/portfolio/tecagromed.jpg',
            title: 'TecAgroMed',
            description: 'Diseño y maqueta de sitio web de importadora de productos médicos y agrícolas',
            more: 'http://www.tecagromed.com'
        },
        {
            img: 'img/portfolio/devvalley.jpg',
            title: 'DevValley',
            description: 'Diseño de sitio web de empresa de desarrollo de software',
            more: 'http://www.devvalley.cl'
        },
        {
            img: 'img/portfolio/monimo.png',
            title: 'Sensat',
            description: 'Diseño de sitio web para empresa Monimo y su proyecto Sensat',
            more: 'http://www.monimo.cl'
        }
        //
    ];
}]);

app.controller('portfolioDesignItemsController', ['$scope', function($scope) {
    $scope.items = [
        {
            img: 'img/portfolio/pms.jpg',
            title: 'Tótem Parque Metropolitano',
            description: 'Diseño (en coolaboración con el equipo del parque) y maqueta de tótem informativo dirigido a visitantes y turistas',
            more: 'img/portfolio/pms-totem.jpg'
        },
        {
            img: 'img/portfolio/lnrepuestos-logo.jpg',
            title: 'LN Repuestos (Logo)',
            description: 'Logotipo de tienda de repuestos para automóviles',
            more: 'img/portfolio/lnrepuestos-logo'
        },
        {
            img: 'img/portfolio/devvalley-logo.jpg',
            title: 'DevValley (Logo)',
            description: 'Logotipo de empresa de desarrollo de software',
            more: 'img/portfolio/devvalley-logo.jpg'
        },
        {
            img: 'img/portfolio/vhd-logo.jpg',
            title: 'Veronikas Home Deco',
            description: 'Logotipo de tienda de accesorio de hogar y decoración importados de Turquía',
            more: 'img/portfolio/vhd-logo.jpg'
        },
        {
            img: 'img/portfolio/cordis-logo.jpg',
            title: 'Cordis Machina (Logo)',
            description: 'Logotipo de historieta. Proyecto personal',
            more: 'img/portfolio/cordis-logo.jpg'
        },
        {
            img: 'img/portfolio/patrimonio.jpg',
            title: 'ACCPF',
            description: 'Material didáctico de la Asociación de Patrimonio Ferroviario para día de patrimonio cultural (2014 y 2016)',
            more: 'img/portfolio/patrimonio-full.jpg'
        }
    ];
}]);


app.controller('servicesItemsController', ['$scope', function($scope) {
    $scope.items = [
        {
            icon: 'fa-code',
            name: 'Diseño Web',
            about: 'Creación de sitios web, partiendo por su boceto e ideación, hasta su maqueta e implementación en HTML, CSS y AngularJS/jQueryUI (estos últimos en aprendizaje). Uso de manejo de versiones y experiencia de trabajo con desarrolladores'
        },
        {
            icon: 'fa-compass',
            name: 'UX/UI',
            about: 'Uso de criterios de diseño centrado en el usuario al crear sitios web y otras piezas, por medio de wireframes, mapas de navegación, diagramas de flujo (ideales y posibles), entre otros'
        },
        {
            icon: 'fa-copyright',
            name: 'Imagen Corporativa',
            about: 'Creación de logotipos/isotipos/isologos para pequeñas y medianas empresas y material corporativo'
        }
    ];
}]);


app.controller('contactFormController', ['$scope', '$http', function ($scope, $http) {
    $scope.obteniendo_respuesta = false;
    $scope.resultado = "";
    $scope.enviar_form = function () {
        $scope.obteniendo_respuesta = true;
        $http({
            method: 'POST',
            url: './contact_form/index.php',
            data: $.param({
                name: $scope.form_name,
                email: $scope.form_email,
                message: $scope.form_message
            }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (respuesta) {
            $scope.obteniendo_respuesta = false;
            if (respuesta === 'error_informacion_form') {
                $scope.resultado = 'error_info';
            } else if (respuesta === 'error_enviado_correo') {
                $scope.resultado = 'error_send';
            } else if (respuesta === 'ok') {
                $scope.resultado = 'ok_send';
                $scope.form_name = $scope.form_email = $scope.form_message = '';
            }
        });
    };
}]);


app.controller('footerController', ['$scope', function($scope){
    $scope.year = new Date().getFullYear();
}]);