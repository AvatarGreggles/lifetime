import React from 'react';
import './Categories.css';

class Categories extends React.Component{
  render(){
    return (
      <div className="Categories">
      <div className=" Category Category-All">
        All
      </div>
        <div className=" Category Category-Fitness">
          Fitness
        </div>
        <div className=" Category Category-Creativity">
          Creativity
        </div>
        <div className=" Category Category-Gaming">
          Gaming
        </div>
        <div className=" Category Category-Work">
          Work
        </div>
      </div>
    );
  }

}

export default Categories;
