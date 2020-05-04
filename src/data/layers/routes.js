export default {
  name: 'Routes',

  visible: true,

  cartocss: `
  #layer [merchant_postal_code = false]{
    ::outline {
      line-width: 3;
      line-color: #fff
    }
    line-width: 1.5;
    line-color: #08519c; 
  }
  
  #layer [merchant_postal_code = true]{
      line-width: 0.5;
      line-color: #c93328;
    }
  `,

  query: `
  SELECT * FROM mc_zips_joined_manhattan

  
  
  `,

  options: {
    featureClickColumns: ['merchant_postal_code','spend']
  }
};
