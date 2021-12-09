const server = require('json-server')
const app = server.create()
const router = server.router('db.json')

app.use(router)

const PORT = process.env.PORT || 3001
app.listen(PORT)