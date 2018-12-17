import { Session } from 'meteor/session';
import { get } from 'lodash';

export default Glass = {
  getOpacity: function(){
    return Session.get('globalOpacity');
  },
  setOpacity: function(opacity){
    return Session.set('globalOpacity', opacity);
  },
  blur: function(style){
    if (style) {
      if (Session.get('glassBlurEnabled')) {
        style.filter = 'blur(3px)';
        style.WebkitFilter = 'blur(3px)';
      }
    }
    return style;
  },
  backgroundBlur: function(style){
    if (style) {
      if (Session.get('backgroundBlurEnabled')) {
        style.backdropFilter = 'blur(5px)';
      }
    }
    return style;
  },
  darkroom: function(style){
    if (!style) {
      style = {};
    }
    if (Session.get('darkroomEnabled')) {
      style.color = 'black';
      style.background = 'white';
    } else {
      style.color = 'white';
      style.background = 'black';
    }
    return style;
  },
  defaultStyle: function(style){
    if (!style) {
      style = {};
    }
    this.blur(style);
    this.darkroom(style);
    return style;
  },
  getContextImage: function(style, path){
    if (!style) {
      style = {};
    }

    if (!path){
      path = get(Meteor, 'settings.public.defaults.registration.background')
    }

    if(path){
      style.backgroundImage = 'url(' + path + ')';
      style.WebkitBackgroundSize = 'contain';
      style.MozBackgroundSize = 'contain';
      style.OBackgroundSize = 'contain';
      style.backgroundSize = 'contain';
      style.backgroundPositionY = 'bottom';
      style.backgroundRepeat = 'no-repeat';
      style.backgroundColor = 'white';
      style.position = 'absolute';
      style.height = '100%';
      style.width = '100%';
    } 

    return style;
  }
};
