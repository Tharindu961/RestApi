const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
];

app.get('/', (req, res) => {
    res.send('Hello Wold Sri lanka');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.post('/api/courses', (req, res) => {
    const { error } = validateCourse(req.body); // result.error

    if (result.error) {
        //400 Bad Request
        
        return res.status(400).send(result.error.details[0].message);
       
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req,res) => {
    //Look uo the course
    const course = courses.find(c => c.id === parseInt(req.params.id));
   if (!course) res.status(404).send('The course with the given ID wasnot found.');
    
    //If not existing, return 404

    //Validagte

    //If invalid, return 400 - Bad request
    
    const { error } = validateCourse(req.body); // result.error

    if (result.error) {
        //400 Bad Request
        res.status(400).send(result.error.details[0].message);
        return;
    }
    

    //Update course
    course.name =req.body.name;
    //Return the updated course
    res.send(course);

});

function validateCourse(course) {

    const schema = {
        name: Joi.string().min(3).required()
    };

         return Joi.validate(req.body, schema);

}




app.get('/api/courses/:id', (req, res) => {
   const course = courses.find(c => c.id === parseInt(req.params.id));
   if (!course) return res.status(404).send('The course with the given ID wasnot found.');
   res.send(course);    
});

app.delete('/api/courses/:id', (req, res) => {

    const course = courses.find(c => c.id === parseInt(req.params.id));
   if (!course) res.status(404).send('The course with the given ID wasnot found.');

   const index = courses.indexOf(course);
    courses.splice(index, 1);

   res.send(course);

});

//Port
const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port}...`));
