export default {
  name: 'Zip Code Average Sales',
  visible: true,


  cartocss: `
  #layer {
    polygon-fill: ramp([spend], (#ffc6c4, #ee919b, #cc607d, #9e3963, #672044), jenks);
  }
  #layer::outline {
    line-width: 1;
    line-color: #FFFFFF;
    line-opacity: 0.5;
  }
  `,


  query: `
  WITH a AS (SELECT * FROM sschober.mc_zips_joined WHERE merchant_postal_code = 10048),
  journey as (
  
  SELECT mc_zips_joined.* FROM mc_zips_joined, a WHERE mc_zips_joined.merchant_postal_code = ANY(string_to_array(a.zipcode, ',')::int[]))
  
  SELECT 
  ROW_NUMBER() OVER() AS cartodb_id,
    ST_Transform(
       ST_Segmentize(
           ST_Makeline(
             ST_Centroid(a.the_geom),
             ST_Centroid(b.the_geom)
           )::geography,
           100000
       )::geometry,
       3857
     ) as the_geom_webmercator
  FROM a, journey b
    `,

  options: {
    featureClickColumns: [ ]
  }
};
