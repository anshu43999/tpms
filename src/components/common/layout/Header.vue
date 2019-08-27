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


	    	<div class="mphoto">
			</div>

			<el-dropdown >
				<span class="el-dropdown-link">
					admin<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>黄金糕</el-dropdown-item>
					<el-dropdown-item>狮子头</el-dropdown-item>
					<el-dropdown-item>螺蛳粉</el-dropdown-item>
					<el-dropdown-item disabled>双皮奶</el-dropdown-item>
					<el-dropdown-item divided>蚵仔煎</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
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




