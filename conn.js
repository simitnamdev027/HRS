const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://simitnamdev027:HvX43Z9yhuSTZ8zK@cluster0.prmtkdg.mongodb.net/', {
    useNewUrlParser : true,
    useUnifiedTopology : true,
   
}).then(( ) =>{
    console.log(`connection successful`);
}).catch((e) => {
    console.log(e);
})