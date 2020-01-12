<template>
    <div>
        <v-app id="app">

            <navig></navig>
            <v-divider></v-divider>

            <v-content>
                <router-view></router-view>
            </v-content>
            <Footer></Footer>
        </v-app>
    </div>
</template>

<style>

</style>
<script>
    import Navig from "./views/Navig.vue"
    import Footer from "./components/footer/Footer.vue"

    export default {
        components: {Footer, Navig}
    }
</script>
<style>

</style>