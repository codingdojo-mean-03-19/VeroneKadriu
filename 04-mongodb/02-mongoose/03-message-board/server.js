const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded());
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
app.get("/", function(req, res) {
	Message.find({}, false, true).populate('_comments').exec(function(err, messages) {
	      res.render('index.ejs', { messages: messages });
	});
});
app.post("/message", function(req, res){
	var newMessage = new Message({ name: req.body.name, message: req.body.message });
	newMessage.save(function(err) {
		if (err) {
			console.log(err);
			res.render('index.ejs', { errors: newMessage.errors });
		} else {
			console.log("success");
			res.redirect('/');
		}
	})
})
app.post("/comment/:id", function(req, res) {
	const messageId = req.params.id;
	Message.findOne({ _id: messageId }, function(err, message) {
		const newComment = new Comment({ name: req.body.name, text: req.body.comment });
		newComment._message = message._id;
		Message.update({ _id: message._id }, { $push: { _comments: newComment }}, function(err) {

		});
		newComment.save(function(err) {
			if (err) {
				console.log(err);
				res.render('index.ejs', { errors: newComment.errors });
			} else {
				console.log("comment added");
				res.redirect("/");
			}
		});
	});
});

app.listen(8000, function() {
	console.log("server running on port 8000");
});

mongoose.connect('mongodb://localhost/message_board',  { useNewUrlParser: true } );

const Schema = mongoose.Schema;
const MessageSchema = new mongoose.Schema({
	name: String,
	message: String,
	_comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

MessageSchema.path('name').required(true, 'Name cannot be blank');
MessageSchema.path('message').required(true, 'Message cannot be blank');
mongoose.model("Message", MessageSchema);

const Message = mongoose.model("Message");
const CommentSchema = new mongoose.Schema({
	name: String,
	text: String,
	_message: {type: Schema.Types.ObjectId, ref: 'Message'}
});

CommentSchema.path('name').required(true, 'Name cannot be blank');
CommentSchema.path('text').required(true, 'Comment cannot be blank');
mongoose.model("Comment", CommentSchema);

const Comment = mongoose.model("Comment");
