<template>


	<el-menu unique-opened :default-active="activePath" class="el-menu-vertical-demo" :router=true @open="handleOpen" @select="handleSelect" @close="handleClose" :collapse="this.isCollapse" >
		

		<el-menu-item index="/index/home">


			<i class="iconfont icon-shouye firstlevel"></i>
			<span slot="title">首页</span>
		</el-menu-item>

		<template v-for="item in navlist" v-if="item.pid==0">
			<el-submenu :index="item.lid.toString()">

				<template slot="title">
					<div class="rightborder"></div>
					<div class="rightarrow"></div>
					<i class="iconfont firstlevel" :class="item.icon"></i>

					<el-badge slot="title" v-if="item.badge" :value="item.badge" class="navbadge">
						<span>{{item.title}}</span>
					</el-badge>
					<span v-else slot="title">{{item.title}}</span>
				</template>

				<template v-if="item.level==3">
					<template v-for="item2 in navlist" v-if="item2.pid==item.lid">

						<el-submenu :index="item2.lid.toString()">
							<template slot="title">
								<i class="iconfont secondlevel" :class="item2.icon"></i>

								<el-badge slot="title" v-if="item2.badge" :value="item2.badge" class="navbadge">
									<span>{{item2.title}}</span>
								</el-badge>
								<span v-else slot="title">{{item2.title}}</span>
							</template>

							<template v-for="item3 in navlist" v-if="item3.pid==item2.lid">
								<el-menu-item :index="item3.linkto">

									<div class="leftline"></div>
									<i class="iconfont thirdlevel" :class="item3.icon"></i>

									<el-badge slot="title" v-if="item3.badge" :value="item3.badge" class="navbadge">
										<span>{{item3.title}}</span>
									</el-badge>
									<span v-else slot="title">{{item3.title}}</span>
								</el-menu-item>
							</template>

						</el-submenu>

					</template>
				</template>

				<template v-if="item.level==2">
					<template v-for="item4 in navlist" v-if="item4.pid==item.lid">
						<el-menu-item :index="item4.linkto">

							<i class="iconfont secondlevel" :class="item4.icon"></i>

							<el-badge slot="title" v-if="item4.badge" :value="item4.badge" class="navbadge">
								<span>{{item4.title}}</span>
							</el-badge>
							<span class='positiontitle' v-else-if='item4.wrap' slot="title">{{item4.title}}</span>
							<span v-else slot="title">{{item4.title}}</span>
						</el-menu-item>
					</template>

				</template>

			</el-submenu>
		</template>

	</el-menu>
</template>
<script>
require("../../../assets/style/common/Sidebar.css");
// import '@/assets/style/common/Sidebar.css';
// import '@/assets/style/index/index.scss';
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name : 'Aside',
  components: {},
  computed: {
    ...mapState(["isCollapse"]),
    // ...mapGetters([
    //   "modal_id",
    //   "libraryId",
    //   "libraryName",
    //   "userName",
    //   "userAuth",
    //   "roleName"
    // ]),
    activePath() {
      var path = this.$route.path.split("/");
      var zpath = path[0];
      for (var i = 1; i <= 3; i++) {
        if (path[i]) {
          zpath += "/" + path[i];
        }
      }
      return zpath;
    }
  },
  mounted() {},
  data() {
    return {
      //			isCollapse: false,
      backgroundColor: "#dff0f9",
      user: {
        name: "12345号",
        avater: "static/images/test/photo_01.png",
        status: 1
      },
      navlist: [
        {
          icon: "icon-chaxun",
          title: "警情查询",
          linkto: "/index/AlarmQuery/Synthesis",
          level: 2,
          pid: 0,
          lid: 1
        },
     
        {
          icon: "icon-hetong",
          title: "综合单查询",
          linkto: "/index/AlarmQuery/Synthesis",
          level: 2,
          pid: 1,
          lid: 2
        },
        {
          icon: "icon-daishenhe",
          title: "接警单查询",
          linkto: "/index/AlarmQuery/Alarm",
          level: 2,
          pid: 1,
          lid: 3
        },
        {
          icon: 'icon-tongguos',
          title: '处警单查询',
          linkto: '/index/AlarmQuery/Dispose',
          level: 2,
          pid: 1,
          lid: 4
        },
        {
          icon: 'icon-tongguos',
          title: '反馈单查询',
          linkto: '/index/AlarmQuery/Feedback',
          level: 2,
          pid: 1,
          lid: 5
        },
        {
          icon: 'icon-tongguos',
          title: '抽取情况查询',
          linkto: '/index/AlarmQuery/ExtractQuery',
          level: 2,
          pid: 1,
          lid: 6
        },
        {
          icon: 'icon-tongguos',
          title: '不合格数据查询',
          linkto: '/index/AlarmQuery/NotQualified',
          level: 2,
          pid: 1,
          lid: 7
        },
		{
			icon: 'icon-jingqingtongji',
			title: '警情统计',
			linkto: '/index/AlarmStatistics/AlarmType',
			level: 2,
			pid: 0,
			lid: 8
		},

    {
      // icon: "icon-fankui",
      title: "接警处理类型统计",
      linkto: "/index/AlarmStatistics/AlarmType",
      level: 2,
      pid: 8,
      lid: 9
    },
    {
      // icon: "icon-fankui",
      title: "警种报警情况统计",
      linkto: "/index/AlarmStatistics/AlarmKind",
      level: 2,
      pid: 8,
      lid: 10
    },
    {
      // icon: "icon-fankui",
      title: "处警反馈情况统计表",
      linkto: "/index/AlarmStatistics/FeedbackForms",
      level: 2,
      pid: 8,
      lid: 11
    },
    {
      // icon: "icon-fankui",
      title: "数据抽取情况统计表",
      linkto: "/index/AlarmStatistics/ExtractForms",
      level: 2,
      pid: 8,
      lid: 12
    },
    {
      // icon: "icon-fankui",
      title: "警情三级分类统计",
      linkto: "/index/AlarmStatistics/ThreeType",
      level: 2,
      pid: 8,
      lid: 13
    },
    {
      // icon: "icon-fankui",
      title: "案发地址类别统计",
      linkto: "/index/AlarmStatistics/Address",
      level: 2,
      pid: 8,
      lid: 14
    },
    {
      // icon: "icon-fankui",
      title: "警情分布情况统计",
      linkto: "/index/AlarmStatistics/Distribute",
      level: 2,
      pid: 8,
      lid: 15
    },
    {
      icon: "icon-chouqujiankong",
      title: "抽取监控",
      linkto: "/index/ExtractMonitor/ExtractState",
      level: 2,
      pid: 0,
      lid: 16
    },
        {
          icon: "icon-tongji1",
          title: "抽取状态",
          linkto: "/index/ExtractMonitor/ExtractState",
          level: 2,
          pid: 16,
          lid: 17
        },
        {
          icon: "icon-tongji1",
          title: "当前抽取情况",
          linkto: "/index/ExtractMonitor/NowCondition",
          level: 2,
          pid: 16,
          lid: 18
        },
        {
          icon: "icon-tongji1",
          title: "各市数据汇总情况统计",
          linkto: "/index/ExtractMonitor/SumStatistics",
          level: 2,
          pid: 16,
          lid: 19
        },
        
  // {
  //   icon: "icon-tongjibaobiao",
  //   title: "统计报表",
  //   linkto: "/index/StatisticsForms/JQStatistics",
  //   level: 2,
  //   pid: 0,
  //   lid: 20,
  // },
  //   {
  //     icon: "icon-jiaoseguanli",
  //     title: "统计报表1",
  //     linkto: "/index/StatisticsForms/JQStatistics",
  //     level: 2,
  //     pid: 20,
  //     lid: 21
  //   },
  //   {
  //     icon: "icon-jiaoseguanli",
  //     title: "统计报表2",
  //     linkto: "/index/StatisticsForms/JQThread",
  //     level: 2,
  //     pid: 20,
  //     lid: 22
  //   },
  //   {
  //     icon: "icon-jiaoseguanli",
  //     title: "统计报表3",
  //     linkto: "/index/StatisticsForms/AlarmStatistics",
  //     level: 2,
  //     pid: 20,
  //     lid: 23
  //   },
  {
    icon: "icon-kaohe",
    title: "规范考核",
    linkto: "/index/standardAssess/dataSize",
    level: 2,
    pid: 0,
    lid: 20,
  },
    {
      icon: "",
      title: "数据质量考核",
      linkto: "/index/standardAssess/dataSize",
      level: 2,
      pid: 20,
      lid: 21
    },
    {
      icon: "",
      title: "考核情况统计",
      linkto: "/index/standardAssess/assessCase",
      level: 2,
      pid: 20,
      lid: 22
    },


  {
    icon: "icon-kaohe",
    title: "系统维护",
    linkto: "/index/systemMaintain/indexSet",
    level: 2,
    pid: 0,
    lid: 23,
  },
    {
      icon: "",
      title: "首页重大警情设置",
      linkto: "/index/systemMaintain/indexSet",
      level: 2,
      pid: 23,
      lid: 24
    },
    {
      icon: "",
      title: "数据考核条件设置",
      linkto: "/index/systemMaintain/dataAssess",
      level: 2,
      pid: 23,
      lid: 25
    },
    {
      icon: "",
      title: "用户权限管理",
      linkto: "/index/systemMaintain/userJurisdiction",
      level: 2,
      pid: 23,
      lid: 26
    },
    {
      icon: "",
      title: "用户维护",
      linkto: "/index/systemMaintain/userPreserve",
      level: 2,
      pid: 23,
      lid: 27
    },
    {
      icon: "",
      title: "单位维护",
      linkto: "/index/systemMaintain/unitsPreserve",
      level: 2,
      pid: 23,
      lid: 28
    },
   




       
        
      ]
    };
  },
  methods: {
    ...mapMutations(["slideToggle", "route_click"]),
    ...mapActions(["addAction"]),
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      			// console.log(key, keyPath);
      this.route_click();
    },
    tostr(num) {
      return num.toString();
    },
    show_messions() {
      this.mission_show = true;
    },
    hidden_messions() {
      this.mission_show = false;
    },
    slide() {
      this.mission_show = false;
      setTimeout(() => {
        this.slideToggle();
      }, 100);
    },
  }
};
</script>
