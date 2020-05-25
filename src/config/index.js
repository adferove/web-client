let config;

if (process.env.REACT_APP_DEPLOY_ENV) {
  console.log(
    'process.env.REACT_APP_DEPLOY_ENV',
    process.env.REACT_APP_DEPLOY_ENV
  );
}

switch (process.env.REACT_APP_DEPLOY_ENV) {
  case 'LOCAL':
    config = require('./localConfig.json');
    break;
  case 'DEV':
    config = require('./devConfig.json');
    break;

  default:
    config = require('./localConfig.json');
}

config.environment = process.env.REACT_APP_DEPLOY_ENV;

export default config;
