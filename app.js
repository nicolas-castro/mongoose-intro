const express = require('express')
const mongoose = require('mongoose')
const hbs = require('hbs')

//import model to make it available

const Student = require('./models/student-models')


//connect with DB
//studentBook is the name of the DB
//
mongoose.connect("mongodb://localhost/studentBook")

//we create application here
const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));


// Student.create ({
//   name: "Ana",
//   course: "UX",
//   StartedMonth: "December",
//   StartedYear: 2018,
//   projects: [ 'Game'],
//   previousExperience: false

// })
// .then( newStudent => {
//   console.log("New Student Succesfully Created in DB", newStudent)
// })
// .catch(err => [
//   console.log("Error while creating DB", err)
// ])


//ALTERNATE WAY TO CREATE INSTANCE IN THE DATABASE

// const camiloInfo = new Student({
//   name: "Camilo",
//   course: "Web-Dev",
//   StartedMonth: "December",
//   StartedYear: 2018,
//   projects: [ 'JavaGame'],
//   previousExperience: true

// })

// camiloInfo.save()
// .then( newStudentInfo => {
//   console.log("New student created", newStudentInfo)
// })


//Retrieve / Read 
Student.find() // <====.find will ALLWAYS giev you an ARRAY back
.then( allStudentsFromDB => {
  allStudentsFromDB.forEach(student => {
    //console.log(student.name);
  })
} )
.catch( err => console.log("Erro while getting the data fron the DB", err))


Student.findById('5c491acf90e8eb1c6965a1a5')
//     I create this name
//            ||theStudent
.then(theStudent => {
  //console.log("Student name is: ", theStudent.name);
})
.catch( err => console.log("ID not Found!!!", err))


//Update
// Student.findByIdAndUpdate("5c491acf90e8eb1c6965a1a5", { name: "Ana S"})
// .then( updatedStudent => {
//   console.log("Updated student name is: ", updatedStudent)
// })
// .catch( err => {
//   console.log("DB not updated", err)
// })

//DELETE
// Student.findByIdAndDelete("5c4921a452fee21da811bb3f")
// .then( student => {
//   console.log(`student with id: ${student._id} is removed from the DB`)
// })
// .catch( err => {
//   console.log("Error while removing: " , err);
// })


app.listen(3000, () => {
  console.log("Running 👀")
})