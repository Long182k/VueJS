var app = new Vue({
	el:'#app',
	data: {
		message: 'Start message'
		},
	method : {
		changeMessage: function () {
			this.message='The message has changed!'
		}
	}
	})

 