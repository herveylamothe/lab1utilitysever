const express = require('express');
let app = express();

app.get('/', (request, response) => {




    response.send('hello world')
})


app.get('/math/add/', (request, response) => {
    // console.log(Object.values(request.query).map(e => parseInt(e)))

    let values = Object.values(request.query);



    let arrToNum = [];
    for (let i = 0; i < values.length; i++) {
        arrToNum.push(parseInt(values[i]))
    }
    let sum = 0;
    for (let i = 0; i < arrToNum.length; i++) {
        sum = arrToNum[i] + sum
    }

    let sumString = '';
    for (let i = 0; i < values.length; i++) {
        if (i === 0) {
            sumString = sumString.concat(values[i])
        } else {
            sumString = sumString.concat(' + ', values[i])
        }
        // sumString.push(parseInt (values[i]))
    }
    //  let sum = 0;   
    //     for(let i = 0; i<sumString.length; i++) {
    //         sum = string[i] + sum
    //     }

    response.send({
        input: request.query,
        sumString,
        sum
    });
})



app.get('/math/multiply/', (request, response) => {
    // console.log(Object.values(request.query).map(e => parseInt(e)))

    let values = Object.values(request.query);



    let arrToNum = [];
    for (let i = 0; i < values.length; i++) {
        arrToNum.push(parseInt(values[i]))
    }
    let product = 1;
    for (let i = 0; i < arrToNum.length; i++) {
        product = arrToNum[i] * product
    }

    let productString = '';
    for (let i = 0; i < values.length; i++) {
        if (i === 0) {
            productString = productString.concat(values[i])
        } else {
            productString = productString.concat(' * ', values[i])
        }
        // sumString.push(parseInt (values[i]))
    }
    //  let sum = 0;   
    //     for(let i = 0; i<sumString.length; i++) {
    //         sum = string[i] + sum
    //     }

    response.send({
        input: request.query,
        productString,
        product
    });
})

app.listen(4000);