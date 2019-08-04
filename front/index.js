const app = require('./app')
const config = require('./config')

app.listen(config.port, () => {
    console.log(`Frontend corriendo en http://localhost:${config.port}`)
})
