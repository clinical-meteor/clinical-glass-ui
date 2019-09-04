import { Meteor } from 'meteor/meteor';
import React from 'react';
import { ReactMeteorData } from 'meteor/react-meteor-data';
import ReactMixin from 'react-mixin';
import { Session } from 'meteor/session';
import PropTypes from 'prop-types';

export class FullPageCanvas extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    Session.set('appSurfaceOffset', false);
    Session.set('hasPagePadding', true);
  }
  getMeteorData() {
    // start with blank slate
    let data = {
      style: {},
      background: null
    };

    // start with the user defined style
    if (this.props.style) {
      Object.assign(data.style, this.props.style);
    }

    // // we're going to manage the animations though
    data.style.WebkitTransition = 'ease .2s';
    data.style.transition = 'ease .2s';

    // begin with the assumption that the canvas should be as wide as the app (aka the entire viewport)
    var canvasWidth = Session.get('appWidth') - 1;
    
    // if we're passed in a width via a prop, then overide
    if (this.props.width) {
      if(this.props.width == 'wide'){
        canvasWidth = Session.get('appWidth') - 1;
      } else {
        canvasWidth = this.props.width;
      }
    }
    if(this.props.backgroundColor){
      data.style.backgroundColor = this.props.backgroundColor;
    }


    if (Session.get('appWidth') > canvasWidth) {
      data.style.position = 'relative';
      data.style.maxWidth = canvasWidth + 'px';
      data.style.width = '100%';
      data.style.left = 0;
      
    } else {
      data.style.position = 'absolute';
      data.style.width = '100%';
    }

    var paddingTop = 0;
    var paddingBottom = 0;

    if(Session.get('showNavbars')){
      paddingTop = paddingTop + 64;
      paddingBottom = paddingBottom + 64;
    }
    if(Session.get('showSearchbar')){
      paddingTop = paddingTop + 60;
    }
    if(Session.get('mainPanelIsCard')){
      paddingTop = paddingTop + 20;
    }

    data.style.paddingTop = paddingTop + 'px';
    data.style.paddingBottom = paddingBottom + 'px';


    if (Session.get('hasPagePadding')) {
      data.style.paddingLeft = '15px';
      data.style.paddingRight = '15px';
    } else {
      if (Session.get('mainPanelIsCard')) {
        data.style.paddingLeft = '15px';
        data.style.paddingRight = '15px';
      } else {
        data.style.paddingLeft = '0px';
        data.style.paddingRight = '0px';
      }
    }

    data.style.overflowY = 'scroll';
    data.style.WebkitOverflowScrolling = 'touch';
    data.style.WebkitTransform = 'translateZ(0px)';
    data.style.WebkitTransform = 'translate3d(0, 0, 0)';
    data.style.WebkitPerspective = 'translateZ(0px)';

    data.style.height = Session.get('appHeight');


    if(this.props.background){
      data.style.background = this.props.background;
    }

    // if we're passed in a width via a prop, then overide
    if (this.props.position) {
      data.style.position = this.props.position;
    }

    return data;
  }

  render(){
    return (
      <section className="pageContainer fullPageContainer" style={this.data.style}>
          { this.props.children }
      </section>
    );
  }
}

FullPageCanvas.propTypes = {
  height: PropTypes.string,
  width: PropTypes.number,
  position: PropTypes.string,
  backgroundColor: PropTypes.string,
  background: PropTypes.string,
  top: PropTypes.string
};
ReactMixin(FullPageCanvas.prototype, ReactMeteorData);
export default FullPageCanvas;