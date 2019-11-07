<template>
   <div id="app">
       <div class="shang">
         <router-link to="">为您推荐</router-link>
         <router-link to="">高薪职位</router-link>
         <router-link to="">福利专区</router-link>
       </div>
       <div class="xia">
         <router-view></router-view>
       </div>
     
   </div>
</template>

<script>
export default {
   comments:{

   },
   methods: {
     
   },
   mounted() {
     
   },    
}

</script>


<style lang="scss">
#app{
    width:100%;
    height:100%;
    box-sizing: border-box;
  
}

.shang{
    width:100%;
    height:50px;
    border:1px solid black;
    display:flex;
    justify-content: space-around;
    align-items: center;
}

.xia{
    width:100%;
    height:450px;
    border:1px solid black;
}





</style>
