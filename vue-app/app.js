// 实例化Vue的对象
new Vue({
		el: "#vue-app", // 设置需要控制的容器
		data: {					// 设置需要传递的数据
			name: "Hemiah",
			age: 28
		},
		methods: {      // 设置需要传递的方法
			logName: function(){
				console.log("you entered your name!");
			},
			logAge: function(){
				console.log("you entered your age!");
			}
		}
});
