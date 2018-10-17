<template>
  <div class="submitDrivingLicense">
  	<div class="illustrate">请拍摄<span class="red">*远</span>的驾驶证</div>
  	<div class="flexBox">
  		<div class="center item">
  			<img v-if="!drivingLicenseFront.imgDataUrl" class="drivingLicenseImg" src="../../assets/img/drivingLicenseFront.png">
  			<img v-else  class="drivingLicenseImg" :src="drivingLicenseFront.imgDataUrl">
  			<s-upload-img class="input" @fileUpload="saveDrivingLicenseFront"></s-upload-img>
  		</div>
  	</div>
  	<div class="flexBox">
  		<div class="center item">
  			<img v-if="!drivingLicenseBack.imgDataUrl" class="drivingLicenseImg" src="../../assets/img/drivingLicenseBack.png">
  			<img v-else  class="drivingLicenseImg" :src="drivingLicenseBack.imgDataUrl">
  			<s-upload-img class="input" @fileUpload="saveDrivingLicenseBack"></s-upload-img>
  		</div>
  	</div>
  	<div class="nextStep" :class='drivingLicenseFront.imgDataUrl&&drivingLicenseBack.imgDataUrl?"nextStepEnable":"nextStepdisable"' @click="naviToFaceRecognition">
  		下一步
  	</div>
  </div>
</template>

<script>
import uploadImg from '@/components/common/uploadImg'
export default {
  name: 'submitDrivingLicense',
  components: {
    's-upload-img': uploadImg,
  },
  data(){
  	return{
  		drivingLicenseFront:{
  			file:"",
  			imgDataUrl:""
  		},
  		drivingLicenseBack:{
  			file:"",
  			imgDataUrl:""
  		},
  	}
  },
  methods:{
  	saveDrivingLicenseFront(e){
  		this.drivingLicenseFront=e.imgObjs;
  	},
  	saveDrivingLicenseBack(e){
  		this.drivingLicenseBack=e.imgObjs; 
  	},
  	naviToFaceRecognition(){
  		this.$router.push({ path: `/submitPersonalInfo/submitFaceRecognition` })
  	}
  }
}
</script>
<style lang="less">
@import "../../assets/css/common.css";
.illustrate{
	margin-top: 30px;
	text-align: center;
}
.submitDrivingLicense{
  padding-bottom: 118px;
	.flexBox{
		align-items: center;
		vertical-align: middle;
		justify-content:center;
	}
}
.item{
	margin-top: 80px;
	position: relative;
	width: 640px;
	height: 440px;
}
.drivingLicenseImg{
	width: 640px;
	height: 440px;
}
.input{
	position: absolute;
	width: 640px;
	height: 440px;
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