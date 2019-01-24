const mongoose = require('mongoose');

//We use Schema class given by mongoose
const Schema = mongoose.Schema;

//baseed on that schema we create a blueprint for our student collection
const studentSchema = new Schema({
  name:{ 
    type: String,
    required: true
  },
  image: { type: String, default: 'images/avatar.png'},
  course:{ type: String},
  startedMonth:{ type: String},
  starterYear:{ type: Number},
  projects: [ String ],
  previousExperience: Boolean,
  created: {
    type: Date,
    default: Date.now
  }
})
//    Student ==================Student same name
const Student = mongoose.model("Student", studentSchema);


//We export the model to make accesible in other files
module.exports =  Student;