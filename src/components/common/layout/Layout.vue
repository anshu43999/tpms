<template>
	<div style="height: 100%">
<!--		登录-->
		<Login :login-show="ls" @close="close"></Login>

		<el-container id="father" class="Sinograinrelative" style="height: 100%" :class="{ overflow: overflow }">
			<el-header>
				<Tpms-header></Tpms-header>
			</el-header>
			<el-container style="max-height:100%; overflow : hidden" >
				<Tpms-sidebar  ></Tpms-sidebar>
				<el-main class="Sinograinrelative" style="min-height:100%;padding: .25rem .25rem 0 .25rem;    ">
					<router-view></router-view>
					<!--</transition>-->
				</el-main>
			</el-container>
			<iframe id="fordownload" style="display:none"></iframe>
			<iframe id="fordownload2" style="display:none"></iframe>
			<!-- <audio  id="auto" src="static/media/media.mp3" style="display:none"></audio> -->

			<!--<div>{{viewdata}}</div>-->
		</el-container>

<!--		接警详情-->
		<ReceiveDetail :receiveDetailShow="RDS" @close="close"></ReceiveDetail>
	</div>


</template>

<script>
	import TpmsHeader from '@/components/common/layout/Header.vue'
	import TpmsSidebar from '@/components/common/layout/Aside.vue'
	// import SinograinHome from '@/components/home/Home.vue'
	//	require('eventsource-polyfill')
	import EventSource from 'eventsource'

	// import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';
	//	import "@/assets/style/common/animate.css"

	import Login from "./Login";
	import ReceiveDetail from "./ReceiveDetail";
	export default {
		name : "Layout",
		components: {
			TpmsHeader,
			TpmsSidebar,
			// SinograinHome,
			Login,
			ReceiveDetail
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
				this.overflow=true
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
			},

			//关闭弹窗
			close(data){
				// data是传过来的页面的名字
				switch (data) {
						//receiveDetail是接警单详情
					case 'receiveDetail':this.RDS=false;break;
						//login是登录页
					case 'login':this.ls=false;break;

				}
			}
		},
		data(){
			return {
				overflow:false,
				//接警单显示隐藏
				RDS:false,
				//登录显示隐藏
				ls:false
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


	.wrap_list_one{
		width: 100%;
	}

	.el-table .el-table__header{
		width: 100% !important;
	}
	.el-table .el-table__body{
		width: 100% !important;
	}
	
body .el-table th.gutter{
    display: table-cell!important;
}
</style>