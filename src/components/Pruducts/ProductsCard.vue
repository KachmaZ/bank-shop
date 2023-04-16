<template>
    <v-col class="fill-height" cols="12" sm="auto" lg="3">
        <v-card width="280">
            <v-img :src="require(`@/assets/images/${imgName}`)"></v-img>
            <div class="card-wrapper p-4">
                <v-card-title class="p-0 mb-4">{{ title }}</v-card-title>
                <v-card-actions class="p-0 d-flex justify-space-between">
                    <div class="card_price">
                        <div class="price">
                            <div class="price-old" v-if="oldPrice">
                                {{ oldPrice }}{{ currency }}
                            </div>
                            <div class="price-current">
                                {{ currentPrice }}{{ currency }}
                            </div>
                        </div>
                    </div>
                    <v-btn color="lighten-2" height="48" width="112" tile dark>
                        Купить
                    </v-btn>
                </v-card-actions>
            </div>
        </v-card>
    </v-col>
</template>

<script>
export default {
    props: {
        id: Number,
        imgName: String,
        title: String,
        oldPrice: String,
        currentPrice: String,
        currency: String,
    },
    name: 'ProductsCard',
}
</script>
