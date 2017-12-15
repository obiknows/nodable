module.exports = function(app, db) {

  // a  post to notes
  app.post('/notes', (req, res) => {
    console.log(req.body)
    // create the note here
    res.send('Hello')
  })
}
