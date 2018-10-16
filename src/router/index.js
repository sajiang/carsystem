import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import findCar from '@/components/findCar'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'index',
			component: index,
			redirect: '/findCar',
			children:[{
				path: '/findCar',
			  	name: 'findCar',
			  	component: findCar,
			},{
				path: '/storeList',
			  	name: 'storeList',
			  	component: resolve => require(['@/components/storeList'], resolve),
			},{
				path: '/tourism',
			  	name: 'tourism',
			  	component: resolve => require(['@/components/tourism'], resolve),
			}]
		},
		//店铺详情
		{ path: '/storeDetail/:id', component: resolve => require(['@/components/storeDetail'], resolve) },
		//创建租车订单
		{ path: '/createRentCarOrder/:carId', component: resolve => require(['@/components/createRentCarOrder'], resolve) },
		//上传身份证
		{ path: '/submitPersonalInfo/submitIdCard', component: resolve => require(['@/components/submitPersonalInfo/submitIdCard'], resolve) },
		//上传驾驶证
		{ path: '/submitPersonalInfo/submitDrivingLicense', component: resolve => require(['@/components/submitPersonalInfo/submitDrivingLicense'], resolve) },
		//人脸识别
		{ path: '/submitPersonalInfo/submitFaceRecognition', component: resolve => require(['@/components/submitPersonalInfo/submitFaceRecognition'], resolve) },
		//绑定信用卡
		{ path: '/submitPersonalInfo/bindCreditCard', component: resolve => require(['@/components/submitPersonalInfo/bindCreditCard'], resolve) },
		//选择支付方式
		{ path: '/submitPersonalInfo/selectPayType', component: resolve => require(['@/components/submitPersonalInfo/selectPayType'], resolve) },
		//绑定支付宝
		{ path: '/submitPersonalInfo/bindAliPay', component: resolve => require(['@/components/submitPersonalInfo/bindAliPay'], resolve) },
		//设置支付密码
		{ path: '/submitPersonalInfo/setPayPassword', component: resolve => require(['@/components/submitPersonalInfo/setPayPassword'], resolve) },
		//绑定手机号
		{ path: '/submitPersonalInfo/bindPhone', component: resolve => require(['@/components/submitPersonalInfo/bindPhone'], resolve) },
		//输入验证码
		{ path: '/submitPersonalInfo/inputIdentifyCode', component: resolve => require(['@/components/submitPersonalInfo/inputIdentifyCode'], resolve) },
		//个人中心首页
		{ path: '/personalCenter/index', component: resolve => require(['@/components/personalCenter/index'], resolve) },	
		//订单列表
		{ path: '/personalCenter/orderList', component: resolve => require(['@/components/personalCenter/orderList'], resolve) },	
		//控车
		{ path: '/controlCar/:carId', component: resolve => require(['@/components/controlCar'], resolve) },	
		//还车1
		{ path: '/returnCarStep1/:carId', component: resolve => require(['@/components/returnCarStep1'], resolve) },	
		//还车2
		{ path: '/returnCarStep2/:carId', component: resolve => require(['@/components/returnCarStep2'], resolve) },	

	]
})