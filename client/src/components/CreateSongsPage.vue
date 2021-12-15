<template>
  <v-card max-width="450" class="max-auto">
    <!-- CardPanel.vue -->
    <div class="cont">
      <v-layout>
        <card-panel title="Song Metadata">
          <v-flex xl-12 offset-xl-12>
            <!--create data-->
            <v-text-field label="Title" :rules="['Required#']" required v-model="song.title"></v-text-field>
            <!--create data-->
            <v-text-field label="Artist" :rules="['Required']" required  v-model="song.artist"></v-text-field>
            <!--create data-->
            <v-text-field label="Genre"  :rules="['Required']" required v-model="song.genre"></v-text-field>
            <!--create data-->
            <v-text-field label="Album"  :rules="['Required']" required v-model="song.album"></v-text-field>
            <!--create data-->
            <v-text-field
              label="Album Image Url"
              :rules="['Required']" 
              required
              v-model="song.albumImageUrl"
            ></v-text-field>
          </v-flex>
        </card-panel>

        <card-panel title="Song Structure">
          <v-flex xl-8 offset-xl-8>
            <!--create data-->
            <v-col cols="12" md="6">
              <v-textarea
                name="input-7-1" 
                label="Tab"
                :rules="['Required']" 
                required
                value="Please type here."
                v-model="song.tab"
                hint="Hint text"
              ></v-textarea>
            </v-col>
            <!--create data-->
            <v-col cols="12" md="6">
              <v-textarea
                name="Lyrics"
                label="Default style"
                :rules="['Required']" 
                required
                value="Please type here."
                v-model="song.lyrics"
                hint="Hint text"
              ></v-textarea>
            </v-col>
          </v-flex>
        </card-panel>
      </v-layout>
    </div>
    <p> hello </p> 
    {{ error }}
    <span class="danger-alert" v-if="error">
       
    </span>    
    <v-btn dark class="cyan" @click="create"> Create </v-btn>
  </v-card>
</template>

<script>
import CardPanel from "@/components/CardPanel"
import SongsService from '@/services/SongsService'

export default {
  components: {
    CardPanel,
  },
  data() {
    return {
      song: {
        title: '',
        artist: '',
        genre: '',
        album: '',
        albumImageUrl: '',
        youtubeId: '',
        lyrics: '',
        tab: '', 
      },
      error:''
    };
  },
  methods: {
      async create () {
        //this.error = null
        const areAllFieldsFilledIn = await Object
            .keys(this.song)
            .every(key => !!song[key]) 
        if (!areAllFieldsFilledIn) {
            return this.error = 'Please fill in all the required fields'
        } 


        try {
            await SongsService.post(this.song)
            //console.log('NBA')
            //console.log(this.song)
            // create後轉址到songs
            this.$router.push({
                name:'songs'
            })
        }catch (err) {
            console.log(err)
        }
      }
  }
};
</script>

<style lang="scss" scoped></style>
