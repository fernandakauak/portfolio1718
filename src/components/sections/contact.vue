<template>
    <section class="contact">
        <h1>Conversemos</h1>
        <div class="col-md-offset-2 col-md-8 col-sm-12">
            <div id="simple-form-container">
                <form action="">
                    <div class="form-section" transition="start">
                        <p v-if="error.in.name">{{error.text.name}}</p>
                        <label for="name">{{label.name}}</label>
                        <input type="text" name="name" v-model="name" v-bind:placeholder="placeholder.name"/>
                    </div>
                    <br />
                    <div class="form-section">
                        <p v-if="error.in.email">{{error.text.email}}</p>
                        <label for="email">{{label.email}}</label>
                        <input type="text" name="email" v-model="email" v-bind:placeholder="placeholder.email"/>
                    </div>
                    <br />
                    <div class='form-section'>
                        <p v-if="error.in.message">{{error.text.message}}</p>
                        <label for="message">{{label.message}}</label>
                        <textarea name="message" v-model="message" v-bind:placeholder="placeholder.message"></textarea>
                    </div>
                    <br />
                    <button type="submit" @click="submitForm">{{label.submit}}</button>
                </form>
            </div>
        </div>
    </section>
</template>

<!--<script>
    export default {
        data () {
            return {
                el: '#simple-form-container',
                data: {
                    label: {
                        name: "Name: ",
                        email: "Email: ",
                        message: "Message: ",
                        submit: "Submit"
                    },
                    placeholder: {
                        name: "Place your name",
                        email: "Place your email",
                        message: "Place your message"
                    },
                    error: {
                        in: {
                            name: false,
                            email: false,
                            message: false,
                        },
                        text: {
                            name: "Name is required",
                            email: "Email is required",
                            message: "Message is required"
                        }
                    }
                },
                methods: {
                    submitForm: function(event) {
                        console.log(event.target);
                        console.log(this.name);
                        console.log(this.email);
                        console.log(this.message);
                    }
                }
            }
        }
    }

    console.log(Form)
</script>-->