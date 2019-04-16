var Panda = require("../models/panda.js");

module.exports = {
    index: function (req, res) {
        Panda.find({})
        .then(pandas => response.render('index', {pandas:pandas}))
        .catch(console.log);


    },

    new: function (req, res) {
        response.render('new');


    },

    create: function (req, res) {
        Panda.create(request.body)
        .then(panda => {
          console.log(panda);
          response.redirect('/')
        })
        .catch(console.log);


    },

    show: function (req, res) {
        Panda.find({ _id: request.params.id })
        .then(panda => {
            console.log(panda);
            response.render('show', { panda: panda[0] })
          })
        .catch(console.log);  



    },

    edit: function (req, res) {
        Panda.find({ _id: request.params.id })
        .then(panda => {
            console.log(panda);
            response.render('edit', { panda: panda[0] })
        })
        .catch(console.log);



    },

    update: function (req, res) {
        console.log('body', request.body)
        Panda.update({ _id: request.params.id }, request.body)
        .then(panda=> {
            console.log(panda);
            response.redirect('/')
        })
        .catch(console.log); 


    },


    delete: function (req, res) {
        Panda.remove({ _id: request.params.id })
        .then(panda=> {
            console.log(panda);
            response.redirect('/')
        })
        .catch(console.log); 

    }


    




}