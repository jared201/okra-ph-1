<template>
    <div class="container">
        <div class="columns">
            <div class="column">
        <section>
            <b-button
                label="BUY OKRA NOW"
                type="is-info"
                size="is-large"
                @click="isComponentModalActive = true" />

            <b-modal
                v-model="isComponentModalActive" 
                has-modal-card
                trap-focus                
                :destroy-on-hide="false"
                aria-role="dialog"
                aria-label="Example Modal"
                aria-modal>
                <template #default="props">
                    <modal-form v-bind="formProps" @close="props.close"></modal-form>
                </template>
            </b-modal>
        </section>              
            </div>
        </div>

    </div>
</template>
<script>

 
        const ModalForm = {
        props: ['name','email', 'password','mobile', 'canCancel'],
        template: `
            <form action="">
                <div class="modal-card" >
                    <header class="modal-card-head">
                        <p class="modal-card-title">Order Form</p>
                        <button
                            type="button"
                            class="delete"
                            @click="$emit('close')"/>
                    </header>
                    <section class="modal-card-body">
                       <b-field label="Name" label-position="on-border">
                            <b-input 
                                placeholder="Your Name" 
                                :value="name"
                                >
                            </b-input>
                        </b-field>
                        <b-field label="Email" label-position="on-border">
                            <b-input
                                type="email"
                                :value="email"
                                placeholder="Your email"
                                required>
                            </b-input>
                        </b-field>
                        <b-field label="Mobile Number" label-position="on-border">
                            <b-input                                 
                                :value="mobile"
                                placeholder="+639171234567"
                                required>
                            </b-input>
                        </b-field>                        
                        <b-field>
                            <b-input placeholder="Enter amount in kilos"
                                type="number"
                                min="1"
                                max="1000">
                            </b-input>
                        </b-field>
                        <b-field label="Shipping Address">
                            <b-input
                                type="textarea"
                                :value="password" 
                                placeholder="Enter your Complete Shipping Address"
                                required>
                            </b-input>
                        </b-field>

                        
                    </section>
                    <footer class="modal-card-foot">
                        <b-button
                            label="Close"
                            @click="$emit('close')" />
                        <b-button
                            label="Click for Payment"
                            type="is-info" />
                    </footer>
                </div>
            </form>
        `
    }

    export default {
        name: 'BuyButton',
        components: {
            ModalForm
        },
        data() {
            return {
                isComponentModalActive: false,
                formProps: {
                    email: 'evan@you.com',
                    password: 'testing',
                    name: '',
                    mobile: ''
                }
            }
        }
    }

</script>