Package.describe({
  name: "clinical:glass-ui",
  version: "1.3.11",
  summary: "Inspired by the Day Made of Glass videos....",
  git: "http://github.com/clinical-meteor/clinical-glass-ui",
  documentation: "README.md"
});

Package.onUse(function (api) {
  api.versionsFrom("1.1.0.2");

  api.use("clinical:fonts@1.0.0");
  api.use("clinical:barcode@3.0.0");
  api.use("grove:less@0.1.1");
  api.use("session");
  api.use("templating");

  api.addFiles('client/components/recordCore/active-record-core.js', ['client']);
  api.addFiles('client/components/recordCore/active-record-core.less', ['client']);

  api.addFiles('client/components/recordHeader/recordHeader.html', ['client']);
  api.addFiles('client/components/recordHeader/recordHeader.js', ['client']);
  api.addFiles('client/components/recordHeader/recordHeader.less', ['client']);

  api.addFiles('client/components/recordFooter/recordFooter.html', ['client']);
  api.addFiles('client/components/recordFooter/recordFooter.js', ['client']);
  api.addFiles('client/components/recordFooter/recordFooter.less', ['client']);

  api.addFiles("client/glass-ui.js", 'client');
  api.addFiles("client/glass-ui.less", 'client');
  api.addFiles("client/form.less", 'client');

  api.addFiles("client/theme.helpers.js", 'client');
  api.addFiles("client/themes.global.less", 'client');

  //api.export('afArrayField_photonic');

  api.export('recordFooter');
  api.export('recordHeader');
});

Package.onTest(function (api) {
  api.use("tinytest");
  api.use("clinical:glass-ui");
});
