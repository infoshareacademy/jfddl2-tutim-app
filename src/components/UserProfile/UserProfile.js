import React from "react"
import styles from './UserProfile.css'
import {auth, user} from 'firebase'
//
//
// var userProfile = {
//   basicInfo: {
//     name: "Janka Kowalska",
//     gender: "Kobieta",
//     birthday: "3 kwietnia, 1990",
//     location: "Lublin, lubelskie",
//     image: "https://static.pexels.com/photos/372042/pexels-photo-372042.jpeg",
//     bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat fugit quia pariatur est saepe necessitatibus, quibusdam reiciendis ratione voluptate atque in qui provident rem repellat soluta. Blanditiis repellat velit eligendi."
//   }
// }

class Avatar extends React.Component {


    render() {
        let image = this.props.image,
            style = {
                width: this.props.width || 100,
                height: this.props.height || 100
            };

        if (!image) return null;

        return (
            <div className="float">
                <div className="avatar" style={style}>
                    <img src={this.props.image} style={{width: '100%'}}/>
                </div>
                <div className="button-purple hvr-buzz"><a href="#">zmień zdjęcie</a></div>

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

        return (
            <div>
                <div className="user-profile-heading"><h2>Informacje o Twoim koncie</h2>
                    <hr/>
                </div>
                <div className="top">
                    <Avatar
                        image={photoUrl || 'https://www.fancyhands.com/images/default-avatar-250x250.png'}
                        width={150}
                        height={150}
                    />
                    <div className="User-Name">
                        <form>

                                <p>Imię i nazwisko:</p><h5><input type="text" name="name" onChange={('')} defaultValue={name}/>
                            </h5>
                             <p>Adres e-mail:</p><h5>
                            <input type="text" name="email" onChange={('')} defaultValue={userEmail}/></h5>

                        </form>
                    </div>
                </div>

                {/*<div className="bottom">*/}
                {/*<h4>O sobie</h4>*/}
                {/*<p>{info.bio}</p>*/}
                {/*</div>*/}
            </div>
        )
            ;
    }
}

class UserProfile extends React.Component {
    render() {

        return (
            <div>
            <div className="user-profile">

                <MainPanel/>
                <a href="#">Edytuj swoje dane</a>
                <a href="#">Wygeneruj nowe hasło</a>
                <a href="#">Zmień adres e-mail</a>
            </div>
            <div className="save-changes">
                <a href="#" className="save-changes">Zapisz zmiany</a></div>
            </div>

        )
    }
}

export default UserProfile