Package.describe({
  summary: "Require this application to use HTTPS",
  version: "0.0.4",
  name: "yosbd:force-ssl",
  git: "https://github.com/YosBD/force-ssl.git",
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.use('webapp@1.2.0');
  api.use('underscore@1.0.3');
  // make sure we come after livedata, so we load after the sockjs
  // server has been instantiated.
  api.use('ddp@1.1.0');


  api.addFiles('force_ssl_common.js', ['client', 'server']);
  api.addFiles('force_ssl_server.js', 'server');

  // Another thing we could do is add a force_ssl_client.js file that
  // makes sure document.location.protocol is 'https'. If it detected
  // the code was loaded from a non-localhost non-https site, it would
  // stop the app from working and pop up an error box or something.
});
