const { withInfoPlist } = require("@expo/config-plugins");

function withHead(config) {
  return withInfoPlist(config, (config) => {
    config.modResults.CoreSpotlightContinuation = true;

    return config;
  });
}

module.exports = withHead;
