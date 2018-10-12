<template>
	<div class="storeDetail">
		<div class="main">
		  	<div class="storeInfo" >
				<div class="storeImg"><img :src="detailInfo.img"></div>
				<div class="content">
					<div>
						<span class="">{{detailInfo.posText}}</span>
					</div>
					<div class="posText">
						<span class="distance">距您6.4km</span>
					</div>
				</div>
				<div class="loc"><img src="../assets/img/i-loc.png"></div>
			</div>
			<div class="carList" >
				<div class="carItem" v-for="(item,index) in detailInfo.carList" @click="naviToCreateRentCarOrder(item.id)">
					<div class="prices">
						<div class="salePrice">¥{{item.salePrice}}</div>
						<div class="price">门市价¥{{item.price}}</div>
					</div>
					<div class="detail">
						<div class="detailType">
							<span class="label">{{item.label}}</span>
							<span v-if="item.tip.length>0" class="tip">{{item.tip}}</span>
						</div>
						<div class="history">已租{{item.history}}</div>
					</div>
				</div>
			</div>
	</div>
  
	<div class="contact">
		联系车主
	</div>
  </div>
</template>

<script>
export default {
  name: 'storeDetail',
  data(){
  	return{
  		detailInfo:{
  			name:"红轮租车",
  			id:"31",
  			img:'../static/img/storeImg.png',
  			lat:110.319004,
  			lng:20.017087,
  			telNum:"18308949062",
  			posText:"美兰区海景路海岸金沙109号",
  			carList:[{
  				id:"32",
  				salePrice:150,
  				label:"皮卡，面包，SUV",
  				price:200,
  				history:33,
  				tip:"优惠50"
  			},{
  				id:"33",
  				salePrice:118,
  				label:"飞度/K2/伊兰特，免预约",
  				price:150,
  				history:33,
  				tip:""
  			},{
  				id:"34",
  				salePrice:118,
  				label:"飞度/K2/伊兰特，免预约",
  				price:150,
  				history:33,
  				tip:""
  			},{
  				id:"35",
  				salePrice:118,
  				label:"飞度/K2/伊兰特，免预约",
  				price:150,
  				history:33,
  				tip:""
  			}]
  		},
  	}
  },
  methods:{
  	naviToCreateRentCarOrder(carId){
  		this.$router.push({ path: `/createRentCarOrder/${carId}` })
  	}
  }
}
</script>
<style scoped>
@import "../assets/css/common.css";
.main{
	& .storeInfo{
		display: flex;
		padding: 40px 30px;
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
		& .loc{
			width: 32px;
			height: 38px;
			& img{
				width: 100%;
				height: 100%;
			}
		}
	}
	& .carList{
		border-top: 20px solid #e6e6e6;
		padding: 0 30px 98px 30px;
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
	}
	
}
.contact {
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 98px;
	line-height: 98px;
	text-align: center;
	color: white;
	background: linear-gradient(to right,#abda58, #589f96);
	font-size: 40px;
}
</style>