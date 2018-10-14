<template>
  <div class="bindCreditCard">
  	<div class="mainContent">
  		<div class="tip">请绑定持卡人本人的信用卡</div>
  		<div>
  			<span>持卡人</span>
  			<span>张*奇</span>
  		</div>
  		<group>
		    <selector  ref="defaultValueRef" title="银行" placeholder="选择银行" :options="list" v-model="bankType"></selector>
    		<x-input title="卡号"  placeholder="输入卡号" type="number" v-model="cardNum"></x-input>
    	</group>
  	</div>
  	<div class="nextStep" :class="cardNum&&bankType?'nextStepEnable':'nextStepdisable'" @click="naviToSelctPayType">
  		下一步
  	</div>
  </div>
</template>

<script>
import { Selector, Group , XInput } from 'vux'
export default {
  name: 'bindCreditCard',
  components: {
    Group,
    Selector,
    XInput,
  },
  data(){
  	return {
  		cardNum:"",
  		bankType:"",
  		list: [{key: 'zs', value: '招商银行'}, {key: 'zg', value: '中国银行'}],
  	}
  },
  methods:{
  	naviToSelctPayType(){
  		this.$router.push({ path: `/submitPersonalInfo/selectPayType`});
  	}
  }
}
</script>
<style>
@import "../../assets/css/common.css";
.mainContent{
	padding: 110px 60px;
	& .tip{
		color: #b3b3b3;
		font-size: 24px;
	}
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