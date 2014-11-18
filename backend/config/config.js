var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'Test Driven Apps Backend'
    },
    port: 3000,
    db: 'mongodb://localhost/tdd-development'
    
  },

  test: {
    root: rootPath,
    app: {
      name: 'Test Driven Apps Backend'
    },
    port: 3000,
    db: 'mongodb://localhost/tdd-test'
    
  },

  production: {
    root: rootPath,
    app: {
      name: 'Test Driven Apps Backend'
    },
    port: 3000,
    db: 'mongodb://localhost/tdd-production'
    
  }
};

module.exports = config[env];
