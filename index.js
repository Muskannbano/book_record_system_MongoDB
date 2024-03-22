// mongodb+srv://banomuskan235:h92TK6ShbfpP754b@cluster0.2puxehg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// mongodb+srv://banomuskan235:banomuskan235@cluster0.2puxehg.mongodb.net/
const express = require("express")
const {users} = require("./data/users.json")
const dotenv = require("dotenv")

//Database Connection
const DbConnection= require("./databaseConnection")

dotenv.config()
const userRouter = require("./routes/users")
const booksRouter = require("./routes/books")
const app = express()

DbConnection()

const PORT = 8081

app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Server is Up and Running"
    })
})

app.use("/users",userRouter)
app.use("/books",booksRouter)

app.get("*",(req,res)=>{
    res.status(200).json({
        message:"This route doesnot exist"
    })
})
app.listen(PORT,()=>{
    console.log(`Server is Up and Running on ${PORT}`);
})
