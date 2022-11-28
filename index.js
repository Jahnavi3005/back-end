const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const Register=require("./registerSchema.js")
const mongoose=require("mongoose")
const port=4221;

console.log(Register)

app.use(bodyParser.urlencoded({
	extended:true

}))

mongoose.connect("mongodb+srv://jahnavi:jahnavi30@cluster0.znpzvoa.mongodb.net/firstdb?retryWrites=true&w=majority")
.then(()=>{
	console.log("Created mongodb database")
})

app.use(bodyParser.json())
 
app.use(cors())

app.get("/",(req,res)=>{

})

app.post("/register",(req,res)=>{
	//const {username,password}=req.body
	const username="dummyuser",password="dummypassword"
	const newUser=new Register({
		username:username,
		password:password
	})
	newUser.save()
})

app.listen(port,()=>console.log("Server is started"))