const path = require('path');

const users = [];

exports.addUser = (req, res, next) => {
    res.render('add-user', { title: 'Add User',path :  'admin/add-user' });
};

exports.saveUser = (req, res, next) => {
    console.log(req.body);
    users.push({ userName: req.body.userName , path : 'admin/add-user'});
    res.redirect('/');
};

exports.getusers = (req, res, next) => {
    res.render('users', { title: 'Users', usersList: users, path : '/'});
};