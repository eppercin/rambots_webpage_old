<template>



    <v-row>
        <v-col cols="1">
            <v-spacer></v-spacer>
        </v-col>
        <v-col cols="this.mobile ? 12 : 10" class="d-flex justify-center align-center">
            <v-card max-width="1500px" class="mt-4 pa-4">
                <v-tabs @change="console.log(tab)" v-model="tab" color="#1E4D2B">
                    <v-tab >2022/2023</v-tab>
                    <v-tab >2021/2022</v-tab>
                </v-tabs>
                <v-divider></v-divider>
                <v-card outlined color="transparent" class="d-flex justify-center align-center">
                    <TeamYear2 v-if="tab == 0" />
                    <TeamYear1 v-if="tab == 1" />
                </v-card>
            </v-card>
        </v-col>

        <v-col cols="1">
            <v-spacer></v-spacer>
        </v-col>
    </v-row>


   

</template>

<script>
    import TeamYear1 from '../components/TeamYear1.vue'
    import TeamYear2 from '../components/TeamYear2.vue'
    export default {
        mounted() {
            this.mobile = window.innerWidth <= 760
        },
        computed: {
            console: () => console,
            window: () => window,
        },
        components: {
            TeamYear1,
            TeamYear2
        },
        data() {
            return {
                mobile: false,
                logo: require('../assets/chassis.jpg'),
                tab: null,
                url: "https://projects-web.engr.colostate.edu/ece-sr-design/AY21/outreach/",

            }
        },
    }</script>
