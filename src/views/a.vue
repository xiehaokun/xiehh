<template>
   <div class="div">
      <li v-for="(item,index) in list" :key="index" >
         <h1>
          {{item.name}}  
         </h1>
         <p> 
            {{item.title}}
         </p>
         <h5>
            {{item.b}}
         </h5>
         <button>申请</button>
      </li>
    
   </div>
</template>

<script>
import axios from "axios"
export default {
   data(){
    return{
       list:[]
    }
   },
   comments:{

   },
   methods: {
     
   },
   mounted() {
     axios.get("/getdata").then(r=>{
        console.log(r.data)
        this.list=r.data
     })
   },    
}

</script>


<style lang="scss">
li{
   width:100%;
   height:150px;
   border:1px solid black;
   margin-top:10px;
}

button{
  width:50px;
  height:40px;
  background:red;
  color:white;
}
</style>
