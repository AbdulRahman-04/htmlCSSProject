import express from "express";
 import path from "path";
 import {fileURLToPath} from "url";

//  below 2 lines for connecting backend with frontend
 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

 const app = express();
 const PORT = 5028

 //  below  line for connecting backend with frontend
 app.use(express.static(path.join(__dirname, "build")));

 app.get("/rahman", (req, res)=>{
    try{
        res.status(200).json({msg: "hello rahman"})
    } catch(error){
        res.status(401).json(error)
    }
 });

 app.get("/sneha", (req, res)=>{
    try {
        res.status(200).json({msg: "hello sneha"})
    } catch (error) {
        res.status(401).json(error)
    }
 })

 //  below 3 lines for connecting backend with frontend
 app.get("/*", (req, res)=>{
    res.sendFile(path.join(__dirname, "build", "index.html"));
 });

 app.listen(PORT, ()=>{
    console.log('YOUR SERVER IS UP AND RUNNING!');
    
 })