<template>
    <header id="top" class="header">
        <div class="text-vertical-center">
            <div style="height:80px; background-color:#CCC; clear:both">
                <a id="menu-toggle" href="#" class="btn btn-dark btn-lg toggle"><i class="fa fa-bars"></i></a>
                <nav id="sidebar-wrapper">
                    <ul class="sidebar-nav">
                        <a id="menu-close" href="#" class="btn btn-light btn-lg pull-right toggle"><i class="fa fa-times"></i></a>
                        <router-link to="/" tag="li" activeClass="active" exact><a>Home</a></router-link>
                        <router-link to="/about" tag="li" activeClass="active" exact><a>Quien diseña</a></router-link>
                        <router-link to="/services" tag="li" activeClass="active" exact><a>Servicios</a></router-link>
                        <router-link to="/works" tag="li" activeClass="active" exact><a>Proyectos</a></router-link>
                        <router-link to="/contact" tag="li" activeClass="active" exact><a>Conversemos</a></router-link>
                        <router-link to="/monstergame" tag="li" activeClass="active" exact><a>MonsterGame</a></router-link>
                    </ul>
                </nav>
            </div>
            <div class="col-md-offset-2 col-md-8 col-sm-12">
                <img src="src/img/logo.png" />
            </div>
            <br>
            <a href="#about" class="more btn btn-dark btn-lg">Comencemos</a>
        </div>
    </header>
</template>