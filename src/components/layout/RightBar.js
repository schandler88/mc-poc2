import React, {useState} from 'react';
import { connect } from 'react-redux';
import '@carto/airship-style';
import FreeSearch from '../picklist/FreeSearch'

const RightBar = ({ layers, size, background, name }) => {
  const z = `as-sidebar as-sidebar--${size} as-sidebar--right ${background}`;

  layers.zipz_steph2.layer.on('featureClicked', e => {
    
  })

  return (
    <aside className={z} data-name={name}>
    <div className="as-m--24">
    <FreeSearch />
    </div>
    </aside>

  )}

const mapStateToProps = state => ({
  client: state.client,
  map: state.map,
  layers: state.layers,
  viewport: state.viewport,
  boundingbox: state.boundingbox
});


export default connect(mapStateToProps)(RightBar);

