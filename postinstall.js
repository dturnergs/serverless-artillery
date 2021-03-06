'use strict';

const path = require('path');

const npm = require('./lib/npm');

const installPath = path.join(__dirname, 'lib', 'lambda');

npm.install(installPath); // will throw out and fail install if this times out or returns a non-zero result
