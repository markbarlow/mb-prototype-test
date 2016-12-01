var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  
  res.render('index');

});


// Example routes - feel free to delete these

// Passing data into a page

router.get('/examples/template-data', function (req, res) {

  res.render('examples/template-data', { 'name' : 'Foo' });

});

// Branching

router.get('/examples/over-18', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var over18 = req.query.over18;

  if (over18 == "false"){

    // redirect to the relevant page
    res.redirect("/examples/under-18");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('examples/over-18');

  }

});

// add your routes here


// Branching contact us test

router.get('/contact_details', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var contactroute = req.query.contactroute;

  if (contactroute == "visa"){

    // redirect to the relevant page
     res.redirect("contact_visa");
   }  


  else if (contactroute == "etd"){

    // redirect to the relevant page
    res.redirect("contact_etd");
  }


 else {

    // if contactroute is any other value (or is missing) render the page requested
    res.render('contact_details');

  }

});


/*
// Passing data into a page, static version - this works but replaced with more useful dynamic input one below

router.get('/form_show_data', function (req, res) {

  res.render('form_show_data', { 'fullname' : 'Mark Barlow', 'comment' : 'some comment text' });

});
*/


// Passing data into a page, dynamic version
// this is going from fullname (input name in form_post_data) -> fullname_form (captured as variable here) -> fullname_display (the variable in form_show_data html source)

router.get('/form_show_data', function (req, res) {

// get the answer from the query string (?fullnamename=john) and set it as a variable so you can use it
  var fullname_form = req.query.fullname;
  var comment_form = req.query.comment;

// now send that variable to the page which has variable tags for fullname_display etc
  res.render('form_show_data', { 'fullname_display' : fullname_form, 'comment_display' : comment_form });


});





module.exports = router;
