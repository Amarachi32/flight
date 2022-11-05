const express = require("express");
const { json } = require("express");
const fs = require('fs')
// const flights = require("./controllers/flightController");
// const models = require("./models/Flight");
// const routes = require("./routes/flightRoute");
const port = process.env.PORT || 3000;


const app = express();
app.use(express.json())

app.use(json());

// app.use("/", routes);






// get all flight
    const flight = JSON.parse(fs.readFileSync(`${__dirname}/book.json` ))

app.get('/', (req,res)=>{
    
    res.status(200).json({
        status:'success',
        data:{
            result:flight
        }
    })
})

// get single flight
app.get('/:id', (req,res)=>{
    console.log(req.params)
    const id = req.params.id * 1
    const flight = book.find(el =>el.id === id)
    if(!flight){
        return res.status(404).json({
            'status':'fail',
            'message': 'invalid id'
        })
    }
    return res.status(200).json({
        'status': 'success',
        'message': {
            flight
        }
    })
})


// add/book  flight

app.post('/', (req,res)=>{
    const newId = flight[flight.length-1].id + 1
    const newBook = Object.assign({id:newId}, req.body)
    flight.push(newBook)
    const body = fs.writeFile(`{__dirname}/book.json`, JSON.stringify(flight), err=>{
      
        res.status(200).json({
            status:"success",
            data:{
                resuly:newBook
            }
        })

    })
    
    
  
})

// update/edit flight
app.patch('/:id', (req,res)=>{
    if (req.id.params * 1 > book.length)
    if(!flight){
        return res.status(404).json({
            'status':'fail',
            'message': 'invalid id'
        })
    }
    return res.status(200).json({
        status: 'success',
        data: {
            flight: 'updated'
        }
    })
})


// delete flight
app.delete('/:id', (req,res)=>{
    if (req.id.params * 1 > book.length)
    if(!flight){
        return res.status(404).json({
            'status':'fail',
            'message': 'invalid id'
        })
    }
    return res.status(204).json({
        status: 'success',
        data: null
    })
})



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
