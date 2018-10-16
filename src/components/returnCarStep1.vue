<template>
  <div class="returnCarStep1">
    <div class="takePhoto">
      <img src="../assets/img/returnPhoto1.png">
      <s-upload-img class="input" @fileUpload="saveReturnPhoto1"></s-upload-img>
    </div>
  </div>
</template>

<script>
import uploadImg from '@/components/common/uploadImg'
export default {
  name: 'returnCarStep1',
  components: {
    's-upload-img': uploadImg,
  },
  data(){
  	return{
      returnPhotoSrc1:"",
      returnPhotoSrc2:"",
      returnPhotoSrc3:"",
      returnPhotoSrc4:"",
  	}
  },
  methods:{
  	saveReturnPhoto1(e){
      this.idCardBack=e.imgObjs; 
    },
  }
}
</script>
<style scoped>
@import "../assets/css/common.css";
.takePhoto{
  margin: 27px 95px;
}
</style>