<template>
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide><img/></swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {

      }
    }
  }
}
</script>
<style lang="stylus" scoped></style>
