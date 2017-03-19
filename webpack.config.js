

function buildConfig(env) {
  return require('./config/' + env + '.config.js')({ env: env })
}

module.exports = buildConfig;
