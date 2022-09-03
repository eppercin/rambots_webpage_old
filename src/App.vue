<template>
    <v-app>

        <v-app-bar app color="#1E4D2B" >
            <v-app-bar-nav-icon color="white"> </v-app-bar-nav-icon>
            <v-img max-width="201px" :src="require('./assets/CSUWatermarkSmall.png')"></v-img>
            <v-spacer></v-spacer>

            <template v-slot:extension >
                <v-flex class="ml-n10">
                    <v-tabs color="#1E4D2B" align-with-title>
                        <v-tab>Home</v-tab>
                        <v-tab>Timeline</v-tab>
                        <v-tab>Team</v-tab>
                        <v-tab>Resources</v-tab>
                    </v-tabs>
                </v-flex>
               
            </template>
        </v-app-bar>

     
        <v-main>

            <router-view />
        </v-main>



    </v-app>
</template>

<script>
    export default {
        data: () => ({
            model: 0,
            colors: [
                'primary',
                'secondary',
                'yellow darken-2',
                'red',
                'orange',
            ],
        }),
    }
</script>
