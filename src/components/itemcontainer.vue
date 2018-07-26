<template>

<section>
    <div v-if="fatherComponent == 'home'">
        <button @click="beginanswer1">程序题</button>
        <button @click="beginanswer2">智商题</button>
    </div>
    <div v-else-if="fatherComponent == 'item'">
        <span>第{{itemnum}}题</span>
        <span>选择题目类型{{selecttype}}啊</span>

<div id="test1">
    {{tpquestions.title}}
  <ol id ='olli'>
    <li v-for="(item,key,index) in tpquestions.answer" @click="choosecuranswer(item.answerindex)"  >
        <span class="option_style" v-bind:class="{'has_choosed':currentanswer==(key+1)}">{{chooseType(key+1)}}     </span>
        <span>{{ item.answertitle }}  </span>
    </li>
  </ol>

  当前答案：
{{currentanswer}}

已选择答案：
{{answerlog}}

题目长度
{{tpquestion.length}}

<span class="next_item button_style" @click="nextItem" v-if="itemnum < tpquestion.length">下一题</span>  
<span class="submit_item button_style" v-else @click="submitAnswer">提交</span>
</div>    

    </div>
    <div v-else-if="fatherComponent == 'score'">
        
    </div>
    <div v-else>
        都不是{{fatherComponent}}啊
    </div>
    <div class = 'score'>
        fatherComponent:{{fatherComponent}}
    </div>
</section>
    
</template>

<script>
import store from '@/store'
import {mapState,mapMutations} from 'vuex'

export default {
    name:'itemcontainer',
    data(){
        return {count:1,itemnum:1,currentanswer:0}
    },
    props:['fatherComponent'],
    // computed:mapState(['selecttype']),
    computed:{
        ...mapState(['selecttype','questions','answerlog']),
        tpquestions:function(){
            console.log('aa1'+this.questions[this.selecttype])
            return this.questions[this.selecttype-1].content[this.itemnum-1].question
        },
        tpquestion:function(){
            console.log('aa1'+this.questions[this.selecttype])
            return this.questions[this.selecttype-1].content
        },
    },
    
    created(){
        console.log('创建')
    },methods:{
        ...mapMutations(['choosequestiontype','chooseanswer']),
        // choosequestiontype:function(num){
        //     store.commit('choosequestiontype',num)
        // },
        nextItem:function(){
            this.chooseanswer(this.currentanswer)
            this.itemnum++
        },
        choosecuranswer:function(answer){
            console.log(answer)
            console.log(this)
            this.currentanswer=answer
        },
        chooseType(type) {
            console.log('选择'+type)
            switch(type){
                case 1:return 'A'
                case 2:return 'B'
                case 3:return 'C'
                case 4:return 'D'
            }
        },
        submitAnswer(){
            this.chooseanswer(this.currentanswer)
            this.$router.push('score')
        },
        
        beginanswer1:function(){
            console.log('开始答程序题')
            console.log(this.questions)
            console.log(this.$route.params)
            this.choosequestiontype(1)
            this.$router.push('item')
            console.log('aaa'+JSON.stringify(this.questions[this.selecttype].content[this.itemnum].question.answer))
        },
        beginanswer2:function(){
            console.log('开始答智商题')
            console.log(this.$route.params)
            this.choosequestiontype(2)
            this.$router.push('item')
        }
    }
}
</script>


<style>

ol{list-style-type:demical;width:200px;}
   ol li{ list-style-position:outside;}
.has_choosed{
color:red;
font-style:italic;

font-weight:bold;

font-size:30px;

line-height:30px;

font-family:"SimHei";

}
</style>