<template>
  <main>
    <v-layout class="container">
      <v-carousel
        interval="3000"
        cycle
        :show-arrows="false"
        hide-delimiter-background
        height="100vh"
        class="carousel-top"
      >
        <v-carousel-item src="/img/slide3.jpg" cover></v-carousel-item>
        <v-carousel-item src="/img/slide5.jpg" cover></v-carousel-item>
      </v-carousel>
    </v-layout>
  </main>
</template>

<style lang="scss">
.container {
  .carousel-top {
    height: 100vh;
  }
}
</style>
