<template>
    <section id="portfolio" class="portfolio">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h1>Proyectos</h1>
                    <div class="row">
                        <div v-for="item in portfolioWebItems" class="col-xs-12 col-md-4">
                            <div class="proy_ava">
                                <img :src="item.img"/>
                                <div class="proy_info">
                                    <div class="proy_data">
                                        <h2 class="content-subhead">{{item.title}}</h2>
                                        <p>{{item.description}}</p>
                                        <a class="proy-mas example-image-link" :href="item.more" target="_blank">Ver más</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div v-for="item in portfolioDesignItems" class="col-xs-12 col-md-4">
                            <div class="proy_ava">
                                <img :src="item.img"/>
                                <div class="proy_info">
                                    <div class="proy_data">
                                        <h2 class="content-subhead">{{item.title}}</h2>
                                        <p>{{item.description}}</p>
                                        <a class="proy-mas example-image-link" :href="item.more" target="_blank">Ver más</a>
                                    </div>
                                </div>
                            </div>
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
                portfolioWebItems: [
                    {
                        img: 'src/img/portfolio/halekin.jpg',
                        title: 'Halekin',
                        description: '[Proyecto en construcción]  Sitio web para banda musical',
                        more: 'http://fernandakauak.cl/halekin-beta'
                    },
                    {
                        img: 'src/img/portfolio/puppybox.jpg',
                        title: 'PuppyBox',
                        description: 'Diseño de sitio web de servicio de entrega mensual de artículos para perros',
                        more: 'http://www.puppybox.cl'
                    },
                    {
                        img: 'src/img/portfolio/lnrepuestos.jpg',
                        title: 'LN Repuestos',
                        description: 'Diseño y maqueta de sitio web de tienda de repuestos para automóviles',
                        more: 'http://www.lnrepuestos.cl'
                    },
                    {
                        img: 'src/img/portfolio/tecagromed.jpg',
                        title: 'TecAgroMed',
                        description: 'Diseño y maqueta de sitio web de importadora de productos médicos y agrícolas',
                        more: 'http://www.tecagromed.com'
                    },
                    {
                        img: 'src/img/portfolio/monimo.png',
                        title: 'Sensat',
                        description: 'Diseño de sitio web para empresa Monimo y su proyecto Sensat',
                        more: 'http://www.monimo.cl'
                    }
                ],
                portfolioDesignItems: [
                    {
                        img: 'src/img/portfolio/pms.jpg',
                        title: 'Tótem Parque Metropolitano',
                        description: 'Diseño (en coolaboración con el equipo del parque) y maqueta de tótem informativo dirigido a visitantes y turistas',
                        more: 'img/portfolio/pms-totem.jpg'
                    },
                    {
                        img: 'src/img/portfolio/lnrepuestos-logo.jpg',
                        title: 'LN Repuestos (Logo)',
                        description: 'Logotipo de tienda de repuestos para automóviles',
                        more: 'img/portfolio/lnrepuestos-logo'
                    },
                    {
                        img: 'src/img/portfolio/vhd-logo.jpg',
                        title: 'Veronikas Home Deco',
                        description: 'Logotipo de tienda de accesorio de hogar y decoración importados de Turquía',
                        more: 'img/portfolio/vhd-logo.jpg'
                    },
                    {
                        img: 'src/img/portfolio/cordis-logo.jpg',
                        title: 'Cordis Machina (Logo)',
                        description: 'Logotipo de historieta. Proyecto personal',
                        more: 'img/portfolio/cordis-logo.jpg'
                    },
                    {
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