import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setSegment } from '../../actions/actions';

const SearchItem = ({ item, layers, setSegment }) => {

    const setMapStyle = (item) => {
        setSegment(item.item.name)
        layers.railaccidents.style.setContent(`
        #layer {
            polygon-fill: ramp([${item.item.field_name}], (#ffc6c4, #f4a3a8, #e38191, #cc607d, #ad466c, #8b3058, #672044), quantiles);
          }
          #layer::outline {
            line-width: 1;
            line-color: #FFFFFF;
            line-opacity: 0.5;
          }
        `)
    }
console.log(item)

    return (
        <div style={{}}>
            <p className='as-body search-item' onClick={() => setMapStyle(item)}>{item.item.name}</p>
        </div>

    )}

const mapStateToProps = state => ({
    client: state.client,
    map: state.map,
    layers: state.layers,
    viewport: state.viewport,
    boundingbox: state.boundingbox
    });
    
const mapDispatchToProps = dispatch => ({
    setSegment: segment => dispatch(setSegment(segment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchItem);
