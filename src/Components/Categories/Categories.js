import React from 'react';
import './Categories.css';

class Categories extends React.Component{
  constructor(props){
    super(props);

this.categorizeAchievements = this.categorizeAchievements.bind(this);
  }

  categorizeAchievements(event){
    this.props.categorize(event.target.innerHTML);
  }

  render(){
    return (
      <div className="Categories">
      <div onClick={this.categorizeAchievements} className=" Category Category-All">
        All
      </div>
        <div onClick={this.categorizeAchievements} className=" Category Category-Fitness">
          Fitness
        </div>
        <div onClick={this.categorizeAchievements} className=" Category Category-Creativity">
          Creativity
        </div>
        <div onClick={this.categorizeAchievements} className=" Category Category-Gaming">
          Gaming
        </div>
        <div onClick={this.categorizeAchievements} className=" Category Category-Work">
          Work
        </div>
      </div>
    );
  }

}

export default Categories;
