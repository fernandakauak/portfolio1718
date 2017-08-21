<template>
    <section id="portfolio" class="portfolio">
        <div class="container">
            <div class="row">
                <div class="col-xs-12" v-for="item in portfolioItemDetail">
                    <div class="proy_detail">
                        <h1>{{item.title}}</h1>
                        <div class="col-xs-12 col-md-6 img_detail">
                            <img :src="item.img"/>
                            <img :src="item.img"/>
                            <img :src="item.img"/>
                            <img :src="item.img"/>
                        </div>
                        <div class="col-xs-12 col-md-6 proy_data">
                            <p>{{item.description}}</p>
                            <a class="proy-mas example-image-link" :href="item.more" target="_blank">Ver más</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data () {
            return {
                portfolioItemDetail: [
                    {
                        id: 1,
                        img: 'src/img/portfolio/halekin.jpg',
                        title: 'Halekin',
                        description: '[Proyecto en construcción]  Sitio web para banda musical',
                        more: 'http://fernandakauak.cl/halekin-beta'
                    },
                    {
                        id: 2,
                        img: 'src/img/portfolio/puppybox.jpg',
                        title: 'PuppyBox',
                        description: 'Diseño de sitio web de servicio de entrega mensual de artículos para perros',
                        more: 'http://www.puppybox.cl'
                    },
                    {
                        id: 3,
                        img: 'src/img/portfolio/lnrepuestos.jpg',
                        title: 'LN Repuestos',
                        description: 'Diseño y maqueta de sitio web de tienda de repuestos para automóviles',
                        more: 'http://www.lnrepuestos.cl'
                    },
                    {
                        id: 4,
                        img: 'src/img/portfolio/tecagromed.jpg',
                        title: 'TecAgroMed',
                        description: 'Diseño y maqueta de sitio web de importadora de productos médicos y agrícolas',
                        more: 'http://www.tecagromed.com'
                    },
                    {
                        id: 5,
                        img: 'src/img/portfolio/monimo.png',
                        title: 'Sensat',
                        description: 'Diseño de sitio web para empresa Monimo y su proyecto Sensat',
                        more: 'http://www.monimo.cl'
                    },
                    {
                        id: 6,
                        img: 'src/img/portfolio/pms.jpg',
                        title: 'Tótem Parque Metropolitano',
                        description: 'Diseño (en coolaboración con el equipo del parque) y maqueta de tótem informativo dirigido a visitantes y turistas',
                        more: 'img/portfolio/pms-totem.jpg'
                    },
                    {
                        id: 7,
                        img: 'src/img/portfolio/lnrepuestos-logo.jpg',
                        title: 'LN Repuestos (Logo)',
                        description: 'Logotipo de tienda de repuestos para automóviles',
                        more: 'img/portfolio/lnrepuestos-logo'
                    },
                    {
                        id: 8,
                        img: 'src/img/portfolio/vhd-logo.jpg',
                        title: 'Veronikas Home Deco',
                        description: 'Logotipo de tienda de accesorio de hogar y decoración importados de Turquía',
                        more: 'img/portfolio/vhd-logo.jpg'
                    },
                    {
                        id: 9,
                        img: 'src/img/portfolio/cordis-logo.jpg',
                        title: 'Cordis Machina (Logo)',
                        description: 'Logotipo de historieta. Proyecto personal',
                        more: 'img/portfolio/cordis-logo.jpg'
                    },
                    {
                        id: 10,
                        img: 'src/img/portfolio/patrimonio.jpg',
                        title: 'ACCPF',
                        description: 'Material didáctico de la Asociación de Patrimonio Ferroviario para día de patrimonio cultural (2014 y 2016)',
                        more: 'img/portfolio/patrimonio-full.jpg'
                    }
                ]
            }
        },
    }
</script>