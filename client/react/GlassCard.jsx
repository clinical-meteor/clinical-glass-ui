import { Card } from 'material-ui/Card';
import React from 'react';
import ReactMixin from 'react-mixin';
import PropTypes from 'prop-types';
import { get } from 'lodash';

export class GlassCard extends React.Component {
  constructor(props) {
    super(props);
  }

  getMeteorData() {

    let data = {
      style: {
        overflowY: 'scroll'
      }, 
      borderStyle: {},
      containerStyle: {

      }
    };

    if (get(this, 'props.style')) {
      data.style = get(this, 'props.style');
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
      data.containerStyle.WebkitFilter = 'blur(3px)';
    }

    if(this.props.blur){
      data.containerStyle.filter = 'blur(3px)';
      data.containerStyle.WebkitFilter = 'blur(3px)';
    }

    if (this.props.height === "auto") {

      data.style.height = Session.get('appHeight');

      if(Session.get('showNavbars')){
        data.style.height = data.style.height - 128;
      }
      if(Session.get('showSearchbar')){
        data.style.height = data.style.height - 64;
      }
      if(Session.get('mainPanelIsCard')){
        data.style.height = data.style.height - 40;
      }

    } else {
      data.style.height = get(this, 'props.height');      
    }

    data.style.height = data.style.height + 'px';
    data.style.paddingBottom = '0px';


    if(this.props.backgroundColor){
      data.style.background = get(this, 'props.backgroundColor');
    }
    if(this.props.overflowY){
      data.style.overflowY = this.props.overflowY;
    }

    if(this.props.boxShadow){
      switch (this.props.boxShadow) {
        case 'sharp':
          data.containerStyle.boxShadow = 'grey 5px 5px 5px';               
          break;
        case 'diffuse':
          data.containerStyle.boxShadow = 'grey 10px 10px 20px';               
          break;
        case 'light':
          data.containerStyle.boxShadow = 'lightgrey 10px 10px 20px';               
          break;
        case 'cloudy':
          data.containerStyle.boxShadow = 'lightgrey 20px 20px 40px';               
          break;
        case 'none':
          data.containerStyle.boxShadow = 'none';               
          break;
      
        default:
          data.containerStyle.boxShadow = 'none';       
          break;
      }
    } else {
      data.containerStyle.boxShadow = 'none';       
    }

    if(this.props.width){
      data.borderStyle.width = get(this, 'props.width')
    }

    return data;    
  }

  render(){
    return (
      <div className="glassCardBoundary" style={this.data.borderStyle} >
        <Card id={this.props.id} className="glassCard" containerStyle={this.data.containerStyle} style={this.data.style} onClick={this.props.onClick} zDepth={this.props.zDepth} >
          { this.props.children }
        </Card>
        { this.props.footer }
      </div>
    );
  }
}


GlassCard.propTypes = {
  id: PropTypes.string,
  backgroundColor: PropTypes.string,
  style: PropTypes.object,
  blur: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func,
  zDepth: PropTypes.number,
  boxShadow: PropTypes.string,
  footer: PropTypes.object,
  overflowY: PropTypes.string
};
ReactMixin(GlassCard.prototype, ReactMeteorData);
export default GlassCard;