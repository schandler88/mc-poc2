import React, { useState, useEffect } from 'react';
import C from '../../data/C'
import axios from 'axios';
import FreeSearchTable from './FreeSearchTable';
import { connect } from "react-redux";
// import { setLocation } from '../../../actions/actions'
import { Link } from 'react-router-dom';

const { SQL_API_URL, API_KEY, USERNAME } = C;

const SQL_CLIENT = axios.create({
  method: 'get',
  url: SQL_API_URL,
  params: {
      api_key: API_KEY
  }
});

const FreeSearch = ({ map, location, segment }) => {
    const [text, setText] = useState(null)
    const [data, setData] = useState(null)


    useEffect(() => {
        setText(segment)
    }, [segment])

    // useEffect(() => {
    //     if (map) {
    //         map.setView([location[0].loc[1], location[0].loc[0]], location[0].zoom) 
    //     }
    // }, [location])

    useEffect(() => {
        console.log(text)
    }, [text])


    useEffect(() => {
        SQL_CLIENT.request({
            params: {
                q: `SELECT field_name, audience_name as name
                FROM mc_poc_reference_sheet
                ORDER BY name asc`
            }
          })
          .then((result) => {
            setData(result.data.rows)
          })
          .catch((error) => {
              console.log(error)
          });
    }, [])

    console.log

    return (
        <div>
            <input style={{width: '100%', padding: '12px ', fontSize: '12px', backgroundColor: 'rgba(255, 255, 255, 0.12)', color: '#4a4a4a'}} className="as-input" type="text" onChange={e => setText(e.target.value)} placeholder='Search for an audience' value={text}></input>
            {(text | segment !== text && text !== '') ? <FreeSearchTable data={data} filterText={text} /> : null}
        </div>

    )}

    const mapStateToProps = state => ({
        client: state.client,
        map: state.map,
        layers: state.layers,
        viewport: state.viewport,
        boundingbox: state.boundingbox,
        segment: state.segment
      });
    
      const mapDispatchToProps = dispatch => ({
      });
      
      
      export default connect(mapStateToProps, mapDispatchToProps)(FreeSearch)
      