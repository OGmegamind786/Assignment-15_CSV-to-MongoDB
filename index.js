

//mongoose integration
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Movies-app-new', {useNewUrlParser: true, useUnifiedTopology: true});





//csvtojson
const csvFilePath='./movies.csv'
const csv=require('csvtojson')


//get schema
const Movies = require('./models/Movies')


const main = async() => {
    const jsonArray=await csv().fromFile(csvFilePath);

    try{
        await Movies.insertMany(jsonArray);
        console.log('done');
    }
    catch(e){
        console.log(e);
    }
    const m = await Movies.find();
    console.log(m);
    mongoose.connection.close();
    console.log("--------------done2----------------");
}


main();