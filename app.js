const express=require('express');
const app=express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.listen (3040, () => { 
    console.log ('Servidor corriendo')
});

app.get('/',(req,res)=>{
    res.render('index');
})