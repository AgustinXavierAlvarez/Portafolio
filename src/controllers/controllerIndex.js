const path = require('path')
const fs = require('fs')

const rutaData= path.join(__dirname,'../database/userData.json')
const data=JSON.parse(fs.readFileSync(rutaData,'utf-8'))


controller = {
    home:function(req,res){
        res.render('index',{
            title:'Portafolio',
            style:'/css/style.css',
            data:data
        })
    }
}

module.exports=controller;