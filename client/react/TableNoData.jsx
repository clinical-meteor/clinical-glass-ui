import React  from 'react';
import ReactMixin from 'react-mixin';
import { ReactMeteorData } from 'meteor/react-meteor-data';


export class TableNoData extends React.Component {
  getMeteorData() {
    let data = {};

    return data;
  }

  render () {
    return(
        <div style={{width: '100%', paddingTop: '120px', textAlign: 'center'}} >
            <h3>No data.</h3>
            <span>Are you sure you're logged in?</span>
        </div>
    );
  }
}

ReactMixin(TableNoData.prototype, ReactMeteorData);

export default TableNoData;