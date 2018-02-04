<template>
  <div id="app">
    <router-view/>
    <bottom-tab></bottom-tab>
  </div>
</template>

<script>
import BottomTab from '@/components/bottom-tab/bottom-tab'

	
export default {
  name: 'App',
  components:{
  	BottomTab
  }
}
</script>

<style>
	html,body{
		margin: 0;
		padding: 0;
	}
	ul{
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>
