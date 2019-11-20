const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Wold Sri lanka');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params);
});

//Port
const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port}...`));