const express = require('express');
const router = express.Router();
const User = require('../models/User.model');
const Post = require('../models/Post.model');

const multer = require('multer');
const upload = multer({ dest: './public/uploads/' });

/* GET home page */
router.get('/', (req, res) => res.render('index', { title: 'App created with Ironhack generator 🚀' }));

//Get post-form
router.get('/post-form', (res, req, next) => {
  res.render('posts/post-form');
});

// router.post('/upload', upload.single('photo'), (req, res, next) => {
//   const picture = new User({
//     userName: req.body.userName,
//     path: `/uploads/${req.file.filename}`,
//     originalName: req.file.originalname
//   });
 
//   picture
//     .save()
//     .then(() => {
//       res.redirect('/');
//     })
//     .catch(err => {
//       next(err);
//     });
// });


// the GET route to display the post-form,
// the POST route to actually create the post (this route should include file uploading),
// the GET route to display the posts and
// the GET route to display post-details.



module.exports = router;
