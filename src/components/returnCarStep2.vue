<template>
  <div class="returnCarStep2">
    <div class="flexBox">
      <div class="takePhoto">
        <img v-if="!returnPhotoSrc1.imgDataUrl" class="tipImg" src="../assets/img/returnPhoto2-1.png">
        <img v-else  class="tipImg" :src="returnPhotoSrc1.imgDataUrl">
        <s-upload-img class="input" @fileUpload="saveReturnPhoto1"></s-upload-img>
      </div>
    </div>
    <div class="flexBox">
      <div class="takePhoto">
        <img v-if="!returnPhotoSrc2.imgDataUrl" class="tipImg" src="../assets/img/returnPhoto2-2.png">
        <img v-else  class="tipImg" :src="returnPhotoSrc2.imgDataUrl">
        <s-upload-img class="input" @fileUpload="saveReturnPhoto2"></s-upload-img>
      </div>
    </div>
    <div class="flexBox">
      <div class="takePhoto">
        <img v-if="!returnPhotoSrc3.imgDataUrl" class="tipImg" src="../assets/img/returnPhoto2-3.png">
        <img v-else  class="tipImg" :src="returnPhotoSrc3.imgDataUrl">
        <s-upload-img class="input" @fileUpload="saveReturnPhoto3"></s-upload-img>
      </div>
    </div>
    <div class="nextStep" :class='returnPhotoSrc1.imgDataUrl&&returnPhotoSrc2.imgDataUrl&&returnPhotoSrc3.imgDataUrl?"nextStepEnable":"nextStepdisable"' @click="complete">
      完成
    </div>
  </div>
</template>

<script>
import uploadImg from '@/components/common/uploadImg'
export default {
  name: 'returnCarStep2',
  components: {
    's-upload-img': uploadImg,
  },
  data(){
  	return{
      returnPhotoSrc1:{
        file:"",
        imgDataUrl:""
      },
      returnPhotoSrc2:{
        file:"",
        imgDataUrl:""
      },
      returnPhotoSrc3:{
        file:"",
        imgDataUrl:""
      },
  	}
  },
  methods:{
  	saveReturnPhoto1(e){
      this.returnPhotoSrc1=e.imgObjs; 
    },
    saveReturnPhoto2(e){
      this.returnPhotoSrc2=e.imgObjs; 
    },
    saveReturnPhoto3(e){
      this.returnPhotoSrc3=e.imgObjs; 
    },
    complete(){
      
    }
  }
}
</script>
<style scoped>
@import "../assets/css/common.css";
.returnCarStep2{
  padding-bottom: 118px;
}
.flexBox{
  align-items: center;
  vertical-align: middle;
  justify-content:center;
}
.takePhoto{
  margin-top: 54px;
  position: relative;
  width: 560px;
  height: 246px;
  border-radius: 20px;
}
.tipImg{
  width: 560px;
  height: 246px;
  border-radius: 20px;
}
.input{
  position: absolute;
  width: 560px;
  height: 246px;
  display: inline-block;
  left: 0;
  top:0;
  opacity: 0;
}
.nextStep{
  position: fixed;
  bottom:0;
  height:98px;
  line-height:98px;
  width:100%;
  text-align:center;
  font-size:40px;
  color:white;
}
.nextStepEnable{
  background:var(--backlg);
}
.nextStepdisable{
  background:#CCCCCC;
}
</style>