import React from 'react';
import Proptypes from "prop-types";

const GifGridItem = ( {title, url} ) => {
  
  return <div className='card animate__animated animate__fadeIn'>
      <img src = {url} alt= {title} />
      <p> { title } </p>
  </div>;
};

GifGridItem.Proptypes = {
  title: Proptypes.string.isRequired,
  url: Proptypes.string.isRequired,
}

export default GifGridItem;
