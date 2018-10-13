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
				path: '/personalCenter',
			  	name: 'personalCenter',
			  	component: resolve => require(['@/components/personalCenter'], resolve),
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
	]
})