<template>
  <div>
    <!--上半部的bar-->
    <v-toolbar color="#FFC1CB" dark>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>


    <!-- three-line List -->
    <v-list three-line>
      <template>
        <div class="container">
          <v-layout>
            <slot> No slots content defined. (2)</slot>
          </v-layout>
        </div>
      </template>
    </v-list>
    <!-- three-line List -->

  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="scss" scoped></style>
