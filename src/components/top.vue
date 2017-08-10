<template>
    <header id="top" class="header">
        <div class="text-vertical-center">
            <div style="height:80px; background-color:#CCC; clear:both">
                <a id="menu-toggle" href="#" class="btn btn-dark btn-lg toggle"><i class="fa fa-bars"></i></a>
                <nav id="sidebar-wrapper">
                    <ul class="sidebar-nav">
                        <a id="menu-close" href="#" class="btn btn-light btn-lg pull-right toggle"><i class="fa fa-times"></i></a>
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/about">Quien diseña</router-link></li>
                        <li><router-link to="/services">Servicios</router-link></li>
                        <li><router-link to="/works">Proyectos</router-link></li>
                        <li><router-link to="/contact">Conversemos</router-link></li>
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