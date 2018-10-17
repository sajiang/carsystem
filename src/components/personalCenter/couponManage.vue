<template>
  <div class="couponManage">
  	<div class="couponItem" :class="item.available?'couponEnable':'couponDisable'" v-for="item in couponList">
  		<div>
  			<span class="title">优惠{{item.discount}}元</span>
  			<span class="isAvailable" :class="item.available?'green':''">{{item.available?"未使用":"已过期"}}</span>
  		</div>
  		<div class="desc">有效期{{item.startDate}}到{{item.endDate}}</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'couponManage',
  data(){
  	return{
  		couponList:[{
  			startDate:"07月01日",
  			endDate:"11月01日",
  			available:true,
  			discount:50
  		},{
  			startDate:"07月01日",
  			endDate:"09月01日",
  			available:false,
  			discount:60
  		}]
  	}
  },
  methods:{
  	
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";
.green{
	color: #a8ea3b;
}

.couponItem{
	margin: 50px 75px 0 50px;
	border-radius: 20px;
	height: 168px;
	padding: 30px 40px;
	box-sizing: border-box;
	& .title{
		font-size: 40px;
		font-weight: bold;
	}
	& .isAvailable{
		font-size: 30px;
		float: right;
		font-weight: bold;
	}
	& .desc{
		font-size: 24px;
	}
}
.couponEnable{
	color: white;
	background:url('../../../static/img/couponBg.png');
	background-size: cover;
	background-repeat: no-repeat;
}
.couponDisable{
	background-color: #e6e6e6;
	color: #b3b3b3;
}
</style>