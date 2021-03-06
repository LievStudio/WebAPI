import express from 'express';
import routes from './src/routes/crmRoutes.js';

const PORT = 4000;
const SERVER = `localhost:${PORT}`;

var app = express();

routes(app);

app.get('/', (req,res) => 
    res.send(`Node and Express server running on port: ${PORT}`)
);

app.listen(PORT, () => {
    console.log(`Your server is running on port: ${PORT}`);
})