<template>
        <form action="">
                <div class="modal-card" >
                    <header class="modal-card-head">
                        <p class="modal-card-title">Order Form</p>
                        <button
                            type="button"
                            class="delete"
                            @click="close"/>
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
                            @click="close" />
                        <b-button
                            label="Click for Total Pricing and Payment"
                            type="is-info" 
                            @click="clickMe"
                            />
                    </footer>
                </div>
            </form>
              
</template>
<script>
import PaymentModal from './PaymentModal.vue';

export default {
    
    name: 'ModalForm',
    props: {
        name: String,
        email: String,
        password: String,
        mobile: String,
        canCancel: Boolean
    },
    methods: {
        clickMe() {
            this.$buefy.modal.open({
                parent: this,
                component: PaymentModal,
                width: '640px',
                scroll: 'keep',
                trapFocus: true
            })           
            this.$parent.close();
        },
        close() {
            this.$parent.close()
        }
    },
    data () {
        return {
            isComponentModalActive: false,
 
        }
    }

}
</script>