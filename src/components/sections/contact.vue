<template>
    <section class="contact">
        <h1>Conversemos</h1>
        <div class="col-md-offset-2 col-md-8 col-sm-12">
            <form class="col-sm-12 contact-form" name="userForm" id="contact" role="form">

                <!-- IF MAIL SENT SUCCESSFULLY -->
                <h6 class="successContent" ng-show="resultado=='ok_send'">
                    <i class="fa fa-check left" style="color: #5cb45d;"></i>Tu mensaje fue enviado exitosamente, te escribiremos a la brevedad.
                </h6>
                <!-- END IF MAIL SENT SUCCESSFULLY -->

                <!-- MAIL SENDING UNSUCCESSFULL -->
                <h6 class="errorContent" ng-show="resultado=='error_send'">
                    <i class="fa fa-exclamation-circle left" style="color: #e1534f;"></i>Hubo un error en la validación del formulario ¡Revisaremos el problema!
                </h6>

                <!-- USER FORM FAILURE -->
                <h6 class="errorContent" ng-show="resultado=='error_info'">
                    <i class="fa fa-exclamation-circle left" style="color: #e1534f;"></i>Hubo un error en la información del formulario ¡Intenta de nuevo!
                </h6>
                <!-- END MAIL SENDING UNSUCCESSFULL -->

                <p>Nombre</p>
                <input id="form-name" ng-model="form_name" type="text" name="form-name" placeholder="Nombre" required>
                <p>Mail</p>
                <input id="form-email" ng-model="form_email" type="text" name="form-email" placeholder="Correo Electrónico" required>
                <p>Mensaje</p>
                <textarea id="form-message" ng-model="form_message" rows="7" name="form-message" placeholder="Escribe tu Mensaje" ng-model="form_message" required></textarea>
                <button type="submit" class="btn btn-success col-sm-12" ng-click="enviar_form()" id="form-submit" name="submit">Listo</button>
            </form>
        </div>
    </section>
</template>