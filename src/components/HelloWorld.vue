<template>


    <v-container>
        <v-row class="mt-4">
            <v-col cols="4">
                <v-img contains max-width="600" :src="require('../assets/RamLogoText.png')"></v-img>
            </v-col>
            <v-col cols="8">
                <v-carousel>
                    <v-carousel-item v-for="(item,i) in items"
                                     :key="i"
                                     :src="item.src"
                                     reverse-transition="fade-transition"
                                     transition="fade-transition"></v-carousel-item>
                </v-carousel>
            </v-col>


        </v-row>


      

        <v-row class="text-center">
            <v-col cols="12">


                

            </v-col>

            <v-col>
                <v-img :src="logo"></v-img>
            </v-col>

        </v-row>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                logo: require('../assets/chassis.jpg'),
                items: [
                    {
                        src: require('../assets/chassis.jpg'),
                    },
                    {
                        src: require('../assets/chassis2.jpg'),
                    },
                    {
                        src: require('../assets/RamLogoLarge.png'),
                    },
                ],
            }
        },
    }
</script>
