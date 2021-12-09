const server = require('json-server')
const app = server.create()
const router = server.router('db.json')
const path = require('path')

const wares = server.defaults({
  static: path.join(__dirname, './build')
})

app.use(wares)
app.use(router)

app.get('/heath', (req, res) => {
  res.send('ok')
})

const PORT = process.env.PORT || 3001
app.listen(PORT)