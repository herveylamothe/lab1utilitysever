const express = require('express');
let app = express();
const REQ = require('request');

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

    if (isNaN(sum)) {
        data = {
            error: 'You passed a non-number value into the parameters.'
        };
    }
    else {
        data = {
            input: request.query,
            sumString,
            sum
        }
    }

    response.send(data);

})



app.get('/math/multiply/', (request, response) => {
    // console.log(Object.values(request.query).map(e => parseInt(e)))

    let values = Object.values(request.query);

    let data;

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
    console.log(product);
    
    if (isNaN(product)) {
        data = {
            error: 'You passed a non-number value into the parameters.'
        };
    }
    else {
        data = {
            input: request.query,
            productString,
            product
        }
    }

    response.send(data);
})

app.get('/gif', (request, response) => {
    let values = Object.values(request.query);
    console.log('REQUEST Q:', request.query)
   console.log(values[0]);
   const search = values[0];
   const api_key = 'EX6vlJEUTYYKcSas7Nvyzv9cjCsBDDcY';
   const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search}`
//    let req = new XMLHttpRequest();
//     req.open('GET', url)
//     req.send();
    REQ.get({
        url : `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search}`
    }, 
    function(err, response, body) {
        let data = JSON.parse(body);

        console.log(data);
    })
})

app.listen(4000);