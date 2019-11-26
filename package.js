Package.describe({
  name: "clinical:glass-ui",
  version: "2.5.0",
  summary: "Inspired by the Day Made of Glass videos....",
  git: "http://github.com/clinical-meteor/clinical-glass-ui",
  documentation: "README.md"
});

Package.onUse(function (api) {
  api.versionsFrom("1.1.0.3");

  api.use('meteor-base');
  api.use('ecmascript@0.12.4');
  api.use('mongo');
  api.use('react-meteor-data@0.2.15');
  api.use('session');

  api.mainModule('index.jsx', 'client');
});

Package.onTest(function (api) {
  api.use("tinytest");
  api.use("clinical:glass-ui");
});

Npm.depends({
  "lodash": "4.17.4"
});
