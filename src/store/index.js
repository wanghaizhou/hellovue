import Vue from 'vue'
import Vuex from 'vuex'
import data from '@/res/question'

Vue.use(Vuex)

var state = {
    questionindex:0,
    score:0,
    isended:false,
    selecttype:0,
    questions:data,
    answerlog:[],
}


export default new Vuex.Store({
    state,
    mutations: {
        increment (state) {
          state.count++
        },
        choosequestiontype (state,num) {
            state.selecttype=num
        },
        chooseanswer (state,index){
            state.answerlog.push(index)
        },
        restart(){
            state.answerlog=[]
            state.selecttype=0
            state.score=0
            state.questionindex=0
        }
    }
})