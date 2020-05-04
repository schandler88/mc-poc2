export default {
  name: 'Subway Lines',
  visible: true,


  cartocss: `
  #layer {
      line-width: 1.5;
      line-color: ramp([rt_symbol], (#ff6319, #0039a6, #00933c, #fccc0a, #ee352e, #996633, #a7a9ac, #6cbe45, #b933ad), ("B", "A", "4", "N", "1", "J", "L", "G", "7"), "=");
      line-opacity: 1;
    }
    `,

  query: `SELECT * FROM subway_lines`,

  options: {
    featureClickColumns: []
  }
};
