import React, { useState } from 'react';
import axios from 'axios';
import { SRLWrapper } from 'simple-react-lightbox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './App.css';

const App = () => {

  const [image, setImage] = useState("");
  const [result, setResult] = useState([]);
  const ACCESS_KEY = "nKnKTDLfF-u8ty8Dvdqqkpg1TIYjQBxp91oG08Cel_k";
  const getValue = (event) => {
    setImage(event.target.value);
  };

  const getImages = () => {
    const url = "https://api.unsplash.com/search/photos?page=1&query=" + image + "&client_id=" + ACCESS_KEY;
    axios.get(url).then((response) => {
      setResult(response.data.results);
      console.log(response);
    })
  }

  return (
    <SRLWrapper>
      <>
        <h1 className="title">📷 Reactda yozilgan Rasm qidiruv ishi</h1>
        <div className="formSection">
          <input 
            type="text" 
            name="image" 
            placeholder="Search images..." 
            onChange={getValue}
          />
          <button onClick={getImages} type="submit">Search</button>
        </div>

        <div className="result"> 
          {result.map((image, id) => (
            <div className="card" key={image.id}>
              
                
                <LazyLoadImage
                  className="resultImage"
                  src={image.urls.full}
                  effect="blur"
                  delayTime="300"
                />
                
                <p className="username">Photo by {image.user.name}</p>
             
            </div>
          ))}
        </div>
      </>
    </SRLWrapper>
  );
};

export default App;
