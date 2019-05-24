env = process.env.NODE_ENV || 'test';
console.log("este es el env: "+env)

var config = {
  development: {
    port: process.env.PORT || 3000,
    db: 'mongodb+srv://root:root@cluster0-l0ovb.mongodb.net/test?retryWrites=true',
    SECRET_TOKEN: 'estaesmiclavedetokenparaelusuario1234*'
  },

  test: {
    port: process.env.PORT || 3000,
    db:  'mongodb+srv://root:root@cluster0-l0ovb.mongodb.net/test?retryWrites=true',
    SECRET_TOKEN: 'estaesmiclavedetokenparaelusuario1234*'
  },

  production: {
    port: process.env.PORT || 3000,
    db: 'mongodb+srv://root:root@cluster0-l0ovb.mongodb.net/test?retryWrites=true',
    SECRET_TOKEN: 'estaesmiclavedetokenparaelusuario1234*'
  }
};

module.exports = config[env];
