import { Card } from 'material-ui/Card';
import React from 'react';
import ReactMixin from 'react-mixin';

export class GlassCard extends React.Component {
  constructor(props) {
    super(props);
  }

  getMeteorData() {

    let data = {
      style: {
        overflowY: 'scroll'
      }, 
      containerStyle: {

      }
    };

    if (this.props && this.props.style) {
      data.style = this.props.style;
    }

    // GlassFactory.addOpacity(data.style);
    if (Session.get('globalOpacity')) {
      data.style.opacity = Session.get('globalOpacity');
    }

    // GlassFactory.addDarkroom(data.style);
    if (Session.get('darkroomEnabled')) {
      data.style.color = 'black';
      data.style.background = 'white';
    } else {
      data.style.color = 'white';
      data.style.background = 'black';
    }

    // GlassFactory.addBlur(data.style);
    if (Session.get('glassBlurEnabled')) {
      data.containerStyle.filter = 'blur(3px)';
      data.containerStyle.webkitFilter = 'blur(3px)';
    }

    // // GlassFactory.addBackgroundBlur(data.style);
    // if (Session.get('backgroundBlurEnabled')) {
    //   data.style.backdropFilter = 'blur(5px)';
    // }

    if (this.props.height === "auto") {

      if (Session.get('hasPagePadding')) {
        data.style.height = Session.get('appHeight') - 160 + 'px';
        data.style.overflowY = "scroll";
      } else {
        if (Session.get('mainPanelIsCard')) {
          data.style.height = Session.get('appHeight') - 40 + 'px';
          data.style.overflowY = "scroll";
        } else {
          data.style.height = Session.get('appHeight') + 'px';
          data.style.overflowY = "scroll";
        }
      }
    } else {
      data.style.height = this.props.height;      
    }
    data.style.paddingBottom = '0px';

    return data;    
  }

  render(){
    return (
       <Card id={this.props.id} className="glassCard" containerStyle={this.data.containerStyle} style={this.data.style} onClick={this.props.onClick} zDepth={this.props.zDepth} >
        { this.props.children }
       </Card>
    );
  }
}

ReactMixin(GlassCard.prototype, ReactMeteorData);

export default GlassCard;