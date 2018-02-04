<template>
    <div ref="wrapper">
      <slot></slot>
    </div>
</template>
<script>
  import BScroll from "better-scroll";
  export default {
    props:{
      data:{
        type:Array,
        default:null
      },
      listenScroll:{
        type:Boolean,
        default:false
      },
      probeType:{
        type:Number,
        default:1
      },
      list:{
      	type:Array,
        default:null
      }
    },
    mounted(){
    	    	console.dir(this)
      setTimeout(()=>{
        this._initScroll();
      },20)
    },
    methods:{
      _initScroll(){
        this.scroll = new BScroll(this.$refs.wrapper,{
          probeType:this.probeType,
          click:true
        });
        if(this.listenScroll){
          this.scroll.on('scroll',(pos)=>{
            this.$emit('scroll',pos)
          })
        }
      },
      refresh(){
        this.scroll&&this.scroll.refresh();
      },
      scrollToElement(){
        this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)
      },
      scrollTo(){
        this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)
      }
    },
    watch:{
      data(){
        setTimeout(()=>{
            this.refresh();
        },20)
      },
      list(){
      	//通过数据的改变，让其滚动到顶部
      	setTimeout(()=>{
          
          this.refresh();
        },20)
      	
      }
    }
  }
</script>
<style>

</style>
