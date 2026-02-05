const mongoose  = require("mongoose")

async function Database() {
    try{
        await mongoose.connect(process.env.DBURL);
        console.log("DB Connected Successfully")
    }

    catch(error){
        console.log("Db connection failed")
    }
}

module.exports=Database;