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
    SELECT * FROM mc_zips_joined_manhattan
  `,

  options: {
    featureClickColumns: ['merchant_postal_code']
  }
};

