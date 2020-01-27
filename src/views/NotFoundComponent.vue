<template>
    <v-container >
        <v-row>
            <v-col cols="12">
                <v-row   justify="center">
                    <v-card>
                        <v-card-title class="justify-center" ><h1>NOT FOUND</h1></v-card-title>
                        <p class="px-2">Страница не найдена! Эта страница  возможно переехала</p>
                        <v-img   max-height="300" :lazy-src="img404" :src="img404"/>
                        <router-link to="/">Перейти на главную</router-link>
                        <v-card-text><H2 class="display-4 text-center font-weight-black">404</H2></v-card-text>
                    </v-card>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    const img404 = ('https://firebasestorage.googleapis.com/v0/b/klinicheskij-psiholog.appspot.com/o/404.jpg?alt=media&token=b1142317-f3f0-482d-8d18-20c0e8d1c1a7')
    export default {
        name: "NotFound",
        data: () => ({
            img404: img404
        }),

        metaInfo: {
            title: '404',
            meta: [
                {
                    vmid: 'robots',
                    name: 'robots',
                    content: 'noindex'
                }
            ]
        }
    }
</script>

<style scoped>

</style>