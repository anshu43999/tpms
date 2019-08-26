<template>
	<div class="header" style="background: url(static/images/index/top_1.png) no-repeat ;background-size:cover;">
	    <div class="logo">
	    	  <img src="static/images/index/logo.png" alt="" />
			  <p>山西省接处警信息统计分析系统</p>
	    </div>
	    <div class="headerR">
	    	<div class="warnWrap">
				<i class="iconfont icon-xiaoxi "></i>		
	    	</div>
	    	<!-- <img class="line" src="static/images/sys/lineH.png" alt="" /> -->
	    	<div class="user">
	    		<!-- {{userName?userName:"未登录"}} -->
	    	</div>
	    	<div class="mphoto">
				<!-- <img src="static/images/test/photo_001.png" alt="" /> -->
			</div>
	    </div>
	</div>
</template>
<script>
require("../../../assets/style/index/index.css")
import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default {
    name : "Header",
	computed:{
		// ...mapState([]),
		// ...mapGetters(["libraryId","libraryName","userName","roleName"]),
  	},
  	methods:{
  		// ...mapMutations(['logout']),
  		// ...mapActions([]),
  		loginout(){
  			this.$router.push({ path: '/login'});
  			this.logout()
  		},
  	},
	data(){
		return {

		}
	}
}
</script>




