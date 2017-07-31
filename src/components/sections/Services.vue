<template>
    <section id="services" class="services bg-primary">
        <div class="container">
            <div class="row text-center">
                <div class="col-lg-10 col-lg-offset-1">
                    <h1>Servicios</h1>
                    <hr class="small">
                    <div class="row">
                        <div class="col-md-4 col-sm-12" v-for="item in servicesItems">
                            <div class="service-item">
                                <span class="fa-stack fa-4x">
                                <i class="fa fa-circle fa-stack-2x"></i>
                                <i class="fa fa-stack-1x text-primary" :class="item.icon"></i>
                            </span>
                                <h2>{{item.name}}</h2>
                                <p>{{item.about}}</p>
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
                servicesItems: [
                    {
                        icon: 'fa-code',
                        name: 'Diseño Web',
                        about: 'Creación de sitios web, partiendo por su boceto e ideación, hasta su maqueta e implementación en HTML, CSS y AngularJS, jQueryUI o VueJS (estos últimos en aprendizaje). Uso de manejo de versiones y experiencia de trabajo con desarrolladores'
                    },
                    {
                        icon: 'fa-compass',
                        name: 'UX/UI',
                        about: 'Uso de criterios de diseño centrado en el usuario al crear sitios web y otras piezas, por medio de wireframes, mapas de navegación, diagramas de flujo (ideales y posibles), entre otros. También se creean manuales de uso para las interfases realizadas'
                    },
                    {
                        icon: 'fa-copyright',
                        name: 'Imagen Corporativa',
                        about: 'Creación de logotipos/isotipos/isologos para pequeñas y medianas empresas y material corporativo como tarjetas de presentación, papelería, presentaciones, etc'
                    }
                ]
            }
        },
    }
</script>