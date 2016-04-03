describe('clinical:glass-ui', function () {
  var server = meteor();
  var client = browser(server);

  it('BlazeHelper > Glass UI should control PageOpacity', function () {
    return client.execute(function () {
      expect(UI._globalHelpers['getPageOpacity']()).to.equal('background-color: rgba(255, 255, 255, 0.95);');
    });
  });
});
