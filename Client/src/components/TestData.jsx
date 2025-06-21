// src/components/TestData.js
import React, { useEffect, useState } from 'react';
import Data from "../../../Server/data/pdfData.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import '../css/TestData.css';

const TestData = () => {
  // const {imageUrl} = book;
  
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  }

  const handleSearchClick = () => {
    // You can add any specific search click logic here
    // Or reset the search input after clicking the button if needed
    // setSearch("");
  };

  return (
    <div className="test-data">
      <div className='searchBar'>
        <input
          type='text'
          placeholder='Enter Title'
          value={search}
          onChange={handleInput}
        />
        {/* <button onClick={handleSearchClick}>Search</button> */}
      </div>
      {
        Data.filter((val) => {
          if (search === "") {
            return val;
          } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        }).map((val) => {
          return (
            <div key={val.id} className="test-data-item">
              <h3>{val.name}</h3>
              <p>Author: {val.author}</p>
              <a href={val.pdfURL} download={val.name} className="download-link">
                <FontAwesomeIcon icon={faDownload} /> Download
              </a>
              {/* <img src={imageUrl}/> */}
            </div>
          );
        })
      }
    </div>
  );
};

export default TestData;
