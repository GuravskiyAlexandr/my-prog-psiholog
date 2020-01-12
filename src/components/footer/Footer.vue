<template>
    <div>
        <v-card height="80">
            <v-footer
                    color="blue lighten-4"
                    absolute
                    class="font-weight-medium"
            >
                <v-col
                        class="text-center"
                        cols="12"
                >
                    {{ new Date().getFullYear() }}

                    <p class="developer">
                        Разработка, продвижение сайтов -
                        <a class="developer"   href="mailto: developer.for.good.men@gmail.com">
                            developer.for.good.men@gmail.com
                        </a>
                    </p>

                </v-col>
            </v-footer>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>


    .developer {
        text-decoration: none;
        color: black;
        font-style: italic;
        font-size: 11px;
    }
</style>