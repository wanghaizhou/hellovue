<template>
    <section>
    <div class = 'score'  v-bind:style="{ display: errorinfo!=null?'none':'true' }">
        得分页面
        恭喜你，你的当前得分：
        一共{{questionnum}}道题目，你答对了{{rightNum}}道
        {{info}}

         <router-link to="/">继续答题</router-link>
    </div>
    <div class = 'info' v-bind:style="{ display: errorinfo!=null?'true':'none'}">
        异常！！！{{errorinfo}}
    </div>
    </section>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name:'score',
    data(){
        return {questionnum:null,rightNum:null,info:null,errorinfo:null}
    },
    computed:{
        ...mapState(['selecttype','questions','answerlog',]),
    },
    methods:{

        initsocre(){
            this.errorinfo=null
            if(this.answerlog.length<=0){
                this.errorinfo='你还没开始答题，请回到主页答题'
                return;
            }

            // var contents = this.questions[this.selecttype-1].content
            console.log('contents1:'+JSON.stringify(this.questions))
            console.log('contents2:'+this.selecttype)
            var contents = this.questions[this.selecttype-1].content
            console.log('contents:'+contents)
            var i = 0;
            var rightnum = 0;
            contents.forEach(element => {
                if(element.rightanswer==this.answerlog[i]){
                    rightnum++;
                }
                i++;
            });
            this.rightNum= rightnum
            this.questionnum = i
            if(this.rightNum==0){
                this.info='你的智商有待修复'
            }else if(this.rightNum==1){
                this.info='继续加油'
            }else{
                this.info='你是最厉害的'
            }
        },
    },
    created(){
        this.initsocre()
    }
}
</script>
