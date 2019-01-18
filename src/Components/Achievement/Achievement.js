import React from 'react';
import './Achievement.css';


class Achievement extends React.Component{

  render(){
    let categoryClass = 'Achievement-Category';
    if(this.props.achievement.category === 'Work'){
      categoryClass += ' Achievement-Category-Work';
    }else if(this.props.achievement.category === 'Fitness'){
      categoryClass += ' Achievement-Category-Fitness';
    }else if(this.props.achievement.category === 'Gaming'){
      categoryClass += ' Achievement-Category-Gaming';
    }else if(this.props.achievement.category === 'Sports'){
      categoryClass += ' Achievement-Category-Creativity';
    }

    return (
      <div className="Achievement">
        <span className={categoryClass}></span>
        <div className="Achievement-Information">
          <h3>{this.props.achievement.title}</h3>
          <p>{this.props.achievement.description}</p>
        </div>
      </div>

    )
  }

}

export default Achievement;
