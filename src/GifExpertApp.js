import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
    
    // const handleAdd = () => {
    //     setCategories(cats => [...cats, 'HunterXHunter']);
    //     // setCategories([...categories, 'HunterXHunter']);
    //     //setCategories(categories => categories.concat('HunterXHunter')) // Opción 1
    //     //setCategories(categories.concat('HunterXHunter')); // Opcion 2 
    // }
  return <>
    <h2>GifExpertApp</h2>
    <AddCategory  setCategories = { setCategories }  />
    <hr/>

    <ul>
     { 
        categories.map( category =>  (
            <GifGrid 
              key = { category }
              category = { category } 
            />
        ))
     }
    </ul>
  </>;
};

export default GifExpertApp;
