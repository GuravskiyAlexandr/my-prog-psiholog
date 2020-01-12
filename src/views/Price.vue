<template>
    <v-container>
        <v-card class="mb-5">
            <v-simple-table :fixed-header="fixedHeader" height="500px">
                <thead>
                <tr>
                    <th style="background: #b3ffe3" class="text-left">Название услуги</th>

                    <th style=" min-width:70px; background: #b3ffe3" class="text-left">Цена</th>
                </tr>
                </thead>
                <tbody>
                <tr
                        v-for="(item, i) in services" :key="item.title"
                        :STYLE="`background-color: ${i % 2 == 0 ? 'rgb(246,235,253)' : ''}`"
                >
                    <td>{{ item.title }}</td>
                    <td>{{ item.cost }}</td>
                </tr>
                <tr class="price">
                    <td>
                        <p class="font-weight-bold pt-5" >Вы также можете воспользоваться абониментам тогда занятия будут дешевле </p>
                        <p class="">10 занятий 4700гр. Один прием можно перенести</p>
                    </td>
                    <td class="">
                    </td>
                </tr>
                </tbody>
            </v-simple-table>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "Price",
        data() {
            return {
                fixedHeader: true,
                services: [
                    {
                        title: 'Первичная консультация для деток (Дифференциальная диагностика, сбор анамнеза) 60 мин',
                        cost: 600,
                    },
                    {
                        title: 'Нейропсихологическая диагностика 60 мин',
                        cost: 600,
                    },
                    {
                        title: 'Нейропсихологическая коррекция 60 мин',
                        cost: 550,
                    },
                    {
                        title: 'Модификация поведения детей с РАС  60 мин',
                        cost: 550,
                    },
                    {
                        title: 'Групповая форма работы с РАС 60 мин',
                        cost: 200,
                    },
                    {
                        title: 'Для взрослых первичная  консультация 60 мин',
                        cost: 600,
                    },
                    {
                        title: 'Повторные консультации 60 мин',
                        cost: 550,
                    },

                ],
            }
        },
        metaInfo: {
            title: 'Цена | Стоимость услуг психолога',
            meta: [
                {
                    vmid: 'keywords',
                    name: 'keywords',
                    content: 'Цена | Стоимость услуг психолога  Киев'
                },
                {
                    vmid: 'description',
                    name: 'description',
                    content: 'Первичная консультация для деток (Дифференциальная диагностика, сбор анамнеза) 60 мин\t500\n' +
                        'Нейропсихологическая диагностика 60 мин\t500\n' +
                        'Нейропсихологическая коррекция 60 мин\t500\n' +
                        'Модификация поведения детей с РАС 60 мин ',
                }
            ]
        },
    }
</script>

<style scoped>
    .price {
        padding: 6px;
        margin: 0;
        background-color: #b3ffe3;
        font-size: large;
    }
</style>