<template>
  <div>
    <!--上半部的bar-->
    <v-toolbar color="cyan" dark>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <!--add button-->
    <!--slot : 你自己可以變動的部分 -->
    <slot name="action"></slot>

    <!-- three-line List -->
    <v-list three-line>
      <template>
        <div class="container">
          <v-layout>
            <slot> No slots content defined. </slot>
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
