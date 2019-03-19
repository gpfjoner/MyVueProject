<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题</div>
    <div class="header-right">城市
      <span class="iconfont ">&#xe62b;</span>
      </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="stylus" scoped>
  @import "../../../assets/styles/varibies.styl"
  .header
    display: flex
    line-height : .86rem
    background $bgColor
    color: #fff
 .header-left
   width: .64rem
   float: left
   padding-left:.2rem
   .back-icon
   text-align:center
     font-size: .4rem
  .header-input
    flex: 1
    height :.63rem
    padding-left: .2rem
    line-height: .64rem
    background #fff
    border-radius:.1rem
    margin-top:.12rem
    margin-left: .2rem
    margin-right: .2rem
    color:#333333
  .header-right
    float:right
     width :1.24rem
    text-align:center
</style>
