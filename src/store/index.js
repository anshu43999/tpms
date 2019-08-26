import Vue from "vue";
import Vuex from "vuex"


Vue.use(Vuex)

const state = {
    breadcrumbHistory:[],
}

const mutations= {
    // 权限
    slideToggle(state){
        state.isCollapse=!state.isCollapse; 
    //  	mutations.route_click(state);
    },
    route_click(state){
        var current=mutations.find_current_modal(state)
        if(current){
            current.show=!current.show;
            state.mask=false;
            var payload={id:current.id,type:current.type,title:current.title}
            mutations.hid_modal(state,payload)
        }
    },
    find_current_modal(state){

    },
    create_modal_id(state){
        state.modal_id_number+=1;
    },

    // 面包屑
    pushBreadcrumbHistory(state,payload){
    //		payload栗子{name:'',fullPath:''}
        state.breadcrumbHistory.push(payload)
        sessionStorage.setItem('breadcrumbHistory', JSON.stringify(state.breadcrumbHistory));
    },
    spliceBreadcrumbHistory(state,payload){
        var startIndex=state.breadcrumbHistory.findIndex((item)=>{
            return item.fullPath==payload.fullPath
        });
        if(startIndex>-1){			
            state.breadcrumbHistory.splice(startIndex+1,state.breadcrumbHistory.length)
        }
        sessionStorage.setItem('breadcrumbHistory', JSON.stringify(state.breadcrumbHistory));
    },
    statBreadcrumbHistory(state){
        state.breadcrumbHistory=[];
        sessionStorage.setItem('breadcrumbHistory', JSON.stringify(state.breadcrumbHistory));
    },

}
const actions ={
    addAction(context){
        context.commit('create_modal_id')
    },
}

const getters ={
    // 面包屑
    breadcrumbHistory:function(state){
    	if(state.breadcrumbHistory.length){
    		return state.breadcrumbHistory;    		
    	}else{
    		return state.breadcrumbHistory=JSON.parse(sessionStorage.getItem("breadcrumbHistory"));
    	}
    },
}








export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
})