<template>
    <div class="col-sm-12 contact">
        <div class="col-sm-offset-2 col-sm-8">
            <h1>Conversemos</h1>
            <div class="contact_from wow fadeInUp" data-wow-delay=".2s">
                <div class="form">
                    <!-- Message Input Area Start -->
                    <div class="contact_input_area">
                        <div id="success_fail_info"></div>
                        <div class="row">
                            <!-- Single Input Area Start -->
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <input
                                            type="text"
                                            class="form-control"
                                            v-model="form.name"
                                            name="name"
                                            id="name"
                                            placeholder="Tu nombre (*)"
                                            required
                                    >
                                </div>
                            </div>
                            <!-- Single Input Area Start -->
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <input type="email"
                                           class="form-control"
                                           v-model="form.email"
                                           name="email" id="email"
                                           placeholder="Tu correo electrónico (*)"
                                           required
                                    >
                                </div>
                            </div>
                            <!-- Single Input Area Start -->
                            <div class="col-xs-12">
                                <div class="form-group">
                                <textarea name="message"
                                          class="form-control"
                                          id="message"
                                          v-model="form.message"
                                          cols="30" rows="10"
                                          placeholder="Tu mensaje (*)"
                                          required
                                >
                                </textarea>
                                </div>
                            </div>
                            <!-- Single Input Area Start -->
                            <div class="col-xs-12">
                                <button type="submit" @click.prevent="send_form()" class="btn btn-default" :class="{send_form: 'disabled'}">Enviar mensaje</button>
                            </div>
                        </div>
                    </div>
                    <!-- Message Input Area End -->
                </div>
            </div>
        </div>

    </div>
</template>


<script>
    export default {
        data () {
            return {
                form: {
                    name: null,
                    email: null,
                    message: null,
                },
                form_sent: false
            }
        },
        methods: {
            send_form: function() {
                let vm = this;
                let url = './backend/contact.php';
                let passes_validation = true;
                if(vm.form.name === null || vm.form.email === null || vm.form.message === null){
                    passes_validation = false;
                    alert("reemplazame por un sweetalert!: No se ingresaron todos los cambios requeridos")
                }
                if(!vm.form_sent && passes_validation){
                    $.ajax({
                        url: url,
                        data: vm.form,
                        type: "post",
                        success: function (result) {
                            vm.items = result;
                            vm.form.name = null;
                            vm.form.email = null;
                            vm.form.message = null;
                            vm.form_sent = false;
                        },
                        error: function(){
                            alert("Reemplazame por un sweetalert de error!");
                            vm.form_sent = false
                        }
                    });
                }
            }
        }
    }
</script>