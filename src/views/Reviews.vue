<template>
    <v-container style="background-color: white">
        <v-col>
            <v-row justify="center" align-content="center">
                <div>
                    <div><h1>Отзывы психолг Наталья Толмачева</h1></div>
                    <div class="py-5"><h2>В этом разделе пишем отзывы, коментарии будем только рады</h2></div>
                    <div id="fb-root"></div>
                    <div class="fb-comments"
                         data-href="https://www.facebook.com/%D0%9A%D0%BB%D0%B8%D0%BD%D0%B8%D1%87%D0%B5%D0%BA%D0%B8%D0%B9-%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3-%D0%9D%D0%B5%D0%B9%D1%80%D0%BE%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3-%D0%A2%D0%BE%D0%BB%D0%BC%D0%B0%D1%87%D1%91%D0%B2%D0%B0-%D0%9D%D0%B0%D1%82%D0%B0%D0%BB%D1%8C%D1%8F-105253370838895/"
                         data-width=""
                         data-numposts="5">

                    </div>
                </div>
            </v-row>
        </v-col>

    </v-container>
</template>

<script>
    export default {
        name: "Reviews",

        metaInfo: {
            title: 'Отзывы | психолг Наталья Толмачева',
            meta: [
                {
                    vmid: 'description',
                    name: 'description',
                    content: 'Отзывы Клинического психолога  Натальи Толмачевовой, Детского психолога'

                },
                {
                    vmid: 'fb:app_id',
                    property: 'fb:app_id',
                    content: 'h2388221291273630'
                },
                {
                    vmid: 'fb: admins',
                    property: 'fb: admins',
                    content: '100038236063627'
                },
            ],
            script: [
                {
                    vmid: 'comment',
                    crossorigin: "anonymous",
                    src: "https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v5.0",
                }
            ]
        },
    }
</script>

<style scoped>

</style>