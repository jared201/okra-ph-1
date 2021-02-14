<template>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="data:image/png;base64,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"
                    alt="Buy OKRA fresh"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item><router-link to="/">
                Home</router-link>
            </b-navbar-item>
            <b-navbar-item href="/">
                Buy OKRA NOW
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item><router-link to="/about">
                    About</router-link> 
                </b-navbar-item>
                <b-navbar-item href="/">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <!-- <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a> -->
                    <a class="button is-light">
                        Log in Not Required
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>
<script>

export default {
  name: 'NavBarHeader',
  props: {
    msg: String
  }
  , title: 'Buy Okra Now'
}
</script>