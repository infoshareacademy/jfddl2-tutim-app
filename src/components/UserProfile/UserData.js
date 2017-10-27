import React, {Component} from 'react';
import './UserProfile.css';
import {database} from "firebase";

class UserData extends Component {

  componentDidMount() {
    database.ref('/userData/uid').set({
      name: "Jakub",
      surname: "Markiewicz",
      city: "Lublin",
      photo: "https://static.pexels.com/photos/372042/pexels-photo-372042.jpeg",
      about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat fugit quia pariatur est saepe necessitatibus, quibusdam reiciendis ratione voluptate atque in qui provident rem repellat soluta. Blanditiis repellat velit eligendi."

    })
      .then(() => {
        console.log('itWorks written');
      })
  }

}

export default UserData


