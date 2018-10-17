<template>
  <div class="scanCodeRentOrReturnCar">
  	<div class="maintContent">
  		<img class="icon" src="../assets/img/controlCar.png" @click="naviToControlCar">
  		<img class="icon" src="../assets/img/returnCar.png" @click="naviToReturnCar">
  	</div>
  	
  </div>
</template>

<script>
export default {
  name: 'scanCodeRentOrReturnCar',
  data(){
  	return{

  	}
  },
  methods:{
  	naviToControlCar(){
      this.$router.push({ path: `/controlCar/${this.$route.params.carId}` })
    },
    naviToReturnCar(){
      this.$router.push({ path: `/returnCarStep1/${this.$route.params.carId}` })
    },
  }
}
</script>
<style scoped>
@import "../assets/css/common.css";
.icon{
	width: 358px;
	height: 421px;
}
.maintContent{
	display: flex;
	margin: 184px 15px;
	justify-content: space-between;
}
</style>