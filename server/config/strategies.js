// modules =================================================
var config = require('../config/config');
var User = require('../models/user');
var GoogleUser = require('../models/googleUser');

// configuration ===========================================
module.exports = {
  jwtOpts: {
    secretOrKey: config.tokenSecret,
    algorithms: 'HS256',
    authScheme: 'Bearer',
    passReqToCallback: false
  },

  jwtAuth: function(payload, next) {
    if (payload.type === 'JWT') {
      User.findOne({username: payload.user}, function(err, user) {
        if (err) return next(err, false);

        if (user) {
          next(null, user);
        } else {
          next(null, false);
        }
      });
    } else if (payload.type === 'google') {
      GoogleUser.findOne({username: payload.user}, function(err, user) {
        if (err) return next(err, false);

        if (user) {
          next(null, user);
        } else {
          next(null, false);
        }
      });
    }
  }
};
