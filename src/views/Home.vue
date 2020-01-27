<template>
    <v-container>
        <v-row justify="center">
            <v-card class="d-flex">
                <v-col>
                    <div class="d-flex flex-wrap">
                        <v-col>
                            <div  :class="{'justify-center d-flex': $vuetify.breakpoint.xs}">
                                <img v-if="avatar"
                                     class="avatar-img"
                                     :src=avatar
                                     alt="Нейропсихолог Наталья Толмачева"
                                     title="Нейропсихолог Наталья Толмачева"
                                />
                            </div>
                        </v-col>
                        <v-col class="ma-2">
                            <div>
                                <h1 class="may_font">Клинический психолог.</h1>
                                <h1 class=" may_font">Детский нейропсихолог.</h1>
                                <h2 class=" title font-italic font-weight-bold">
                                    Направление психотерапевтической деятельности (когнитивно-бихевиоральная
                                    психотерапия,
                                    нейролингвистическое программирование. НЛП - практик, НЛП - мастер).
                                </h2>
                            </div>
                        </v-col>
                    </div>
                </v-col>
            </v-card>
        </v-row>
        <v-row justify="center">
            <v-card class="row">
                <v-col cols="12" class="pb-0">

                    <Hello></Hello>

                    <v-divider></v-divider>

                    <p class="title mt-10 ">Методы и подходы</p>
                    <v-row justify="center">

                        <v-card class="row">
                            <ImUsedForBaby class="background_baby"></ImUsedForBaby>
                            <ImUsedForAdult class="background_adult"></ImUsedForAdult>
                        </v-card>
                    </v-row>
                </v-col>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>

    import ImUsedForBaby from "../components/home/ImUsedForBaby.vue"
    import ImUsedForAdult from "../components/home/ImUsedForAdult.vue"
    import Hello from "../components/home/Hello"

    import load from "../../public/load.gif"
    const avatar = "https://firebasestorage.googleapis.com/v0/b/klinicheskij-psiholog.appspot.com/o/log-min.jpg?alt=media&token=cda43fa8-5e9e-428b-9efe-00e1e9baba5f"


    export default {
        components: {Hello, ImUsedForAdult, ImUsedForBaby},
        data() {
            return {
                load,
                avatar: avatar,
                isActive: false,
            }
        },
        metaInfo: {
            title: 'Детский нейропсихолог|Клинический психолог|НЛП мастер',
            meta: [
                {
                    vmid: 'description',
                    name: 'description',
                    content: ' Давайте знакомиться ближе. По\n' +
                        '     образованию я клинический психолог, направление психотерапевтической деятельности когнитивно-бихевиоральная\n' +
                        '     психотерапия и нейролингвистическое программирование\n' +
                        '     Получив профессиональную переподготовку по детской нейропсихологии, обучение АВА, детской психиатрии'
                },
                // {
                //     vmid: 'og:type',
                //     property: 'og:type',
                //     content: 'website'
                // },
                // {
                //     vmid: 'og:url',
                //     property: 'og:url',
                //     content: 'https://klinicheskij-psiholog.com'
                // },
                // {
                //     vmid: 'og:image:type',
                //     property: 'og:image:type',
                //     content: '"image/jpeg'
                // },
                // {
                //     vmid: 'og:image',
                //     property: 'og:image',
                //     content: "https://firebasestorage.googleapis.com/v0/b/klinicheskij-psiholog.appspot.com/o/brain.jpg?alt=media&token=f1e9feaa-49c4-4042-9b8f-6afa4339ec54"
                //
                // },
                // {
                //     vmid: 'og:image:alt',
                //     property: 'og:image:alt',
                //     content: 'Нейропсихологическая коррекция и диогностика'
                // },
                {
                    vmid: 'fb:app_id',
                    property: 'fb:app_id',
                    content: 'h2388221291273630'
                },
                {
                    vmid: 'google-site-verification',
                    name: 'google-site-verification',
                    content: '59x7t-rRXfCQBSBs0TCdssxuxrc2lfKWisqa1FrTeK8'
                },
                // {
                //     vmid: 'og:title',
                //     property: 'og:title',
                //     content: 'Детский нейропсихолог | Клинический психолог  |\n' +
                //         '    Нейропсихологическая коррекция и диогностика ( РАС,ЗПР,ЗПРР и др.) Киев'
                // },
                // {
                //     vmid: 'og:description',
                //     property: 'og:description',
                //     content: 'Коррекция аутизма. Психолог. Аутизм, РАС - расстройства аутистического спектра.\n' +
                //         '    Нейропсихологическая коррекция и диогностика ( РАС,ЗПР,ЗПРР и др.) Синдром дефицииа\n' +
                //         '       внимания и гиперактивность -СДВГ, Панические атаки, вегетососудистая дистония,Бессонница хроническая усталость,\n' +
                //         '        психотерапия депрессии, тревожностьб, НЛП -нейролингвистическое программирование, НЛП мастер, НЛП -практик\n' +
                //         '     когнитивно-поведенческая терапия ',
                // }
            ],
            script: [
                {
                    vmid: "application/ld+json",
                    type: "application/ld+json",
                    json: {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Наталья Толмачёва",
                        "alternateName": "Детский нейропсихолог | Клинический психолог | Нейропсихологическая диогностика",
                        "url": "https://klinicheskij-psiholog.com/",
                        "logo": "https://firebasestorage.googleapis.com/v0/b/klinicheskij-psiholog.appspot.com/o/brain.jpg?alt=media&token=f1e9feaa-49c4-4042-9b8f-6afa4339ec54",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "",
                            "contactType": "customer service",
                            "areaServed": "UA",
                            "availableLanguage": ["Russian", "Ukrainian"]
                        },
                        "sameAs": "https://www.facebook.com/%D0%9A%D0%BB%D0%B8%D0%BD%D0%B8%D1%87%D0%B5%D0%BA%D0%B8%D0%B9-%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3-%D0%9D%D0%B5%D0%B9%D1%80%D0%BE%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3-%D0%A2%D0%BE%D0%BB%D0%BC%D0%B0%D1%87%D1%91%D0%B2%D0%B0-%D0%9D%D0%B0%D1%82%D0%B0%D0%BB%D1%8C%D1%8F-105253370838895/"
                    }
                }
            ]
        }
    }
</script>
<style scoped>
    @import url('../../public/marck.css');

    .may_font {
        font-family: 'Marck Script', cursive;
        font-size: 30px;
    }

    .avatar-img {
        align-items: center;
        max-width: 400px;
        max-height: 370px;
        border-radius: 10px;

    }


    .background_baby {
        background-color: #ffeed9;
    }

    .background_adult {
        background-color: #b1ffe5;
    }

    @media screen and (max-width: 600px) {
        .custom-selector {
            font-size: 3px;
        }
    }

    @media screen and (max-width: 400px) {
        .avatar-img {
            max-width: 300px;
            max-height: 300px;

        }
    }

    @media screen and (max-width: 800px) {
        .avatar-col {
            text-align: center;

        }
    }


</style>