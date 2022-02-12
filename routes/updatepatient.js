const express = require('express');
const router = express.Router();
const path = require('path');
const data = require('../fulldatabase.json');
const fs = require('fs');

router.post('/', (req, res) => {
    let check = 1;
    let obj = req.body;
    let tempid = obj[Object.keys(obj)[0]];
    console.log(tempid);
    fs.readFile('./fulldatabase.json', 'utf8', function readFileCallback(err, filedata){
        if (err){
            console.log(err);
        } else {
        fileobj = JSON.parse(filedata); 
        for(let i =0; i<fileobj.length; i++){
            let c = Object.values(fileobj[i]);
            for(let j =0; j<c[0].length; j++){
                if(c[0][j].Pid==tempid){
                    console.log(c[0][j]);
                    let rephid = c[0][j].hid;
                    let repref = c[0][j].ref;
                    let reppid = tempid + "malaria";
                    let repobj = {
                        "hid": rephid,
                        "Pid": reppid,
                        "ref": repref,
                    }
                    c[0].splice(j,1);
                    c[0].push(repobj);
                }
            }            
        }
        fullobj = JSON.stringify(fileobj);
        fs.writeFile('./fulldatabase.json', fullobj, function(err){
            if (err) throw err;
        console.log('complete');
        }); 
    }});   
    
});

module.exports = router;