<template>
    <section id="portfolio" class="portfolio">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h1>Proyectos</h1>
                    <div class="row" ng-controller="portfolioWebItemsController">
                        <div ng-repeat="item in items" class="col-xs-12 col-md-4">
                            <div class="proy_ava">
                                <img src="{{item.img}}"/>
                                <div class="proy_info">
                                    <div class="proy_data">
                                        <h2 class="content-subhead">{{item.title}}</h2>
                                        <p>{{item.description}}</p>
                                        <a class="proy-mas example-image-link" href="{{item.more}}" target="_blank">Ver más</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" ng-controller="portfolioDesignItemsController">
                        <div ng-repeat="item in items" class="col-xs-12 col-md-4">
                            <div class="proy_ava">
                                <img src="{{item.img}}"/>
                                <div class="proy_info">
                                    <div class="proy_data">
                                        <h2 class="content-subhead">{{item.title}}</h2>
                                        <p>{{item.description}}</p>
                                        <a class="proy-mas example-image-link" href="{{item.more}}" data-lightbox="portfolio" target="_blank">Ver más</a>
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