# jQuery

Biblioteka `jQuery` w momencie, gdy załączamy ją na stronie z użyciem `<script>` dodaje do globalnego kontekstu (`window`) nowy atrybut - `$`, który tak naprawdę jest tylko skrótowym odwolaniem do `window.jQuery`.

`$` wskazuje nam przeciążoną funkcję, która służy do wykonywania różnych operacji za pomocą biblioteki `jQuery`. Przeciążenie funkcji oznacza, że w zależności od typu argumentów, które do niej przekażemy zmienia ona swoje przeznaczenie.

Warto zwrócić uwagę, że `$` jest dozwoloną nazwą zmiennej w JS. Jeżeli chcielibyśmy używać innej nazwy w naszym skrypcie, to po załączeniu jQuery możemy śmiało wykonać taki zabieg:

```javascript
var awesome = window.jQuery
```

lub krócej:

```javascript
var osom = window.$
```

Po tej linijce możemy korzystać z jQuery pod danymi nazwami:

```javascript
osom('.some-class') // zwróci to samo, co $('.some-class')
```

Pamiętajmy też, że załączenie jQuery na stronie sprawia, że w konsoli w przeglądarce zyskujemy dostęp do tej funkcji. Możemy wpisywać tam testowo wywołania i sprawdzać, czy dobrze napisaliśmy selektor, np:

```javascript
$('body') // powinno zwrócić kolekcję składającą się z 1 elementu
```


## Wyszukiwanie 

Przykładowe wywołanie `$('.app')` pozwala nam wyszukać w dokumencie wszystkie elementy drzewa DOM posiadające klasę `app`.

## Tworzenie

Wywołanie `$('<div>')` zwróci nam natomiast nowo utworzony za pomocą znacznika `div` element DOM. Możemy go sobie zapisać do zmiennej: 

```javascript
var $element = $('<div>')
```

## Typ danych

Zmienną specjalnie nazywamy z wykorzystaniem przedrostka `$`, żeby wskazać programiści, który będzie czytał nasz kod, że zakładamy, że zmienna zawsze będzie przechowywać referencję do wartości zwróconej z funkcji jQuery.

Jest to o tyle istotne, że wartość zwracana z wykorzystaniem funkcji jQuery różni się od węzłów DOM zwracanych za pomocą wbudowanych w JavaScript (w przeglądarce) funkcji tj. `document.getElementById` lub `document.querySelectorAll`.

Wywołanie `$('.some-class')` nigdy nie zwróci nam wartości, którą JS uzna za `falsy` (undefined, null etc.). Wynika to z faktu, że `$` wywołany w celu tworzenia lub wyszukiwania zawsze zwraca kolekcję elementów - w skrajnym wypadku ta kolekcja jest pusta. Żeby sprawdzić, czy dana kolekcja jest pusta możemy odwołać się do jej atrybutu `.length` np.

```javascript
if ($('td').length === 0) {
    // nie ma żadnych elementów 'td' na stronie
}
```

Możemy sobie ułatwić zadanie sprawdzania, czy udało się odszukać cokolwiek i dodać do jQuery nową metodę dynamicznie:

```javascript
$.fn.isEmpty = function () {
  return this.length === 0
}
```

Po tej operacji możemy zapisać powyższą instrukcję warunkową tak:

```javascript
if ($('td').isEmpty()) {
    // nie ma żadnych elementów 'td' na stronie
}
```

Ważne jest, żeby ta definicja pojawiła się przed momentem, w którym będziemy chcieli ją rzeczywiście użyć. W ten sposób działają wszelkie pluginy do biblioteki jQuery rozszerzające jej możliwości.

## Zaawansowane selektory

Żeby znaleźć:

- wszystkie elementy posiadające klasę 'x':

  ```javascript
  $('.x')
  ```

- wszystkie elementy posiadające klasę 'x' występujące w obrębie jakiegokolwiek elementu '<table>'
  
  ```javascript
  $('table .x')
  ```
  
- wszystkie elementy posiadające klasę 'x' występujące w obrębie elementów z jakiejś kolekcji jQuery

  ```javascript
  var $tables = $('table.our-table') // wyszukujemy tabelki, które mają klasę `our-table`

  $('td', $tables) // wyszukujemy element `td` występujące w znalezionych uprzednio tabelkach
  ```
  
  Tutaj warto zauważyć, że tabelek może być więcej niż jedna. W tym przypadku komórki wszystkich tabelek zostaną połączone i zwrócone jako jedna kolekcja.
  
- pierwszą kolumnę w tabeli:
  
  ```javascript
  $('table tr td:first') // zaznaczy pierwsze komórki w każdym wierszu
  ```
  
- pierwszą komórkę w lewym górnym rogu tabeli:

  ```javascript
  $('table tr:first td:first')
  ```
  
  lub
  
  ```javascript
  $('table td').eq(0)
  ```
  
  Funkcja `.eq` zwraca nam n-ty element kolekcji jQuery
  
- wiersz, w którym znajduje się komórka, zakładając, że mamy tę komórkę znalezioną w zmiennej `$td`:

  ```javascript
  $td.parent()
  ```
  
  kolejną komórkę:
  
  ```javascript
  $td.next()
  ```
  
  poprzednią:
  
  ```javascript
  $td.prev()
  ```
  
- indeks elementu w obrębie jego rodzica (liczony od 0):

  ```javascript
  $td.index()
  ```
  
## Modyfikacje CSS

W celu zmodyfikowania wybranej wartości CSS w elemencie używamy:

```javascript
$('td').css({
  backgroundColor: 'red',
  fontSize: '12px'
})
```

Można też zrobić to tak:

```javascript
$('td').css('backgroundColor', 'red').css('fontSize', '12px')
```

Warto wzrócić uwagę na to, że nazwy właściwości CSS nazywane są w stylu `camelCase`. Wynika to z faktu, że nazwy z `-` są niedozwolone w JS. Nie stanowi to jednak większego problemu, ponieważ jQuery wiele wybacza i możemy używać tych nazw, jeżeli wstawimy je w cudzysłowiu:

```javascript
$('td').css({
  'background-color': 'red',
  'font-size': '12px'
})
```

lub

```javascript
$('td').css('background-color', 'red').css('font-size', '12px')
```

Nie każdy jednak o tym wie, więc zalecam składnie `camelCase`.

## Dodawanie klas

W celu dodanie klasy do elementu używamy metody `.addClass`, np.

```javascript
$('td').addClass('cell')
```

Warto zwrócić uwagę na brak kropki przed nazwą `cell`. Możemy założyć, że jeżeli z nazwy funkcji wynika, że dodajemy klasę, to nie podaje się kropki w nazwie klasy. Formalnie rzecz biorąc kropka nie jest częścią nazwy.

Usuwanie klasy:

```javascript
$('td').removeClass('cell')
```

Włączanie/wyłączanie klasy:
```javascript
$('td').toggleClass('active')
```

Przełączanie między dwiema klasami na kliknięcie:

```javascript
var $td = $('<td>').addClass('blue');

$td.on('click', function () {
    $(this).toggleClass('blue red')
})
```

W tym przykładzie toggle class będzie zdejmowało klasę, jeżeli istnieje ona na elemencie i dodawało tą, która nie istnieje.
  
Tutaj płynnie przechodzimy do kolejnego tematu - rejestrowania funkcji na zdarzenia

## Obsługa zdarzeń

Rozpatrzmy przykład: 

```javascript
$('td').on('click', function (event) {
    console.log(this);
    console.log(event)
})
```

Rejestrujemy tutaj dla każdej komórki funkcję, która zostanie wywołana, gdy komórka ta zostanie kliknięta. Pod `this` będziemy mieli dostęp do rzeczywistego węzła DOM, który został kliknięty (zachowanie podobne do wywołania `.addEventListener` z zestawu domyślnych funkcji do obsługi DOM w JS). Pod `event` będzie mnóstwo szczegółów związanych ze zdarzeniem. Sam obiekt zdarzenia pod atrybutem `event.target` posiada element, który wywołał zdarzenie w pierwszej kolejności.

Warto pamiętać, że zdarzenia w JS propagują się w górę dokumentu. 

W poniższej strukturze:

```html
<body>
    <div>
        <table>
            <tbody>
                <tr>
                    <td>Hi</td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
```

zdarzenie kliknięcia w komórkę `td` przejdzie po kolei przez elementy: td, tr, tbody, table, div, body.

Sprawia to, że na zdarzenie możemy nasłuchiwać w dowolnym węźle DOM, ktory znajduje się wyżej w hierarchii. W jQuery można to zrobić tak:

```javascript
$('table').on('click', 'td', function (event) {
    // this - kliknięta komórka tabelki
    // event - zdarzenie tego kliknięcia
})
```

Powyższy kod oznacza, że na węźle DOM `table` dodajemy funkcję, która ma odpalić się, jeżeli do `table` dojdzie zdarzenie kliknięcia wywołana na elemencie, który łapie się na selektor `td`. Selektor może być bardziej złożony, np. Jeżeli chcemy, żeby interesowały nas tylko zdarzenia pochodzące z komóre posiadających określone klasy:

```javascript
$('table').on('click', 'td.awesome-cell', function (event) {
    // this - kliknięta komórka tabelki
    // event - zdarzenie tego kliknięcia
})
```

lub nie posiadające określonych klas:

```javascript
$('table').on('click', 'td:not(".bad-cell, .invalid-cell")', function (event) {
    // this - kliknięta komórka tabelki
    // event - zdarzenie tego kliknięcia
})
```

Możliwe jest również dodawania obsługi więcej niż jednego zdarzenie jednocześnie, np.

```javascript
$(window).on('load click scroll', function (event) {
    console.log(event)
})
```
wywoła się gdy dokument się załaduje lub użytkownik kliknie w dokument lub go przewinie.

## Zaawansowane eventy

jQuery pozwala na wywoływanie eventów z dodatkowymi parametrami, np.

```javascript
$('td').on('click', function (event, a, b, c) {
    console.log(a, b, c);
});

$('td').trigger('click', [10, 20, 30])
```

sprawi, że na konsoli zobaczymy wartości `10 20 30`

Możemy również wywołać własne zdarzenia np. 

```javascript
$('td').on('killMe', function () {
    console.log('let me kill that cell')
});

$('td').trigger('killMe');
```

## More...

Coming soon.



