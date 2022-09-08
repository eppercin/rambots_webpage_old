<template>
    <v-app>

        <v-app-bar app
                   :src="require('./assets/appbar.png')"
                   color="#1E4D2B" >
            <v-app-bar-nav-icon color="white"> </v-app-bar-nav-icon>
            <v-img max-width="201px" :src="require('./assets/CSUWatermarkSmall.png')"></v-img>
            <v-spacer></v-spacer>




            <template v-slot:extension >
                <v-flex class="ml-0">
                    <v-tabs color="#1E4D2B" align-with-title>
                        <v-tab to="/">Home</v-tab>
                        <v-tab to="/timeline">Timeline</v-tab>
                        <v-tab to="/team">Team</v-tab>
                        <v-tab to="/resources">Resources</v-tab>
                        <v-tab to="/gallery">Gallery</v-tab>
                    </v-tabs>
                </v-flex>
               
            </template>
        </v-app-bar>

     
        <v-main>

            <router-view />
        </v-main>

        <v-footer app bottom fixed padless
    color="#1E4D2B"
    
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class=" py-1 text-center white--text"
        cols="12"
      >
         2022/2023  — <strong>Colorado State University</strong>
      </v-col>
    </v-row>
  </v-footer>

    </v-app>
</template>

<script>
    export default {
        data: () => ({
            links: null,
            model: 0,
            colors: [
                'primary',
                'secondary',
                'yellow darken-2',
                'red',
                'orange',
            ],
            appbar: require('./assets/appbar.png'),
        }),
    }
</script>
