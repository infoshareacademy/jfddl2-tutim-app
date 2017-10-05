# React

## Czym jest JSX?

JSX to nazwa składni rozszerzającej ES (JavaScript) o elementy przypominające HTML. Przed dostarczeniem kodu zawierającego elementy z JSX do przeglądarki należy poddać go procesowi kompilacji, który konstrukcje takie jak:

```jsx harmony
const App = () => (
  <div>
    <h1>Hello</h1>
  </div>
)
```

zamienia na:

```javascript
const App = () => (
  React.createElement(
    'div',
    {},
    React.createElement(
      'h1',
      {},
      'Hello'
    )
  )
)
```

Ten kod wywołany w przeglądarce sprawi, że funkcja zwróci zagnieżdżone w sobie obiety, będące reprezentacją VDOM.

## Co to jest VDOM?

VDOM (Virtual DOM) to obiekt, za pomocą którego React reprezentuje strukturę dokumentu. VDOM jest napisany całkowicie w JS i jest szybszy niż natywny DOM w przeglądarce. React przy każdym rendereowaniu tworzy nowy fragment VDOM, a następnie porównuje go z tym, który renderował poprzednio. Do DOM wędrują tylko te zmiany, które wynikają z różnic pomiędzy dwoma ostatnimi renderowaniami VDOM.

## Co to jest renderowanie?

Jest to proces, w którym React buduje strukturę VDOM, wywołując kolejno definicje komponentów przypadających na konkretny komponent. Każde wywołanie zwraca mały fragment VDOM, które następnie są składane w cały interfejs aplikacji i odwzorowywane w rzeczywistym DOM-ie.

## Co to jest komponent?

Komponentem nazywamy kod aplikacji odpowiadający za wyświetlanie danego elementu interfejsu użytkownika.

## Jak mogę zdefiniować komponent w Reakcie?

Mamy dwa sposoby definiowania komponentów: za pomocą funkcji lub za pomocą klasy z ES6.

Funkcja będąca definicją komponentu musi zwracać wartość, którą React jest w stanie wyrenderować w wirtualnym drzewie dokumentu. React wywołuje tę funkcję, przekazując do niej jeden parametr - obiekt, który nazywamy `props`. Obiekt ten składa się z atrybutów nadanych komponentowi w JSX, np.

```jsx harmony
  // definicja komponentu za pomocą funkcji
  function App(props) {
    return <div><h1>{props.title}</h1></div>
  }
  
  // definicja komponentu za pomocą strzałki
  const App = props => <div><h1>{props.title}</h1></div>
  
  // wywołanie komponentu
  const result = <App title="Hello world" />
```

Definicja za pomocą klasy wymaga rozszerzenia klasy `React.Component` oraz zawarcia w niej metody `render`. Metoda `render` musi zwracać wartość, którą React jest w stanie wyrenderować.

```jsx harmony
  class App extends React.Component {
    render() {
      return <div><h1>{this.props.title}</h1></div>
    }
  }
```

## State

Stan służy w komponencie za jego pamięć - możemy modyfikować go metodą `this.setState` z poziomu innych metod komponentu. Warto pamiętać, że nie wolno wywoływać `this.setState` w obrębie metody `render` - spowodowałoby to pętlę ciągłej aktualizacji komponentu i renderowania, ponieważ `this.setState` wywołuje ponowne renderowanie komponentu, czyli metodę `render`.

## Props

Props, to wartości, które możemy przekazać do komponentu z zewnątrz, w momencie jego wywołania. Props służy tylko do oczytu.

## Iteracja

React potrafi wyrenderować więcej niż jeden element na raz - możemy w JSX przekazać do renderowania tablice elementów, np.

```jsx harmony
const uniqueNumbers = [1, 2, 3]

const App = () => (
  <ul>
    { uniqueNumbers }
  </ul>
)
```

```jsx harmony
const App = () => (
  <ul>
    { uniqueNumbers.map(number => <li key={number}>{number}</li>}
  </ul>
)
```

Atrybut `key` pomaga Reactowi zoptymalizować aktualizację interfejsu po zmianie stanu / przekazaniu do niego nowych propsów. Musi być unikalny w obrębie kolekcji.

## Lifecycle methods

Cykl życia komponentu zakłada wywołania tzw. motod cyklu życia które odpalają się w rużnych momentach począwszy od zamiaru wstawienia komponentu do VDOM, a kończąc na zamiarze usunięcie komponentu z VDM. Metody te to:

- componentWillMount
- render
- componentDidMount

- componentWillReceiveProps
- shouldComponentUpdate
- componentWillUpdate
- render
- componentDidUpdate

- componentWillUnmount

# Więcej...

- https://reactjs.org/docs/hello-world.html
- https://daveceddia.com/
- https://www.youtube.com/watch?v=MhkGQAoc7bc&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b