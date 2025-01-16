const mongoose = require('mongoose')
const User = require('./User')
mongoose.connect("mongodb+srv://hamza:123@cluster0.yo7ml.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);
run()
async function run() {
    try {
      
       const user = await User.findOne({name :"Ali" , email:"test@gmail.com"});
       
        await user.save()
        console.log(user)
     
    } catch (e) {
        console.log(e.message)
    }
    

}