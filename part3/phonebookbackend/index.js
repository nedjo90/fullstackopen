const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(express.json());
app.use(morgan(function (tokens, req, res) {
    let toReturn = [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms'
    ];
    if (toReturn[0] === "POST"){
        toReturn.push(JSON.stringify(req.body));
    }
    return toReturn.join(' ');
}));

let persons = [{
    "id": 1,
    "name": "Arto Hellas",
    "number": "040-123456"
}, {
    "id": 2,
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
}, {
    "id": 3,
    "name": "Dan Abramov",
    "number": "12-43-234345"
}, {
    "id": 4,
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
}];

app.get('/api/persons', (request, response) => {
    response.json(persons);
});

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id);
    const person = persons.find(n => n.id === id);
    if (person) response.json(person); else {
        response.status(404)
            .end();
    }
});

app.get('/info', (request, response) => {
    const now = new Date(Date.now());
    response.send(`<p>Phonebook has info for ${persons.length} people</p></br><p>${now}</p>`);
});

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id);
    persons = persons.filter(n => n.id !== id);
    response.status(204)
        .end();
});

const generateId = () => {
    let id;
    do {
        id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    } while (persons.find(n => n === id));

    return id;
};

app.post('/api/persons', (request, response) => {
    const body = request.body;
    if (!body.name) return response.json({
        error: 'name is missing'
    });
    if (!body.number) return response.json({
        error: 'number is missing'
    });
    if (persons.find(n => n.name === body.name)) return response.json({
        error: 'name must be unique'
    });
    const person = {
        "id": generateId(),
        "name": body.name,
        "number": body.number
    };
    persons = persons.concat(person);
    console.log(persons);
    response.json(person);
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
