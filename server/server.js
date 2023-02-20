const TextRazor = require('textrazor')
const express = require('express')

const app = express()


app.post("/api", (req, res) => {

    const textRazor = new TextRazor('<API-KEY>')
    const content = req.body.data
    const options = {extractors: 'entities'}
    textRazor.exec(content, options)
        .then(response => res.json(response.response.entities))
        .catch(err => console.error(err))





})


app.listen(5000, () => {
    console.log("Server started on port 5000")
})