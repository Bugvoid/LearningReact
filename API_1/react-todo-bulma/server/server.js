const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const TaskRoutes = require('./routes/Task')
const mongoose = require('mongoose')
const config = require('./config/keys.config.js')

app.use(bodyParser.json())
app.use('/api/task', TaskRoutes)
const port = process.env.PORT || 3001;

app.listen(port, function(){
  console.log('Server listening on port ' + port);
});

mongoose.connect(config.mongodbUri, {useNewUrlParser: true})
.then(() => console.log('Database connect'))
.catch((err) => console.log('Error on database connection', err))
mongoose.set('useFindAndModify', false)




