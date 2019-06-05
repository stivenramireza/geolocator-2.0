env = process.env.NODE_ENV || 'test';
console.log("este es el env: "+env)

var config = {
  development: {
    port: process.env.PORT || 3001
  },
  production: {
    port: process.env.PORT || 3001
  },
  test: {
    port: process.env.PORT || 3001
  }
};

module.exports = config[env];
