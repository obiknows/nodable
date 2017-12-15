module.exports = function(app, db) {

  // a  post to notes
  app.post('/notes', (req, res) => {

    // create the note here
    res.send('Hello')
  })
}
