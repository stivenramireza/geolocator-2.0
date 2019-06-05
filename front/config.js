env = process.env.NODE_ENV || 'test';
console.log("este es el env: "+env)

var config = {
  development: {
    port: process.env.PORT || 3030
  },
  production: {
    port: process.env.PORT || 3030
  },
  test: {
    port: process.env.PORT || 3030
  }
};

module.exports = config[env];
