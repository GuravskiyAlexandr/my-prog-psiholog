<template>
    <div>
            <v-flex
                    class="d-flex flex-wrap "
                    color="grey lighten-2"
                    flat
                    tile
            >

                <template
                        v-for="(item, i)  in  article"

                >
                    <v-card
                            flat
                            tile
                            class="mx-auto mt-5"
                            :key=" 'article'+ i"
                    >
                        <v-parallax
                                :src=item.img
                                alt="быть успешным при аутизме"
                                height="220">
                            <h1 align="center" class="  parallax display-2 font-weight-BOLD mb-4">
                                Можно ли быть успешным при аутизме?
                            </h1>
                        </v-parallax>
                        <v-card-text>
                            <p>{{item.text}}</p>

                            <p></p>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn
                                    text
                                    color="deep-purple accent-4"
                                    :to=item.to
                            >
                                Читать больше
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </template>
            </v-flex>
    </div>
</template>

<script>
    const parallaxImage = ('https://firebasestorage.googleapis.com/v0/b/klinicheskij-psiholog.appspot.com/o/parallax2-min.jpg?alt=media&token=de709e97-bc85-4ad6-9db4-16971e440f2e')
    export default {
        name: "WhatIsIt",
        data() {
            return {
                article:
                    [
                        {
                            text: 'Поддерживаю Всех интересующихся и желающих разобраться что такое аутизм,\n' +
                                '  в его проявлениях, причинах, прогнозе и что с этим делать? Многих вводит заблуждение аутизм\n' +
                                '  и РАС, что такое\n' +
                                '  атипичный аутизм. Обо всем об этом подробно здесь и сейчас!',
                            to: '/blog/autismIs',
                            img: parallaxImage
                        }
                    ]
            }
        }
    }
</script>

<style scoped>


</style>