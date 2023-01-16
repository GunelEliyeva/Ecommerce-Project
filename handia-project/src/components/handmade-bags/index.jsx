import React from "react";
import "./index.scss";
import imagehand from "../../assets/images/collection-v1-img1.webp";
import imagehandme from "../../assets/images/collection-v2-img2.webp";
const HandMadeBags = () => {
  return (
    <div id="hand-made">
      <div className="hand-made-bags">
        <div className="collection-1">
          <img src={imagehand} alt="collection-image" />
        </div>
        <div className="text1">
          <h1>HANDMADE BAGS</h1>
          <p>
            Years experience brought about by our skilled craftsmen could ensure
            that every piece produced is a work of art. Our focus is always the
            best quality possible.
          </p>
          <button className="view-all-collection-1">VIEW ALL COLLECTION</button>
        </div>
      </div>
      <div className="hande-by-me">
        <div className="text2">
          <h1>HANDMADE BY ME</h1>
          <p>
            Years experience brought about by our skilled craftsmen could ensure
            that every piece produced is a work of art. Our focus is always the
            best quality possible.
          </p>
          <button className="view-all-collection-2">VIEW ALL COLLECTION</button>
        </div>
        <div className="collection-2">
          <img src={imagehandme} alt="collection-image" />
        </div>
      </div>
    </div>
  );
};

export default HandMadeBags;
