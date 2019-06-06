env = process.env.NODE_ENV || 'test';
console.log("este es el env: "+env)

var config = {
  development: {
    port: process.env.PORT || 3000,
    db: process.env.DATABASE_URL,
  },

  test: {
    port: process.env.PORT || 3000,
    db:  process.env.DATABASE_URL,
  },

  production: {
    port: process.env.PORT || 3000,
    db: process.env.DATABASE_URL,
  }
};

module.exports = config[env];
