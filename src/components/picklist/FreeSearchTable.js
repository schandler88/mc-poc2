import React, { useState, useEffect } from 'react';
import SearchItem from './SearchItem'
import Fuse from 'fuse.js'

const FreeSearchTable = ({ data, filterText }) => {

    const style = {
        minHeight: '48px',
        padding: '15px',
        marginTop: '12px',
        transition: 'all 0.3s',
        borderRadius: '4px',
        backgroundColor: 'white',
        zIndex: 3,
        textAlign: 'left',
        boxShadow: '0 1px 4px 0 rgba(26, 30, 41, 0.2)'
    }

    let lastCategory 
    const rows = []

    var options = {
        // shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 3,
        keys: [
          "name"
        ]
      };

    useEffect(() => {

    }, [data])

    let fuse
    let filteredData

    if (data) {
      fuse = new Fuse(data, options); // "list" is the item array
      filteredData = fuse.search(filterText);
    }


      console.log(filteredData)

    if (filteredData) {
      filteredData.forEach((item) => {
        if (rows.length < 9) {


            rows.push(
                <SearchItem
                key={item.name}
                item={item}
                />
              );

      
        }
        });
    }

    console.log(rows)
    return (
        <div style={style}>
        {rows}
        </div>

    )}

export default FreeSearchTable;
