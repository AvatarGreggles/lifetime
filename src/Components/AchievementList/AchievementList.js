import React from 'react';
import './AchievementList.css';
import Achievement from '../Achievement/Achievement';


class AchievementList extends React.Component{

  render(){
    return (
      <div className="Achievement-List">

      {this.props.availableAchievements.map(achievement =>{
        return <Achievement key={achievement.id} achievement={achievement} experienceHandler={this.props.experienceHandler}/>
      })
    }
      </div>
    )
  }

}

export default AchievementList;
