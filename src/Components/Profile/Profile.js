import React from 'react';
import './Profile.css';

class Profile extends React.Component{
  render(){
  let expProgress = this.props.experience + '%';

    return (
      <div className="Profile">
          <div className="Profile-Avatar">
            <img src="https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/30727057_2405085382850192_861897123380068352_n.jpg?_nc_cat=106&_nc_ht=scontent-amt2-1.xx&oh=f057912335c4d5fb9dd0119e7a59236c&oe=5CC9BCD0" />
          </div>
          <div className="Profile-Info">
            <div className="Profile-Info-Username">
              {this.props.username}
            </div>
            <div className="Profile-Info-Level">
              Level: {this.props.level}
            </div>
            <div className="Profile-Info-Exp">
              Exp:
              <div className="Experience-Bar">

                <div style={{width: expProgress}}>{this.props.experience}%</div>
              </div>
            </div>
            <div className="Profile-Info-Completed">
              Completed: {this.props.completedAchievements}
            </div>
          </div>
      </div>
    );
  }

}

export default Profile;
