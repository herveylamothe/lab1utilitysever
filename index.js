const express = require('express');
let app = express();

app.get('/', (request, response) => {
    



    response.send('hello world')
})


app.get('/math/add/', (request, response) => {
    // console.log(Object.values(request.query).map(e => parseInt(e)))

    let values = Object.values(request.query);


    
    let arrToNum = [];
        for(let i = 0; i<values.length; i++) {
            arrToNum.push(parseInt (values[i]))
        }
     let sum = 0;   
        for(let i = 0; i<arrToNum.length; i++) {
            sum = arrToNum[i] + sum
        }

    response.send({
        input: request.query,
        sum
    });
})
app.listen(4000);