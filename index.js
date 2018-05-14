const Express = require('express');
const app = new Express();
app.set('view engine', 'pug');

console.log('App started at',Date.now());
app.use((req, res) => {
    res.render('choose')
});
app.listen(3000);
