<template>
  <div class="createRentCarOrder">
  	<div class="set1">
  		<div><img class="carImg" :src="carInfo.img"></div>
  		<div class="name">{{carInfo.name}}</div>
  		<div class="des">{{carInfo.describe}}</div>
  	</div>
  	<div class="set2">
  		<div class="position">
  			<div class="rentPos">
  				<span class="lightGrey">取车地点</span>
  				<span>{{carInfo.posText1}}</span>
  			</div>
  			<div>
  				<span class="lightGrey">还车地点</span>
  				<span>{{carInfo.posText2}}</span>
  			</div>
  		</div>
  		<div class="rentTime">
  			<datetime class="timeBlock" :start-date="nowTime.date" :min-hour="nowTime.hour" format="YYYY-MM-DD HH:mm" v-model="startTime" @on-change="onTimeChange">
  				<div class="time">
  					<div v-if="startTime">
	  					<div>{{startTime.split(' ')[0].substr(5)}}</div>
	  					<div>{{startTime.split(' ')[1]}}</div>
	  				</div>
	  				<div v-else>
	  					<div>借车时间</div>
	  				</div>
  				</div>
  				<img class="arrowDown" src="../assets/img/i-arrowDown2.png">
  			</datetime>
  			<div class="dateRange">{{rangeDay}}天</div>
  			<datetime class="timeBlock" :start-date="nowTime.date" :min-hour="nowTime.hour" format="YYYY-MM-DD HH:mm" v-model="endTime" @on-change="onTimeChange">
  				<div class="time">
  					<div v-if="endTime">
	  					<div>{{endTime.split(' ')[0].substr(5)}}</div>
	  					<div>{{endTime.split(' ')[1]}}</div>
	  				</div>
	  				<div v-else>
	  					<div>还车时间</div>
	  				</div>
  				</div>
  				<img class="arrowDown" src="../assets/img/i-arrowDown2.png">
  			</datetime>
  		</div>
  		<div class="personInfo">
  			<div class="flexBox">
  				<div class="flex1">取车人信息</div>
  				<div class="boldGreen" @click="naviToSubmitPeronalInfo">完善</div>
  			</div>
  			<div class="mainContent">
  				<div class="flexBox">
  					<div class="flex1 lightGrey">姓名</div>
  					<div>--</div>
  				</div>
  				<div class="flexBox">
  					<div class="flex1 lightGrey">联系方式</div>
  					<div>--</div>
  				</div>
  				<div class="flexBox">
  					<div class="flex1 lightGrey">身份证号码</div>
  					<div>--</div>
  				</div>
  			</div>
  			<div class="tip">取车人驾驶证需大于一年 </div>
  		</div>
  	</div>
  	<div class="set3">
  		<div class="rentCarFee">
  			<div class="flexBox">
  				<div class="flex1">取车人信息</div>
  				<div class="boldGreen">免押金服务</div>
  			</div>
  			<div class="mainContent">
  				<div class="flexBox">
  					<div class="flex1 lightGrey">车辆租金</div>
  					<div>256.00元</div>
  				</div>
  				<div class="flexBox">
  					<div class="flex1 lightGrey">异地空驶驾驶费</div>
  					<div>0.00元</div>
  				</div>
  				<div class="flexBox">
  					<div class="flex1 lightGrey">手续费</div>
  					<div>0.00元</div>
  				</div>
  				<div class="flexBox">
  					<div class="flex1 lightGrey">违章押金</div>
  					<div>2000.00元</div>
  				</div>
  				<div class="flexBox">
  					<div class="flex1 lightGrey">安全管理费</div>
  					<div>22.00元</div>
  				</div>
  				<div class="flexBox">
  					<div class="flex1 lightGrey">服务费</div>
  					<div>40.00元</div>
  				</div>
  			</div>
  		</div>
  		<div class="total">
  			<div class="flexBox">
				<div class="flex1 lightGrey">小计</div>
				<div class="redFont30">2317.00元</div>
			</div>
			<div class="tip"><span class="baseGreen">芝麻信用≥700</span>可以享受<span class="red">免押金</span>服务</div>
  		</div>
  	</div>
    <div class="set4">
      <div class="flexBox">
        <div class="flex1">优惠券</div>
        <div class="red">使用优惠券50元</div>
      </div>
    </div>
    <div class="set5">
      <div class="illustrate flexBox">
        <div class="flex1">租车须知</div>
        <img src="../assets/img/i-arrowRight.png">
      </div>
      <div class="illustrate flexBox">
        <div class="flex1">押金说明</div>
        <img src="../assets/img/i-arrowRight.png">
      </div>
    </div>
    <div class="bottom flexBox">
      <div class="flex1 flexBox">
        <div class="tel"><img src="../assets/img/tel.png"></div>
        <div class="price">¥268元</div>
      </div>
      <div class="submit">提交订单</div>
    </div>
  </div>
</template>

<script>
import { Datetime,Group  } from 'vux'
export default {
  name: 'createRentCarOrder',
  components: {
    Group,
    Datetime
  },
  data(){
  	return{
  		carInfo:{
  			name:"皮卡，面包，SUV",
  			describe:"1.6L自动轿车（三厢）5座",
  			id:"31",
  			img:'../static/img/storeImg.png',
  			lat:110.319004,
  			lng:20.017087,
  			posText1:"美兰区海景路海岸金沙109号qu",
  			posText2:"美兰区海景路海岸金沙109号huan",
  		},
  		nowTime:{
  			date:''+new Date().getFullYear()+'-'+(new Date().getMonth()+1)+"-"+new Date().getDate(),
  		},
  		startTime: '',
  		endTime:'',
  		rangeDay:0,
  	}
  },
  created(){
  },
  methods: {
    onTimeChange (val) {
      if (this.startTime&&this.endTime) {
      	console.log(this.startTime)
      	this.rangeDay=parseInt((new Date(this.endTime).getTime()-new Date(this.startTime).getTime())/24/3600/1000)+1;
      }
    },
    naviToSubmitPeronalInfo(){
      this.$router.push({ path: `/submitPersonalInfo/submitIdCard` })
    }
  }
}
</script>
<style lang="less" scoped>
@import "../assets/css/common.css";
.redFont30{
	font-size: 30px;
	color:#d91a1a;
}
.red{
	color:#d91a1a;
}
.borderBottom{
	border-bottom: 20px solid #e6e6e6;
}
.set1{
	margin-top: 20px;
	text-align: center;
	.borderBottom;
	.carImg{
		width:280px;
		height: 180px;
	}
	.name{
		font-size: 40px;
		font-weight:bold;
	}
	.des{
		color: var(--grey6);
		font-size: 30px;
		margin-bottom: 26px;
	}
}
.set2{
	.borderBottom;
	padding: 0 40px;
	.position{
		font-size:30px;
		padding: 30px 0;
		line-height:1;
		border-bottom: 2px solid #e6e6e6;
		.rentPos{
			margin-bottom: 20px;
		}
		.lightGrey{
			margin-right:30px;
		}
	}
	.rentTime{
		padding: 30px 0;
		border-bottom: 2px solid #e6e6e6;
		display: flex;
		text-align: center;
		align-items: center;
		.timeBlock{
			display: flex;
			text-align: center;
			align-items: center;
			.time{
				text-align: center;
				width: 135px;
				font-size: 30px;
				margin-right:24px;
			}
			.arrowDown{
				width: 20px;
				height: 12px;
			}
		}
		.dateRange{
			flex: 1;
			color: var(--grey9);
			font-size: 30px;
		}
	}
	.personInfo{
		font-size: 30px;
		padding: 30px 0;
		.boldGreen{
			color: var(--baseGreen);
			font-weight:bold;
		}
		.mainContent{
			margin-top: 30px;
			line-height:1.6;
		}
		.tip{
			color:#d91a1a;
			margin-top: 10px;
			font-size: 24px;
		}
	}
}
.set3{
	.borderBottom;
	padding: 0 40px;
	.rentCarFee{
		font-size: 30px;
		padding: 30px 0;
		border-bottom: 2px solid #e6e6e6;
		.boldGreen{
			color: var(--baseGreen);
			font-weight:bold;
		}
		.mainContent{
			margin-top: 30px;
			line-height:1.6;
		}
	}
	.total{
		font-size: 30px;
		padding: 30px 0;
		.tip{
			font-size: 24px;
		}
	}
}
.set4{
  padding:30px 40px;
  font-size:30px;
  .borderBottom;
}
.set5{
  padding:0px 40px;
  .borderBottom;
  margin-bottom:98px;
  .illustrate{
    padding:30px 0;
    border-bottom:2px solid #e6e6e6;
    img{
      width:9px;
      height:15px;
    }
  }
}
.bottom{
  position: fixed;
  bottom:0;
  height:98px;
  width:100%;
  background:white;
  .tel{
    width:54px;
    height:54px;
    margin-left:40px;
    margin-right:47px;
    img{
      width:100%;
      height:100%;
    }
  }
  .price{
    font-size:40px;
    font-weight:bold;
    color:var(--baseGreen);
  }
  .submit{
    width:320px;
    height:98px;
    line-height:98px;
    text-align:center;
    color:white;
    background:var(--backlg);
  }
}
</style>