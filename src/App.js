import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AchievementList from './Components/AchievementList/AchievementList';
import Profile from './Components/Profile/Profile';
import Categories from './Components/Categories/Categories';

const completeAchievementList = [
  {id: 1, title: 'To infinity and beyond!', description: 'Get a promotion at work', category: 'Work', expValue: 20 },
      {id: 2, title: 'Example 2', description: 'Example 2 description', category: 'Work' , expValue: 20},
      {id: 3, title: 'Example 3', description: 'Example 3 description', category: 'Gaming', expValue: 20},
      {id: 4, title: 'Example 4', description: 'Example 4 description', category: 'Fitness', expValue: 20},
      {id: 5, title: 'Example 5', description: 'Example 5 description', category: 'Creativity', expValue: 20}
    ]

class App extends Component {
  constructor(){
    super();

    this.state = {
      achievements: completeAchievementList,
      username: 'MagicTricksKill',
      level: 1,
      experience: 20,
      completedAchievements: 0
    }

    this.categorize = this.categorize.bind(this);
    this.gainExperience = this.gainExperience.bind(this);
    this.levelUp = this.levelUp.bind(this);
  }

categorize(category){
    const categorizedAchievements = [];
    console.log(category);

    if(category !== 'All'){
    completeAchievementList.map(achievement =>{
      if(achievement.category === category){
        categorizedAchievements.push(achievement);
        this.setState({achievements: categorizedAchievements})
      }
    })
  }else{
    this.setState({achievements: completeAchievementList})
  }
}

levelUp(){
  this.setState({level: this.state.level + 1, experience: 0});

}

gainExperience(experience){
  const newExperienceTotal = this.state.experience + experience;
      console.log(newExperienceTotal);
  this.setState({experience: newExperienceTotal});
  if(newExperienceTotal >= 100){
    this.levelUp();
  }
}

  render() {
    return (
      <div className="App">
      <Profile username={this.state.username} level={this.state.level} experience={this.state.experience} completedAchievements={this.state.completedAchievements}/>
        <div className="App-Body">
          <Categories categorize={this.categorize}/>
          <AchievementList availableAchievements={this.state.achievements} experienceHandler={this.gainExperience}/>
        </div>
      </div>
    );
  }
}

export default App;
