<template>
    <div class="">
        <v-container class="">
            <h2 class="d-flex justify-center justify-lg-start">
                Products Index
            </h2>
            <v-row class="" justify="center" justify-lg="start">
                <ProductsCard
                    v-for="item in items"
                    v-bind="item"
                    :key="item.id"
                />
            </v-row>
        </v-container>
    </div>
</template>

<script>
import ProductsCard from './ProductsCard.vue'
export default {
    name: 'ProductsIndex',
    data: () => {
        return {
            items: [
                {
                    id: 1,
                    imgName: '1.jpg',
                    title: '«Рождение Венеры» Сандро Боттичелли',
                    currentPrice: '1000000',
                    currency: '$',
                },
                {
                    id: 2,
                    imgName: '2.jpg',
                    title: '«Тайная вечеря»  Леонардо да Винчи',
                    currentPrice: '1 000 000',
                    currency: '$',
                },
                {
                    id: 3,
                    imgName: '3.jpg',
                    title: '«Сотворение Адама» Микеланджело',
                    currentPrice: '3 000 000',
                    currency: '$',
                },
                {
                    id: 4,
                    imgName: '4.jpg',
                    title: '«Урок анатомии»  Рембрандт',
                    oldPrice: '6 000 000',
                    currentPrice: '5 000 000',
                    currency: '$',
                },
            ],
        }
    },
    components: {
        ProductsCard,
    },
}
</script>
