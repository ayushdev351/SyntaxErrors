const express = require('express');
const router = express.Router();
const path = require('path');
const data = require('../fulldatabase.json');
var fs = require('fs');

router.post('/', (req, res) => {
    let arraytosend = [];
    let obj = req.body;
    let tempid = obj[Object.keys(obj)[0]];
    //console.log(tempid);
    fs.readFile('./fulldatabase.json', 'utf8', function readFileCallback(err, filedata){
        if (err){
            console.log(err);
        } else {
            fileobj = JSON.parse(filedata);
            for(let i =0; i<fileobj.length; i++){
                let b = Object.keys(fileobj[i]);
                let c = Object.values(fileobj[i]);
                if(b[0] == tempid){
                    for(let j =0; j<c[0].length; j++){
                        if(c[0][j].ref == "yes")
                        {
                            arraytosend.push(c[0][j]);
                        }
                    }
                }
            }
   }});   
   setTimeout(()=>res.send(arraytosend), 5000);
    
});

module.exports = router;

