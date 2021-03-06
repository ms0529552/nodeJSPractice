const express = require('express');
const path = require('path');

const app = express();

const publicDirPath = path.join(__dirname, '../public');

app.use(express.static(publicDirPath));

//
//1st Goal: Setup two new routes
//
//1. Setup an about route and render a page title.
//2. Set up an weather route and render a page title.
//3. Test your work by visiting both in the browser
//
//2nd Goal: Update routes
//1. Setup about route to render a title with HTML
//2. Setup a weather route to send back JSon
//  - Object with forecast and location strings
//3. Test your work by visiting both in the browser



//====================================================================

// app.get('', (req, res) => {
//     res.send('Hello express!')
// })

// app.get('/help', (req, res)=> {
//     res.send('Help page is here.')
// })

// app.get('/about', (req, res) =>{
//     res.send('<h1>About us</h1>');
// });
 
// app.get('/weather', (req, res) =>{
//     res.send({
//         forecast: 'It is snowing',
//         location: 'Philadelphia',
//     });
// });

//====================================================================

//3rd Goal: 
//1. Create a HTML page for about with "About" title.
//2. Create a HTML page for help with "Help" title.
//3. Remove the old route handlers for both.
//4. Visit both in the browser yo test your work.

//====================================================================





//====================================================================

app.listen(3000, () => {
    console.log('Server is up on port 3000')
});