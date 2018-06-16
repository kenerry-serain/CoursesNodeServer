

const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const controllers = require('./controllers/courseController');


app.use(express.json());
app.listen(port, ()=> console.log(`Listening on port ${port}...`));
controllers(app);

// const courses =[
//     {id: 1, course: 'Programming'},
//     {id: 2, course: 'Programming With Kenerry'},
// ]

// app.get('/api/courses', (request, response)=>{
//     response.send(courses);
// });

// app.get('/api/courses/:id', (request, response)=>{
//     const course = courses.find(c => c.id === parseInt(request.params.id));
//     if(!course)
//         return response.status(404).send('The course with the given id was not found');

//     response.send(course);
// });

// app.post('/api/courses', (request, response)=>{

//     const {error} = validateCourse(request.body); //result.error
//     if (error) 
//         return response.status(400).send(error.details[0].message);

//     courses.push(course);
//     response.status(201).send(course);
// });

// app.put('/api/courses/:id', (request, response)=>{
    
//     const course = courses.find(c => c.id === parseInt(request.params.id));
//     if(!course)
//         return response.status(404).send('The course with the given id was not found');

//     const {error} = validateCourse(request.body);
//     if (error)
//         return response.status(400).send(error.details[0].message);
        
//     course.course = request.body.course;
//     response.status(202).send(course);
// });

// function validateCourse(course){
//     const schema = {
//         course: Joi.string().min(3).required()
//     };
    
//     return Joi.validate(course, schema);
// }
    

