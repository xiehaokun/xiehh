let data=require("./src/mock/data.json")

module.exports=({
    devServer:{
        before(app){
            app.get("/getdata",(req,res)=>{
                res.send(data)
            })

        }
    }
})