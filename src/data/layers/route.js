export default {
    name: 'Route',
  
    visible: false,
  
    cartocss: `
    #layer {
        ::outline {
          line-width: 6;
            line-color: #ffffff;
          line-cap: round;
        }
        line-width: 3;
        line-color: #314e9c;
        line-opacity: 1;
        line-cap: round;
      }
    `,
  
    query: `
    SELECT * FROM mc_zips_joined_manhattan
    `,
  
    options: {
      featureClickColumns: []
    }
  };
  