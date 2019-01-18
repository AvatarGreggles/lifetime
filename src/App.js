import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AchievementList from './Components/AchievementList/AchievementList';
import Profile from './Components/Profile/Profile';
import Categories from './Components/Categories/Categories';

const completeAchievementList = [
  {id: 1, title: 'To infinity and beyond!', description: 'Get a promotion at work', category: 'Work' },
      {id: 2, title: 'Example 2', description: 'Example 2 description', category: 'Work' },
      {id: 3, title: 'Example 3', description: 'Example 3 description', category: 'Gaming' },
      {id: 4, title: 'Example 4', description: 'Example 4 description', category: 'Fitness' },
      {id: 5, title: 'Example 5', description: 'Example 5 description', category: 'Creativity' }
    ]

class App extends Component {
  constructor(){
    super();

    this.state = {
      achievements: completeAchievementList,
    }

    this.categorize = this.categorize.bind(this);
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

  render() {
    return (
      <div className="App">
      <Profile />
        <div className="App-Body">
          <Categories categorize={this.categorize}/>
          <AchievementList availableAchievements={this.state.achievements}/>
        </div>
      </div>
    );
  }
}

export default App;
