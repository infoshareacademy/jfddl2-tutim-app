import React from "react"
import styles from './UserProfile.css'

var user = {
  basicInfo: {
    name: "Janka Kowalska",
    gender: "Kobieta",
    birthday: "3 kwietnia, 1990",
    location: "Lublin, lubelskie",
    photo: "http://lorempixel.com/500/500/people",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat fugit quia pariatur est saepe necessitatibus, quibusdam reiciendis ratione voluptate atque in qui provident rem repellat soluta. Blanditiis repellat velit eligendi."
  }
}

class Avatar extends React.Component {
  render() {
    let image = this.props.photo,
      style = {
        width: this.props.width || 250,
        height: this.props.height || 250
      };

    if (!image) return null;

    return (
      <div className="avatar" style={style}>
        <img src={this.props.photo}/>
      </div>
    );
  }
}

class MainPanel extends React.Component {
  render() {
    let info = this.props.info;
    if (!info) return null;

    return (
      <div>
        <div className="top">
          <Avatar
            image={info.photo}
            width={100}
            height={100}
          />
          <h2>{info.name}</h2>
          <h4>{info.location}</h4>

          <hr/>
          <p>{info.gender} | {info.birthday}</p>
        </div>

        <div className="bottom">
          <h4>O sobie</h4>
          <p>{info.bio}</p>
        </div>
      </div>
    );
  }
}

class UserProfile extends React.Component {
  render() {
    return (
      <div id="user-profile">
        <MainPanel info={user.basicInfo}/>
      </div>
    )
  }
}

export default UserProfile