Package.describe({
  name: "clinical:glass-ui",
  version: "2.0.0",
  summary: "Inspired by the Day Made of Glass videos....",
  git: "http://github.com/clinical-meteor/clinical-glass-ui",
  documentation: "README.md"
});

Package.onUse(function (api) {
  api.versionsFrom("1.1.0.3");

  api.use("clinical:fonts@1.1.0");

  api.use('meteor-platform');
  api.use('ecmascript');
  api.use('mongo');
  api.use('react-meteor-data');
  api.use('session');

  // api.use("grove:less@0.1.1");
  // api.use("templating");

  // api.addFiles('client/components/recordCore/active-record-core.js', ['client']);
  // api.addFiles('client/components/recordCore/active-record-core.less', ['client']);

  // api.addFiles('client/components/recordHeader/recordHeader.html', ['client']);
  // api.addFiles('client/components/recordHeader/recordHeader.js', ['client']);
  // api.addFiles('client/components/recordHeader/recordHeader.less', ['client']);

  // api.addFiles('client/components/recordFooter/recordFooter.html', ['client']);
  // api.addFiles('client/components/recordFooter/recordFooter.js', ['client']);
  // api.addFiles('client/components/recordFooter/recordFooter.less', ['client']);

  // api.addFiles("client/glass-ui.js", 'client');
  // api.addFiles("client/glass-ui.less", 'client');
  // api.addFiles("client/form.less", 'client');

  // api.addFiles("client/theme.helpers.js", 'client');
  // api.addFiles("client/themes.global.less", 'client');

  // api.export('recordFooter');
  // api.export('recordHeader');

  api.mainModule('index.jsx', 'client');
});

Package.onTest(function (api) {
  api.use("tinytest");
  api.use("clinical:glass-ui");
});
