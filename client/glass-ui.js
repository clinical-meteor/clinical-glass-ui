// Write your package code here!
Session.setDefault("colorA", "");
Session.setDefault("colorB", "");
Session.setDefault("colorC", "");
Session.setDefault("colorD", "");
Session.setDefault("colorE", "");


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


Template.registerHelper("getOpacity", function (){
  var backgroundColor = "";
  if (Session.equals('foregroundTheme', 'light')) {
    //light theme
    backgroundColor = "255, 255, 255";
  } else {
    //dark theme
    backgroundColor = "128, 128, 128";
  }

  if (typeof ActiveLayout === "object") {
    backgroundColor = ActiveLayout.getPageColor();
  }

  if (Session.equals('foregroundTheme', 'light')) {
    //light theme
    return "background-color: rgba(" + backgroundColor + "," + Session.get("glassOpacity") + ");";
  } else {
    //dark theme
    return "background-color: rgba(" + backgroundColor + "," + Session.get("glassOpacity") + ");";
  }

});
Template.registerHelper("getOpacityWithCorner", function (){
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

  if (typeof ActiveLayout === "object") {
    backgroundColor = ActiveLayout.getPageColor();
  }

  if (Session.get('appWidth') > 768) {
    return themeString + "background: linear-gradient(225deg, transparent 28.28px, rgba(" + backgroundColor + "," + Session.get("glassOpacity") + ") 0) top right;";
  } else {
    return themeString + "background-color: rgba(" + backgroundColor + "," + Session.get("glassOpacity") + "); top: 50px;";
  }
});


// Template.registerHelper("getOpacityWithCorner", function () {
//   if (Session.get('appWidth') > 768) {
//     if (Session.get('mainPanelIsCard')) {
//       return "background: linear-gradient(225deg, transparent 28.28px, rgba(255,255,255," +
//         Session.get("glassOpacity") + ") 0) top right;";
//     } else {
//       return "background-color: rgba(255,255,255," + Session.get("glassOpacity") +
//         "); top: 50px;";
//     }
//   } else {
//     return "background-color: rgba(255,255,255," + Session.get("glassOpacity") +
//       "); top: 50px;";
//   }
// });
// Template.registerHelper("getOpacity", function () {
//   return "background-color: rgba(255,255,255," + Session.get("glassOpacity") + ");";
// });
