const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.Task = require('./api/models/taskModel');
global.Thing = require('./api/models/thingModel');
const taskRoutes = require('./api/routes/taskRoutes');
const thingRoutes = require('./api/routes/thingRoutes');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(
    'mongodb://server:password@mongo:27017/server',
    {useNewUrlParser: true}
);

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

taskRoutes(app);
thingRoutes(app);

app.listen(port);

app.use((req, res) => {
    res.status(404).send({url: `${req.originalUrl} not found`});
});

console.log(`Server started on port ${port}`);
