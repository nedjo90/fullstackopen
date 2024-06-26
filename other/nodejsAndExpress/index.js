const express = require('express');
const app = express();

const requestLogger = (request, response, next) => {
    console.log('Method', request.method);
    console.log('Path', request.path);
    console.log('body', request.body);
    console.log('---');
    next();
};

const unknownEndpoint = (request, response) => {
    response.status(404)
        .send({error: 'unknown endpoint'});
};

app.use(express.json());
app.use(requestLogger);

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only Javascript",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        important: true
    }
];

app.get('/', (request, response) => {
    response.send('<h1>Hello World! test</h1>');
});

app.get('/api/notes', (request, response) => {
    response.json(notes);
});

app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id);
    const note = notes.find(note => {
        return note.id === id;
    });
    if (note)
        response.json(note);
    else {
        response.status(404)
            .end();
    }
});

app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id);
    notes = notes.filter(note => note.id !== id);
    response.status(204)
        .end();
});

const generateId = () => {
    const maxId = notes.length > 0 ?
        Math.max(...notes.map(n => n.id))
        : 0;
    return maxId + 1;
};

app.post('/api/notes', (request, response) => {
    const body = request.body;
    if (!body.content)
        return response.status(400)
            .json({
                error: 'content missing'
            });
    const note = {
        id: generateId(),
        content: body.content,
        important: Boolean(body.important) || false
    };
    console.log(note);
    notes = notes.concat(note);
    console.log(notes);
    response.json(note);
});
app.use(unknownEndpoint);

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);