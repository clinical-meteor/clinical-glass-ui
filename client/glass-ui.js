// Write your package code here!
Session.setDefault("colorA", "");
Session.setDefault("colorB", "");
Session.setDefault("colorC", "");
Session.setDefault("colorD", "");
Session.setDefault("colorE", "");
Session.setDefault("paintPageBackgrounds", true);
Session.setDefault("paintCardBackgrounds", false);


Template.registerHelper("colorA", function (argument) {
  return "color: " + Session.get('colorA') + ";";
});
Template.registerHelper("colorB", function (argument) {
  return "color: " + Session.get('colorB') + ";";
});
Template.registerHelper("colorC", function (argument) {
  return "color: " + Session.get('colorC') + ";";
});
Template.registerHelper("colorD", function (argument) {
  return "color: " + Session.get('colorD') + ";";
});
Template.registerHelper("colorE", function (argument) {
  return "color: " + Session.get('colorE') + ";";
});


Template.registerHelper("backgroundA", function (argument) {
  return "background-color: " + Session.get('colorA') + ";";
});
Template.registerHelper("backgroundB", function (argument) {
  return "background-color: " + Session.get('colorB') + ";";
});
Template.registerHelper("backgroundC", function (argument) {
  return "background-color: " + Session.get('colorC') + ";";
});
Template.registerHelper("backgroundD", function (argument) {
  return "background-color: " + Session.get('colorD') + ";";
});
Template.registerHelper("backgroundE", function (argument) {
  return "background-color: " + Session.get('colorE') + ";";
});


Template.registerHelper("getCardOpacity", function (){
  if (Session.get('paintCardBackgrounds')) {
    var backgroundColor = "";
    if (Session.equals('foregroundTheme', 'light')) {
      //light theme
      backgroundColor = "255, 255, 255";
    } else {
      //dark theme
      backgroundColor = "128, 128, 128";
    }
    return "background-color: rgba(" + backgroundColor + "," + Session.get("glassOpacity") + ");";
  } else {
    return "";
  }
});
Template.registerHelper("getPageOpacity", function (){
  if (Session.get('paintPageBackgrounds')) {
    var backgroundColor = "";
    if (Session.equals('foregroundTheme', 'light')) {
      //light theme
      backgroundColor = "255, 255, 255";
    } else {
      //dark theme
      backgroundColor = "128, 128, 128";
    }
    return "background-color: rgba(" + backgroundColor + "," + Session.get("glassOpacity") + ");";
  } else {
    return "";
  }
});

// DEPRECATED
Template.registerHelper("getOpacityWithCorner", function (){
  console.log('{{getOpacityWithCorner}} has been deprecated, in favor of {{getCardOpacity}} and {{getPageOpacity}}');
  var backgroundColor = "";
  var themeString = "";

  if (Session.equals('foregroundTheme', 'light')) {
    //light theme
    backgroundColor = "255, 255, 255";
    // themeString = "color: black; ";
  } else {
    //dark theme
    backgroundColor = "128, 128, 128";
    // themeString = "color: white; ";
  }

  // this will detect the layout object, but we don't have a good plan for page colors
  // TODO: implement darkroom palette, so we have a better handle on how to specify
  // the rgba values in our Theme object

  // if (typeof ActiveLayout === "object") {
  //   backgroundColor = ActiveLayout.getPageColor();
  // }

  // corners are a graphical luxury;
  // we don't want to dislay them on small devices; there's just not enough room
  if (Session.get('appWidth') > 768) {
    if (Session.get('opacityCorners')) {
      return themeString + "background: linear-gradient(225deg, transparent 28.28px, rgba(" + backgroundColor + "," + Session.get("glassOpacity") + ") 0) top right;";
    } else {
      return themeString + "background-color: rgba(" + backgroundColor + "," + Session.get("glassOpacity") + ");";
    }
  } else {
    return themeString + "background-color: rgba(" + backgroundColor + "," + Session.get("glassOpacity") + ");";
  }
});
// DEPRECATED
Template.registerHelper("getOpacity", function (){
  console.log('{{getOpacity}} has been deprecated, in favor of {{getCardOpacity}} and {{getPageOpacity}}');
  if (Session.get('paintCardBackgrounds')) {
    var backgroundColor = "";
    if (Session.equals('foregroundTheme', 'light')) {
      //light theme
      backgroundColor = "255, 255, 255";
    } else {
      //dark theme
      backgroundColor = "128, 128, 128";
    }
    return "background-color: rgba(" + backgroundColor + "," + Session.get("glassOpacity") + ");";
  } else {
    return "";
  }
});
