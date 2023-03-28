const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

// app.use(function (req, res, next) {
//     // set response headers
//     res.header("Cross-Origin-Embedder-Policy", "require-corp")
//     res.header("Cross-Origin-Opener-Policy", "same-origin")

//     // Pass to next layer of middleware
//     next()
// });

app.use(express.static(path.join(__dirname, 'public')))



app.listen(3000, () => {
    console.log("App listening on port 3000")
})