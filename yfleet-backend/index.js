const express = require('express')
const cors = require('cors')
const { application } = require('express')

const app = express()
app.use(cors())

const port = 5000

application.listen(port, ()=>console.log(`App running on port ${port}`))

