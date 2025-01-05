import React, { useEffect, useState } from "react";
import Header from "./Header";
import Something from "./Something"

let PixabayC = () => {
  let [api, setApi] = useState({ images: [] });
  let [search, setSearch] = useState("");
  let [trigger, setTrigger] = useState(false);
  useEffect(() => {
    let fetchImages = async (searchTerm) => {
      if (!searchTerm && !trigger) return;  
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=47534062-23de516974b6931e2467e675e&q=${search}&image_type=photo&pretty=true`
        );
        const data = await response.json();
        setApi({ images: data.hits });
      } catch (err) {
        console.error("Error fetching images:", err);
      }
    };
      fetchImages("1"); 
      setTrigger(false);
  }, [trigger]);

  return (
    <div className="pixabay-container">
      <Header />
      <div className="frontCon">
        <div className="search-bar">
          <div id="h1container"><h1>Stunning royalty-free images & royalty-free stock</h1></div>
          <div className="listCon">
              <div className="nav-links">
                <a href="#" className="nav-item">Explore</a>
                <a href="#" className="nav-item">Photos</a>
                <a href="#" className="nav-item">Illustrations</a>
                <a href="#" className="nav-item">Vectors</a>
                <a href="#" className="nav-item">Videos</a>
                <a href="#" className="nav-item">Music</a>
                <a href="#" className="nav-item">Sound Effects</a>
                <a href="#" className="nav-item">GIFs</a>
              </div>
          </div>

          <div id="inputcontainer">
            <input
              type="text"
              value={search}
              placeholder="Search for free Images, Videos, Music & more"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={()=>setTrigger(true)}>Search</button>
          </div>
          <div className="button-container">
            <button className="custom-button">background</button>
            <button className="custom-button">wallpaper</button>
            <button className="custom-button">woman</button>
            <button className="custom-button">flowers</button>
            <button className="custom-button">mountain</button>
            <button className="custom-button">travel</button>
            <button className="custom-button">autumn</button>
            <button className="custom-button">sea</button>
            <button className="custom-button">house</button>
            <button className="custom-button">winter</button>
            <button className="custom-button">tree</button>
          </div>
        </div>
      </div>
      <Something/>

      <div className="images-container">
        {api.images.length > 0 ? (
          api.images.map((image) => (
            <img
              src={image.webformatURL}
              alt="API"
              className="api-image"
              key={image.id}
            />
          ))
        ) : (
          <p>No images found. Try a different search term.</p>
        )}
      </div>
    </div>
  );
};

export default PixabayC;
