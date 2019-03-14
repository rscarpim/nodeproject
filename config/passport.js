const JwtStrategy   = require('passport-jwt').Strategy;
const ExtractJwt    = require('passport-jwt').ExtractJwt;
const express       = require('express');
const Sequelize     = require('sequelize');
const Op            = Sequelize.Op;
const User          = require('../models/User');
const keys          = require('../config/config');

const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey   = keys.secretOrKey;

module.exports = passport => {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {

        User.find({
            where: {
                u_id: {
                    [Op.eq] : jwt_payload.id
                }}})
            .then(user => {

                if(user){
                    return done(null, user);
                }

                /* User is not Founded*/
                return done(null, false);
            })
            .catch(err => console.log(err))
    }))
}


