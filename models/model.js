import  Mongoose  from "mongoose";

const SR = Mongoose.Schema({
    title : String,
    taskname : String,
    description : String,
})

const ToDo = Mongoose.model("ToDo",SR);
export default ToDo;