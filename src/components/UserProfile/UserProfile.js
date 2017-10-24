import React from "react"
import styles from './UserProfile.css'
import {auth, user} from 'firebase'


var userProfile = {
  basicInfo: {
    name: "Janka Kowalska",
    gender: "Kobieta",
    birthday: "3 kwietnia, 1990",
    location: "Lublin, lubelskie",
    image: "https://static.pexels.com/photos/372042/pexels-photo-372042.jpeg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat fugit quia pariatur est saepe necessitatibus, quibusdam reiciendis ratione voluptate atque in qui provident rem repellat soluta. Blanditiis repellat velit eligendi."
  }
}

class Avatar extends React.Component {


  render() {
    let image = this.props.image,
      style = {
        width: this.props.width || 100,
        height: this.props.height || 100
      };

    if (!image) return null;

    return (
      <div className="avatar" style={style}>
        <img src={this.props.image}/>
      </div>
    );
  }
}

class MainPanel extends React.Component {
  render() {

    const userProfile = auth().currentUser;
    const name = userProfile.displayName;
    const userEmail = userProfile.email;
    const photoUrl = userProfile.photoURL;

    let info = this.props.info;
    if (!info) return null;

    return (
      <div>
        <div className="user-profile-heading"><h2>Informacje o Twoim koncie</h2><hr/></div>
        <div className="top">
          <Avatar
            image={info.image}
            width={150}
            height={150}
          />
          <h2>{info.name}</h2>
          <h4>Zarejestrowany adres: {userEmail}</h4>
          <h4>Zarejestrowany imię: {name}</h4>
          <h4>Zarejestrowany photo: {photoUrl}</h4>
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

        <MainPanel info={userProfile.basicInfo}/>
        <a href="#">Edytuj swoje dane</a>
        <a href="#">Wygeneruj nowe hasło</a>
        <a href="#">Zmień adres e-mail</a>

      </div>
    )
  }
}

export default UserProfile