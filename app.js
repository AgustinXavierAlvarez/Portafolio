const express=require('express');
const app=express();
const ruteIndex= require('./src/rutes/index')

app.use(express.static('public'));
app.use(express.json())

app.set('view engine', 'ejs');

app.set('views',__dirname + '/src/views')

app.listen (3040, () => { 
    console.log ('Servidor corriendo')
});

app.get('/', ruteIndex)