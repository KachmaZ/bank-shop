<template>
    <v-app-bar app color="white" elevation="1">
        <v-container>
            <v-row class="w-100" align-h="center">
                <v-col class="d-flex align-center">
                    <div class="nav">
                        <router-link :to="{ name: 'catalog' }"
                            >Каталог</router-link
                        >
                        <router-link :to="{ name: 'delivery' }"
                            >Доставка</router-link
                        >
                        <router-link :to="{ name: 'payment' }"
                            >Оплата</router-link
                        >
                        <router-link :to="{ name: 'about' }"
                            >О компании</router-link
                        >
                    </div>
                </v-col>

                <v-col>
                    <v-spacer></v-spacer>
                </v-col>

                <v-col class="d-flex align-center">
                    <v-input>Search</v-input>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<script>
export default {
    name: 'MainHeader',
}
</script>

<style lang="scss"></style>
