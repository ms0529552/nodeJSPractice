const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('Hello express!')
})

app.get('/help', (req, res)=> {
    res.send('Help page is here.')
})

//
//1st Goal: Setup two new routes
//
//1. Setup an about route and render a page title.
//2. Set up an weather route and render a page title.
//3. Test your work by visiting both in the browser
//====================================================================

app.get('/about', (req, res) =>{
    res.send('About us.');
})
 
app.get('/weather', (req, res) =>{
    res.send('Current weather status');
})

//====================================================================

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})