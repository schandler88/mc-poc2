import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { operation } from '@carto/carto.js';
import Button from '.././widgets/Button'
import LinkButton from '.././widgets/LinkButton'
import Badge from '.././widgets/Badge'
import IconBadge from '.././widgets/IconBadge'
import InputButton from '.././widgets/InputButton'
import Import from '.././widgets/Import'
import Dropdown from '.././widgets/Dropdown'
import Formula from '.././widgets/Formula'
import TextSearch from '.././widgets/TextSearch'
import Input from '.././layout/Input'
import '@carto/airship-style';

const LeftBar = ({ map, layers, size, background, name, client }) => {

  useEffect(() =>  {
    if (layers.zipz_steph2) {
      layers.zipz_steph2.layer.on('featureClicked', event => {
        console.log(event)
        const zipcode = event.data.zipcode
        // then you want to add two layers to the map so you will do this twice, once for the lines and once for the polygons
        // layers.routeslayer.on('featureClicked', event => {merchant_postal_code}
        // const zipcode = event.data.zipcode
      
        // layers.routelayer.on('featureClicked', event => {merchant_postal_code
        // const zipcode = event.data.zipcode
      
        const source = new carto.source.SQL('WITH a AS (SELECT * FROM sschober.mc_zips_joined_manhattan WHERE merchant_postal_code = 10128), journey as (SELECT mc_zips_joined_manhattan.* FROM mc_zips_joined_manhattan, a WHERE mc_zips_joined_manhattan.merchant_postal_code = ANY(string_to_array(a.zipcode, ',')::int[]))SELECT ROW_NUMBER() OVER() AS cartodb_id, ST_Transform(ST_Segmentize(ST_Makeline(ST_Centroid(a.the_geom),ST_Centroid(b.the_geom))::geography,100000)::geometry, 3857) as the_geom_webmercator FROM a, journey b'
        );
      
      const style = new carto.style.CartoCSS(`
      polygon-fill: ramp([spend], (#ffc6c4, #ee919b, #cc607d, #9e3963, #672044), jenks);
      }
      #layer::outline {
        line-width: 1;
        line-color: #FFFFFF;
        line-opacity: 0.5;
      `);
      
      const layer = new carto.layer.Layer(source, style);
      console.log(layer);
      client.addLayer(layer);
      client.getLeafletLayer().addTo(map);
      })
    }
  }, [layers])

  
  






  const moveMap = () => {
    map.flyTo([39.8283459, -98.5794797], 4);
  }

  const cartocss = `#layer {
    marker-width: 15;
    marker-fill: #EE4D5A;
    marker-fill-opacity: 0.9;
    marker-line-color: #FFFFFF;
    marker-line-width: 1;
    marker-line-opacity: 1;
    marker-placement: point;
    marker-type: ellipse;
    marker-allow-overlap: true;
  }`

const sql = `SELECT * from a WHERE railroad = 'UP'`

const sizeFinal = `as-sidebar as-sidebar--${size} as-sidebar--left ${background}`;

return (
  <aside className={sizeFinal} data-name={name}>
  <div className="as-m--24">

  <Import
    title="Import Data Layer"
    description="Import data to add to the map"
    page="/"
    cartocss={cartocss}
    sql={sql}
    back={true}
  />
  <Dropdown 
    categoryLayer={layers.railaccidents.source}
    column={'weather'}
    operation={operation.COUNT}
    placeholder={'Weather'}
  />    
  <LinkButton
    name='CARTO Website'
    link='https://carto.com'
    type='secondary'
    size=''
  />
  <InputButton
    name='Input Button'
    type='primary'
    size='l'
  />
  <Badge
    color='green'
    name='Badge Component'
    text='as-color--type-02'
  />
  <IconBadge
    color='success'
    name='Icon Badge Component'
    text='as-color--type-04'
    icon='as-icon-info'
  />
  <Button
    name='Center Map'
    action={moveMap}
    type='secondary'
    size=''
  />
  <div className="as-p--16">
  <Formula
    title='Employees Injured'
    description='Total number of employee injuries'
    round={true}
    currency={false}
    locale='en-US'
    currencyType='USD'
    layer={layers.railaccidents.source}
    column='rr_employees_injured'
    operation={operation.SUM}
  />
  </div>
  <TextSearch
    title='Accident Description'
    description='Search text in the accident description field'
    id='search'
    layer={layers.railaccidents.source}
    placeholder='Search...'
    column='narrative'
  />
  <Input
    id='input'
    placeholder='Text Input'
  />
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

export default connect(mapStateToProps)(LeftBar);
