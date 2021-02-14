
<template>    
    <div class="container" id="body">
        <hero/>
        <buy-button/>
        <div class="columns">
            
            <div class="column">
                <img src="https://i.ibb.co/qJRdG4R/IMG-1729.jpg" alt="IMG-1729" border="0">
            </div>
            <div class="column">
                <img src="https://i.ibb.co/tL89gcd/IMG-1664.jpg" alt="IMG-1664" border="0">
            </div>
            
        </div>        
    </div>
</template>
<script>
import Hero from "./Hero.vue"
import BuyButton from "./BuyButton.vue"
export default {
    name: 'Body',
    components: {
        Hero,
        BuyButton
    }
}
</script>