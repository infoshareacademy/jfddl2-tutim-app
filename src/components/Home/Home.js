import React from 'react'


import styles from './Home.css'
class Home extends React.Component {
    render() {
        return (
            <div>
                <h1 class="welcomePI">Witaj na FitStyle!</h1>
                <div class="firstPI">
                <p class="firstPI">Jeśli jesteś osobą, która prowadzi zdrowy tryb życia, a przy tym ceni swój czas, to jesteś w idealnym miejscu!
                Nasza aplikacja pozwoli Ci gromadzić Twoje przepisy!  Dzięki szerokiej funkcjonalności, juz teraz masz możliwość dodawania nieograniczonej liczby składników, które pózniej zamienisz na przepyszne, zdrowe potrawy! Na start dostajesz od nas dostęp do naszej bazy przepisów, by pokazać Ci jakie to proste!
                </p>
                </div>

                    <p class="rightsreservedPI">TuTim&#169;</p>
            </div>
        )
    }
}

export default Home