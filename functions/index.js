const functions = require('firebase-functions');
const cms = require('./cms/index.js');

exports.ghost = functions.https.onRequest(cms);