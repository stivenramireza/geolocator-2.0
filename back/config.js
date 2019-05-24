env = process.env.NODE_ENV || 'test';
console.log("este es el env: "+env)

var config = {
  development: {
    port: process.env.PORT || 3000,
    db: process.env.MONGODB_URI || 'mongodb://mongo-server:27017/database-routes',
    SECRET_TOKEN: 'estaesmiclavedetokenparaelusuario1234*'
  },

  test: {
    port: process.env.PORT || 3000,
    db: process.env.MONGODB_URI || 'mongodb://localhost:27017/database-routes',
    SECRET_TOKEN: 'estaesmiclavedetokenparaelusuario1234*'
  },

  production: {
    port: process.env.PORT || 3000,
    db: process.env.MONGODB_URI || 'mongodb://mongo-server:27017/database-routes',
    SECRET_TOKEN: 'estaesmiclavedetokenparaelusuario1234*'
  }
};

module.exports = config[env];
