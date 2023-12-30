const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.port || 5000
const { createPool } = require('mysql')
app.use(cors())
app.use(express.json())
const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'awstesting',
    connectionLimit: 10


})
app.get('/', (req, res) => {
    res.send("server is working")
})
app.post('/p/:id', (req, res) => {
    let id = req.params.id;
    // let queery = `SELECT * FROM empid WHERE Indexs =${id}`
    let queery = `INSERT INTO empid(id) VALUES ('[value-${id}]')`
    pool.query(queery, (err, result) => {
        if (err) {
            res.send({ error: 'error is found' })
        }
        res.send(result)
    })

  
})
app.get('/g/:id', (req, res) => {
    let id = req.params.id;
    let queery = `SELECT * FROM empid WHERE Indexs =${id}`
    // let queery = `INSERT INTO empid(id) VALUES ('[value-${id}]')`
    pool.query(queery, (err, result) => {
        if (err) {
            res.send({ error: 'error is found' })
        }
        res.send(result)
    })

  
})


app.listen(port, () => {
    console.log("server is running testign ")
})