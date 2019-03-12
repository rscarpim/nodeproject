const express       = require('express');
const Sequelize     = require('sequelize');
const Op            = Sequelize.Op;
const router        = express.Router();
const bcrypt        = require('bcryptjs');

/* Load the User Model. */
const User    = require('../../models/User');
/* 
    GET     : api/user/test
    Desc    : Test the route Connection
    Access  : Public
    Created@: 3/11/2019
    Author  : Ricardo Scarpim.
*/
router.get('/test', (req, res) => res.json({msg: "Users Works"}) );




/* 
    GET     : api/users/register
    Desc    : Register a new user.
    Access  : Public
    Created@: 3/11/2019
    Author  : Ricardo Scarpim.
*/
router.post('/register', (req, res) => {


    /* Search for an Existing User. */
    User.find({
        where: {
            u_login: {
                [Op.eq] : req.body.login
            }}})
        .then(user => {

            if(user){
                return res.status(400).json({ email: 'Ooops, User Already Exists!'});
            }else{
                
                /* Creating the New User */
                const newUser = new User({

                    u_login     : req.body.login,
                    u_password  : req.body.password
                });
        
                
                /* Generating the Encryptation for the Password. */
                bcrypt.genSalt(10, (err, salt) => {

                    if(err) throw err;

                    bcrypt.hash(newUser.u_password, salt, (err, hash) => {

                        if(err) throw err;

                        /* Saving the Information on the Database. */
                        User.create({

                            u_login     : req.body.login,
                            u_password  : newUser.u_password = hash
                        })
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    });
                });
            } 
        });

});










module.exports = router;