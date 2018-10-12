<template>
  <div class="index">
    <div class="nav">
      <router-link class="personalCenter" to="/personalCenter">
        <img class="icon" src="../assets/img/i-personalCenter.png">
      </router-link>
      <router-link class="navItem" to="/findCar">
        <div class="tab">找车</div>
        <div class="underlineWrap" ><span class="underline"></span></div>
      </router-link>
      <router-link class="navItem" to="/storeList">
        <div class="tab">门店</div>
        <div class="underlineWrap" ><span class="underline"></span></div>
      </router-link>
      <router-link class="navItem" to="/tourism">
        <div class="tab">旅游</div>
        <div class="underlineWrap" ><span class="underline"></span></div>
      </router-link>
      <a  class="contact" href=""><img class="icon" src="../assets/img/i-contact.png"></a>
    </div>
    <router-view class="tabContent"/>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/common.css";

:root{
  --navHeight:98px;
}
.nav{
  height: var(--navHeight);
  padding: 0 40px;
  box-shadow:0px 2px 20px #ccc;
  position: relative;
  z-index: 1;
  font-size: 32px;
  font-weight: bold;
  display: flex;
  align-items:center ;
  justify-content:center;
  & .personalCenter{
    padding-right: 80px;
    & img{
      display: block;
    }
  }
  & .contact{
    padding-left: 80px;
    & img{
      display: block;
    }
  }
  & .navItem{
    flex: 1;
    color: var(--baseBlack);
    text-align: center;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    & .tab{
      line-height: calc(var(--navHeight)-5px);
      height: calc(var(--navHeight)-5px);
    }
    & .underlineWrap{
      height: 6px;
      line-height: 6px;
    }
    &.router-link-active{
      color: var(--baseGreen);
      & .underline{
        vertical-align: top;
        display: inline-block;
        width: 28px;
        height: 100%;
        background-color: var(--baseGreen);
      }
    }
  }
}
.tabContent{
  height: calc(100vh - var(--navHeight));
}
</style>