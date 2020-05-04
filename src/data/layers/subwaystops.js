export default {
  name: 'Subway Stops',
  visible: true,
  cartocss: `#layer {
    marker-width: 5;
    marker-fill: #454545;
    marker-fill-opacity: 0.6;
    marker-allow-overlap: true;
    marker-line-width: 0.5;
    marker-line-color: #525252;
    marker-line-opacity: 1; }`,
  query: `SELECT * FROM stops_nyc_subway_may2019`,

  options: {
    featureClickColumns: ['stop_name','trains']
  }
};
