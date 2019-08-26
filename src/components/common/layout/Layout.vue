<template>
	<el-container id="father" class="Sinograinrelative" style="min-height: 100%;" :class="{ overflow: overflow }">
		<el-header>
			<Tpms-header></Tpms-header>
		</el-header>
		<el-container>
			<Tpms-sidebar></Tpms-sidebar>
			<el-main class="Sinograinrelative" style="min-height: 100%;">
				
					<router-view></router-view>
				<!--</transition>-->
			</el-main>
		</el-container>
		<iframe id="fordownload" style="display:none"></iframe>
		<iframe id="fordownload2" style="display:none"></iframe>
		<!-- <audio  id="auto" src="static/media/media.mp3" style="display:none"></audio> -->
		
      	<!--<div>{{viewdata}}</div>-->
	</el-container>
</template>

<script>
	import TpmsHeader from '@/components/common/layout/Header.vue'
	import TpmsSidebar from '@/components/common/layout/Aside.vue'
	// import SinograinHome from '@/components/home/Home.vue'
//	require('eventsource-polyfill')
	import EventSource from 'eventsource'
	
	// import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';
//	import "@/assets/style/common/animate.css"
	
	export default {
        name : "Layout",
		components: {
			TpmsHeader,
			TpmsSidebar,
			// SinograinHome,
		},
		computed:{

		},
		created(){
//			this.sse();
//			this.WebSocket();
		},
		//防止首页变形
		beforeRouteEnter(to, from, next) {
		    next(vm => {
	    		vm.overflow=true
	    	})
		}, 
		beforeRouteUpdate (to, from, next) {
//	    	console.log('n')
//	    	console.log(to.name)
	    	if(to.name=='首页'){
	    		this.overflow=true
	    	}else{
	    		this.overflow=false
	    	}
		    next()
		},
		methods:{
			WebSocket(){
				if ("WebSocket" in window){
	               alert("您的浏览器支持 WebSocket!");
	               // 打开一个 web socket
	               var ws = new WebSocket(this.msgURL);
	               ws.onopen = function(){
	                  // Web Socket 已连接上，使用 send() 方法发送数据
	                  ws.send("发送数据");
	                  alert("数据发送中...");
	               };
	               ws.onmessage = function (evt){ 
	                  var received_msg = evt.data;
	                  alert("数据已接收...");
	               };
	               ws.onclose = function(){ 
	                  // 关闭 websocket
	                  alert("连接已关闭..."); 
	               };
	            }else{
	               // 浏览器不支持 WebSocket
	               alert("您的浏览器不支持 WebSocket!");
	            }
			}
		},
		data(){
			return {
				overflow:false,
			}
		}
	}
</script>

<style>

.Sinograinrelative{
	position:relative;
}
.Sinograinrelative.overflow{
	max-height:100%;
	overflow: hidden;
}
.router-transition-enter-active {
  	/*transition: all 1.5s ease;*/
  	transition: all 0.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.router-transition-leave-active {
  	/*transition: all 0.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
  	transition: all 0s;
}
.router-transition-enter{
  	transform: translateX(10px);
  	opacity: 0;
}
.router-transition-leave-to{
  	/*transform: translateX(10px);*/
  	opacity: 0;
}
.el-popper[x-placement^=bottom] .popper__arrow{
	left: 20px!important;
}
.el-popper[x-placement^=top] .popper__arrow{
	left: 20px!important;
}
</style>