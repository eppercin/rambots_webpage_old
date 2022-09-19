<template>



    <v-row>
        <v-col cols="2">
            <v-spacer></v-spacer>
        </v-col>
        <v-col cols="8">
            <v-card max-width="1500" class="mt-4 pa-4">
                <p class="text-h4 text--primary mt-0">
                    Resources:
                </p>
                <v-divider></v-divider>

                <v-list-item class="mt-8">
                    <v-list-item-content>
                        <a href="https://github.com/eppercin/rambots_website"
                           class="text-decoration-none text-h5">Website GitHub Repository</a>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-content>
                        <a href="RamBots_Project_Plan.pdf" download
                           class="text-decoration-none text-h5">Project Plan</a>
                    </v-list-item-content>
                </v-list-item>

            </v-card>
        </v-col>

        <v-col cols="2">
            <v-spacer></v-spacer>
        </v-col>
    </v-row>


   

</template>

<script>

    export default {

        data() {
            return {
                logo: require('../assets/chassis.jpg'),
               
            }
        },
    }</script>
