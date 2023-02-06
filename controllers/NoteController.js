const note = require('../models/NoteModel');
function get(req, res){
    res.render("index", {notes: note.get()})
}

function post(req, res) {
    res.send('post')
}

module.exports = {
    get,
    post
}