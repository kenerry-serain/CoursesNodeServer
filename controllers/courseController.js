module.exports = function(app){

    //Dependencies
    const Joi = require('joi');

    //Courses list
    const courses =[
        {id: 1, course: 'Node Programming'},
        {id: 2, course: 'Asp .Net Programming'},
    ]
    
    //Getting all courses
    app.get('/api/courses', (request, response)=>{
        response.send(courses);
    });
    
    //Getting a specific course
    app.get('/api/courses/:id', (request, response)=>{
        const course = courses.find(c => c.id === parseInt(request.params.id));
        if(!course)
            return response.status(404).send('The course with the given id was not found');
    
        response.send(course);
    });
    
    //Creating a course
    app.post('/api/courses', (request, response)=>{
        const {error} = validateCourse(request.body); //result.error
        if (error) 
            return response.status(400).send(error.details[0].message);
    
        courses.push(course);
        response.status(201).send(course);
    });
    
    //Updating a course
    app.put('/api/courses/:id', (request, response)=>{
        const course = courses.find(c => c.id === parseInt(request.params.id));
        if(!course)
            return response.status(404).send('The course with the given id was not found');
    
        const {error} = validateCourse(request.body);
        if (error)
            return response.status(400).send(error.details[0].message);
            
        course.course = request.body.course;
        response.status(202).send(course);
    });
    
    //Validating course body schema
    function validateCourse(course){
        const schema = {
            course: Joi.string().min(3).required()
        };
        
        return Joi.validate(course, schema);
    }
}
