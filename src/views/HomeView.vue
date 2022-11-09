<template>


    <v-container>
        <v-row class="mt-4">
            <v-col :cols="this.mobile ? 12 : 5">
                <v-card class=" pa-2 mt-12 justify-center" outlined color="transparent" height="100%">
                    <div class="text-center">
                        <v-row>
                            <v-col cols="1"><v-spacer></v-spacer></v-col>
                            <v-col cols="10">
                                <v-img width="600px" class="mt-6" :src="require('../assets/RamLogoText.png')"></v-img>

                                <v-btn text class="mt-0"
                                       href="https://projects-web.engr.colostate.edu/ece-sr-design/AY21/outreach/"
                                       target="_blank">
                                    An ECE Outreach Project<v-icon right>
                                        mdi-link
                                    </v-icon>
                                </v-btn>
                            </v-col>
                            <v-col cols="1"><v-spacer></v-spacer></v-col>
                        </v-row>
                        
                    </div>
                </v-card>
            </v-col>
            <v-col :cols="this.mobile ? 12 : 7">
                <v-card class="pa-2" outlined color="transparent">
                    <v-carousel :height="this.mobile ? 300 : 600" width="500">
                        <v-carousel-item reverse-transition="fade-transition"
                                         transition="fade-transition"
                                         v-for="(item, i) in items"
                                         :key="i">
                            <v-img :src="item.src" contain></v-img>
                        </v-carousel-item>

                    </v-carousel>
                </v-card>
            </v-col>


        </v-row>

        <v-row>
            <v-col cols="2">
                <v-spacer></v-spacer>
            </v-col>
            <v-col :cols="this.mobile ? 12 : 8">
                <v-card  outlined  class="mb-4">
                    <v-card-text>
                        <div>About Us</div>
                        <p class="text-h4 text--primary mt-0">
                            Project Summary
                        </p>
                        <p>
                            The RamBOTs senior design project is an extension of the electrical and computer engineering outreach program. It is a quadrupedal robot intended as an educational tool that is open source and more economic than current existing counterparts. As an extension of outreach, the intention is that this project will be demonstrated to many groups of younger students (ranging from middle school to high school age) to show them the possibilities of electrical and computer engineering (ECE) as well as engineering as a whole as this is a multidisciplinary project in nature.
                        </p>
                        <p class="text-h4 text--primary  mt-12">
                            Background
                        </p>
                        <p>
                            This project is intended to increase exposure and access to robotics through being open source and more economic compared to other options, exemplifying the purpose of ECE outreach. It is important to make ECE accessible to everyone. By sharing exciting projects that inspire younger students it is possible to bring more attention to engineering as a whole and to help encourage the next generation of engineers and problem solvers.
                        </p>
                        <p class="text-h4 text--primary  mt-12">
                            Constraints
                        </p>
                        <p>
                            The purpose of this project is to develop an open-source quadrupedal robot as an educational outreach tool to foster interest in engineering and robotics. The mechanical design of the RamBOT is largely based off of an existing open source robotics project-the team primarily intends to improve upon electronics and software to enhance said design. As a 2nd-year continuation project a considerable amount of prerequisite work on the robot has been completed. Most notably, the chassis has been constructed and hardware has been acquired in preparation to begin testing components and programming. The following items have been inherited from the previous year's team:
                        </p>
                        <p class="ml-8">
                            A 3D printed chassis / body, motors and drivers (not all have been tested), a stand for storage/transportation
                        </p>
                        <p class="ml-8">
                            Motors and drivers (not all have been tested), a stand for storage/transportation
                        </p>
                        <p class="ml-8">
                            A stand for storage/transportation
                        </p>
                        <p class="ml-8">
                            Machine learning algorithms
                        </p>
                        <p>
                            This year''s team intends to test everything received from the previous year''s team, beginning with the hardware (e.g. motors and motor drivers) so that there will be sufficient time to reorder any faulty components. Additionally, last year's team consisted of eight ECE students while this year's consists of eight ECE students and two Mechanical Engineering students. This will allow the current team to reevaluate the existing mechanical structure of the robot and to make modifications as necessary, as well as to implement locomotion more seamlessly. Existing machine learning algorithms will be tested for accuracy and modified as needed throughout the project's development cycle.
                        </p>
                        <p class="text-h4 text--primary  mt-12">
                            Goals
                        </p>
                        <p>
                            The seniors and Junior Outreach members on the RamBOTs Senior Design Team at Colorado State University will adhere to the timeline in the final section of this project plan to fulfill a completed design. The definition of a completed design is laid out in the following goals and objectives:
                        </p>
                        <v-list-item three-line>
                            <v-list-item-content>
                                <v-list-item-title>Stable quadrupedal standing and movement</v-list-item-title>
                                <v-list-item-subtitle class="ml-4">
                                    Motors demonstrate consistent and accurate programmed movement (Test 1)
                                </v-list-item-subtitle>
                                <v-list-item-subtitle class="ml-4">
                                    Can be controlled or programmed to move towards an objective and does not fall over under common operational circumstances (Test 2)
                                </v-list-item-subtitle>
                                <v-list-item-subtitle class="ml-4">
                                    Gyroscope senses and accurately returns movement data (Test 3)
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item three-line>
                            <v-list-item-content>
                                <v-list-item-title>Machine learning implemented</v-list-item-title>
                                <v-list-item-subtitle class="ml-4 mr-8">
                                    Can, with high confidence, recognize a toy ball compared to surrounding objects (Test 4)
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item three-line>
                            <v-list-item-content>
                                <v-list-item-title>Useful as tool for ECE Outreach</v-list-item-title>
                                <v-list-item-subtitle class="ml-4 mr-8">
                                    Entirely open-source
                                </v-list-item-subtitle>
                                <v-list-item-subtitle class="ml-4">
                                    Chassis and harness that can reliably withstand regular use of product and travel (Test 5)
                                </v-list-item-subtitle>

                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item three-line>
                            <v-list-item-content>
                                <v-list-item-title>
                                    Meets budget requirements
                                </v-list-item-title>

                                <v-list-item-subtitle class="ml-4">
                                    Cost for team remains below the allocated amount described in budget section of this plan
                                </v-list-item-subtitle>

                            </v-list-item-content>
                        </v-list-item>

                    </v-card-text>

                </v-card>
            </v-col>
            <v-col cols="2">
                <v-spacer></v-spacer>
            </v-col>
        </v-row>



        <v-row class="text-center">
            <v-col cols="12">




            </v-col>

            <v-col>

            </v-col>

        </v-row>







    </v-container>














</template>

<script>
    export default {
        mounted() {
            this.mobile = window.innerWidth <= 760
        },
        data() {
            return {
                logo: require('../assets/gallery/chassis.jpg'),
                mobile: false,
                url: "https://projects-web.engr.colostate.edu/ece-sr-design/AY21/outreach/",
                items: [
                    {
                        src: require('../assets/gallery/chassis.jpg'),
                    },
                    {
                        src: require('../assets/year2/team_full.jpg'),
                    },
                    {
                        src: require('../assets/gallery/chassis2.jpg'),
                    },
                ],
            }
        },
    }
</script>
