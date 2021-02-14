import Vue from "vue";
import Router from "vue-router";
import About from "./views/Info.vue"
import MainBody from "./components/MainBody.vue"

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/",
            name: "home",
            component: MainBody
        }
    ]
})