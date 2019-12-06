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