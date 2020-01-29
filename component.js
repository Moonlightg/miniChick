// 组件
// 默认衣服
Vue.component('clothes-default', {
	template: `<div></div>`
});
// 默认帽子
Vue.component('hat-default', {
	template: `<div></div>`
});
// 青蛙衣服
Vue.component('clothes-forg', {
	template: `
		<div class="jacket-frog">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	`
});
// 青蛙帽子
Vue.component('hat-forg', {
	template: `
		<div class="hat-frog">
			<span class="hat-frog-eye el"></span>
			<span class="hat-frog-eye er"></span>
			<span class="sun-cured"></span>
		</div>
	`
});

// 太阳光
Vue.component('c-sunlight', {
	template: `
		<div class="sunlight" title="太阳光">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	`
});

// 山峰-风车
Vue.component('c-peak', {
	template: `
		<div class="peak-box" title="山峰风车">
			<div class="peak-1"></div>
			<div class="peak-2"></div>
			<div class="peak-3"></div>
			<div class="peak-4"></div>
			<div class="peak-5"></div>
			<div class="peak-6"></div>
			<div class="peak-7">
				<div class="peak-7-1"></div>
				<div class="peak-7-2"></div>
			</div>
			<div class="peak-8"></div>
			<div class="peak-9"></div>
			<div class="windmill">
				<div class="windmill-1"></div>
				<div class="windmill-2"></div>
				<div class="windmill-3"></div>
				<div class="windmill-4"></div>
				<div class="windmill-5">
					<div class="windmill-5-1"></div>
					<div class="windmill-5-2"></div>
				</div>
			</div>
		</div>
	`
});

// 白云
Vue.component('c-clouds', {
	template: `
		<div class="clouds" title="白云">
		  	<div class="cloud x1"></div>
		  	<div class="cloud x2"></div>
		  	<div class="cloud x3"></div>
		</div> 
	`
});

// 鸡饭碗
Vue.component('c-trough', {
	props: ['troughTitle'],
	template: `
		<div class="trough" title="鸡饭碗">
			<span></span>
			<span></span>
			<div class="fodder"></div>
			<div class="trough-l">
				<p></p>
				<p></p>
				<p></p>
			</div>
		</div>
	`
});

// 叶子
Vue.component('c-leaf', {
	template: `
		<div class="leaf-box" title="叶子">
			<div class="leaf-item leaf-1"></div>
			<div class="leaf-item leaf-2"></div>
			<div class="leaf-item leaf-3"></div>
			<div class="leaf-item leaf-4"></div>
		</div>
	`
});

// 蜜蜂鲜花
Vue.component('c-bee', {
	template: `
		<div class="bee-box" title="蜜蜂鲜花">
			<div class="soil two"></div>
			<div class="soil"></div>
			<div class="flowerpot">
				<div class="flowerpot-top"></div>
				<div class="flowerpot-bottom"></div>
			</div>
			<div class="flower">
				<div class="flower-top">
					<p></p>
					<p></p>
					<p></p>
					<p></p>
				</div>
				<div class="flower-head"></div>
			</div>
			<div class="bee">
				<div class="bee-body"></div>
			</div>
			<div class="bee bee-2">
				<div class="bee-body"></div>
			</div>
			<div class="triangle-box two">
				<div class="item"></div>
				<div class="item"></div>
				<div class="item"></div>
			</div>
		</div>
	`
});

// 鸡蛋
Vue.component('c-egg', {
	props: ['eggprogress','eggnum'],
	methods: {
		// 弹出收成
	    popAdd (addEggExps) {
	    	let self = this;
	      	let popDom = document.createElement('div');// 创建dom
	      	popDom.classList.add('pop-money');// 给dom添加class
	      	popDom.innerHTML = "+"+addEggExps;
	      	self.$refs.eggexp.appendChild(popDom);// 在ref="eggexp"元素内添加dom
	      	setTimeout(() => {
	        	popDom.remove()
	      	}, 500)
	    },
	    harvestEgg() {
	    	let self = this;
	    	let eggNum = self.$store.state.chick.egg.num;
	    	let eggPrice = self.$store.state.chick.egg.price;
	    	console.log("可收获的鸡蛋："+self.$store.state.chick.egg.num);
	    	if (eggNum > 0) {
	    		var obj = {
	    			name: '精美鸡蛋',
	    			num: eggNum,
	    			price: eggPrice,
	    			img: 'images/egg.png',
	    		}
	    		self.$store.dispatch('harvestegg',obj);
	    		self.popAdd(eggNum+"鸡蛋");
	    	}
	    }
	},
	template: `
		<div class="egg-wrapper" title="鸡蛋" ref="eggexp">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<div class="egg infinite" @click="harvestEgg">
				<div class="heart">
					<div class="egg-num" v-if="eggnum != 0">{{eggnum}}</div>	
				</div>
			</div>
			<div class="egg-progress-wrap">	
				<p>{{eggprogress}}%</p>
				<div class="egg-progress">
					<div class="egg-progress-item" :style="'width:' + eggprogress + '%' "></div>
				</div>
			</div>
		</div>
	`
});

// 草地
Vue.component('c-grass', {
	template: `
		<div class="grass-1" title="草">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<div class="triangle-box">
				<div class="item"></div> 
				<div class="item"></div> 
				<div class="item"></div> 
				<div class="item"></div>
			</div>
		</div>
	`
});

// 房子
Vue.component('c-house', {
	template: `
		<div class="house" title="房子">
			<div class="house-1"></div>
			<div class="house-2-1"></div>
			<div class="house-2-2"></div>
			<div class="house-2"></div>
			<div class="house-3-1"></div>
			<div class="house-3-2"></div>
			<div class="house-3"></div>
			<div class="house-4"></div>
			<div class="house-5"></div>
			<div class="house-6"></div>
			<div class="house-7"></div>
			<div class="house-8"></div>
			<div class="house-9"></div>
		</div>
	`
});

// 护栏
Vue.component('c-fence', {
	template: `
		<div class="fence" title="护栏">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	`
});

// 做题组件
Vue.component('c-subject', {
	props: ['showSubject'],
	template: `
		<div class="subject-wrap">
			<div class="subject-head" @click="hideSubject">返回</div>
			<span>做题组件</span>
		</div>
	`
});

