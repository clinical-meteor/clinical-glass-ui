Package.describe({
  name: "photonic:glass-ui",
  version: "0.2.9",
  summary: "Inspired by the Day Made of Glass videos....",
  git: "http://github.com/awatson1978/meteor-cookbook/packages/starynight-glass-ui",
  documentation: "README.md"
});

Package.onUse(function (api) {
  api.versionsFrom("1.1.0.2");

  api.use("fortawesome:fontawesome@4.3.0");
  api.use("awatson1978:fonts-helveticas@1.0.4");
  api.use("clinical:barcode@3.0.0");
  api.use("grove:less@0.1.1");

  //api.addFiles("client/autoforms/afArrayFieldPhotonic.html");
  //api.addFiles("client/autoforms/afArrayFieldPhotonic.less");

  api.addFiles("glass-ui.less");

  //api.export('afArrayField_photonic');
});

Package.onTest(function (api) {
  api.use("tinytest");
  api.use("photonic:glass-ui");
  api.addFiles("glass-ui-tests.js");
});
