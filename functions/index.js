const functions = require('firebase-functions');
const ghost = require('ghost/index.js');

exports.ghost = functions.https.onRequest(ghost);