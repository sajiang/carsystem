<template>
  <div class="storeList">
  	<div v-for="item in storeList" class="storeItem">
  		<div class="storeInfo" @click="naviToStoreDetail(item.id)">
  			<div class="storeImg"><img :src="item.img"></div>
  			<div class="content">
  				<div>
  					<span class="bold">{{item.name}}</span>
  					<span class="distance">距您6.4km</span>
  				</div>
  				<div class="posText">{{item.posText}}</div>
  			</div>
  			<div class="tel"><img src="../assets/img/tel.png"></div>
  		</div>
  		<div class="carList" v-for="(carTypeItem,index) in item.carList" v-if="index<2" @click="naviToCreateRentCarOrder(carTypeItem.id)">
  			<div class="carItem">
	  			<div class="prices">
	  				<div class="salePrice">¥{{carTypeItem.salePrice}}</div>
	  				<div class="price">门市价¥{{carTypeItem.price}}</div>
	  			</div>
	  			<div class="detail">
	  				<div class="detailType">
	  					<span class="label">{{carTypeItem.label}}</span>
	  					<span v-if="carTypeItem.tip.length>0" class="tip">{{carTypeItem.tip}}</span>
	  				</div>
	  				<div class="history">已租{{carTypeItem.history}}</div>
	  			</div>
  			</div>
  		</div>
  		<div v-if="item.carList.length>2" class="center">
  			<span class="showAllBtn">
  				查看其它<span>{{item.carList.length}}</span>个
  				<img src="../assets/img/i-arrowDown.png">
  			</span>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'storeList',
  data(){
  	return {
  		storeList:[{
  			name:"红轮租车",
  			id:"31",
  			img:'../static/img/storeImg.png',
  			lat:110.319004,
  			lng:20.017087,
  			telNum:"18308949062",
  			posText:"美兰区海景路海岸金沙109号",
  			carList:[{
  				id:"52",
  				salePrice:150,
  				label:"皮卡，面包，SUV",
  				price:200,
  				history:33,
  				tip:"优惠50"
  			},{
  				id:"52",
  				salePrice:118,
  				label:"飞度/K2/伊兰特，免预约",
  				price:150,
  				history:33,
  				tip:""
  			},{
  				id:"52",
  				salePrice:118,
  				label:"飞度/K2/伊兰特，免预约",
  				price:150,
  				history:33,
  				tip:""
  			},{
  				id:"52",
  				salePrice:118,
  				label:"飞度/K2/伊兰特，免预约",
  				price:150,
  				history:33,
  				tip:""
  			}]
  		},{
  			name:"红轮租车",
  			img:'../static/img/storeImg.png',
  			lat:110.319004,
  			id:"45",
  			lng:20.017087,
  			telNum:"18308949062",
  			posText:"美兰区海景路海岸金沙109号",
  			carList:[{
  				id:"52",
  				salePrice:150,
  				label:"皮卡，面包，SUV",
  				price:200,
  				history:33,
  				tip:"优惠50"
  			},{
  				id:"52",
  				salePrice:118,
  				label:"飞度/K2/伊兰特，免预约",
  				price:150,
  				history:33,
  				tip:""
  			},{
  				id:"52",
  				salePrice:118,
  				label:"飞度/K2/伊兰特，免预约",
  				price:150,
  				history:33,
  				tip:""
  			},{
  				id:"52",
  				salePrice:118,
  				label:"飞度/K2/伊兰特，免预约",
  				price:150,
  				history:33,
  				tip:""
  			}]
  		}],
  	}
  },
  methods:{
  	naviToStoreDetail(storeId){
  		this.$router.push({ path: `/storeDetail/${storeId}` })
  	},
  	naviToCreateRentCarOrder(carId){
  		this.$router.push({ path: `/createRentCarOrder/${carId}` })
  	}
  }
}
</script>
<style scoped>
@import "../assets/css/common.css";
.storeList{
	background-color: #e6e6e6;
}
.storeItem{
	padding: 0 30px;
	background-color: white;
	margin-bottom: 40px;
	& .storeInfo{
		display: flex;
		padding: 40px 0;
		border-bottom: 2px solid #e6e6e6;
		& .storeImg{
			height: 100px;
			width: 100px;
			margin-right: 40px;
			& img{
				width: 100%;
				height: 100%;
			}
		}
		& .content{
			flex: 1;
			& .distance{
				font-size: 26px;
				color: var(--grey9);
			}
			& .posText{
				margin-top: 15px;
				font-size: 30px;
				color: var(--grey6);
			}
		}
		& .tel{
			width: 54px;
			height: 54px;
			& img{
				width: 100%;
				height: 100%;
			}
		}
	}
	& .carItem{
		padding: 30px 0;
		border-bottom: 2px solid #e6e6e6;
		display: flex;
		align-items: center;
		& .prices{
			text-align: center;
			margin-right: 26px;
			& .salePrice{
				color: var(--baseGreen);
				font-weight: bold;
			}
			& .price{
				font-size: 20px;
				color: var(--grey9);
				margin-top: 8px;
			}

		}
		& .detail{
			& .detailType{
				display: flex;
				align-items: center;
				& .tip{
					background-image: url("../assets/img/sale.png");
					background-size: cover;
					font-size: 24px;
					color: white;
					height: 35px;
					line-height: 35px;
					padding: 0 21px 0 15px;
					margin-left: 48px;
				}
			}
			
			& .history{
				font-size: 24px;
				color: var(--grey9);
				margin-top: 12px;

			}
		}
	}
	& .showAllBtn{
		display: inline-flex;
		align-items: center;
		font-size: 30px;
		color: var(--baseGreen);
		line-height: 81px;
		& img{
			width: 15px;
			height: 9px;
			margin-left: 11px;
		}
	}
}

</style>