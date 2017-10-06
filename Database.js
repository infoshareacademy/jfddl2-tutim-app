var   meals =
    {
        p1: "śniadanie",
        p2: "obiad",
        p3: "kolacja"
    }

var database = {
    recipes: [
        {
            uid: "1",
            name: "Tortilla z kurczakiem",
            kcal: 320,
            recipe: "Składniki:\n" +
            "Mięso z piersi kurczaka bez skóry - 1/2 sztuki (100 g)\n" +
            "Cebula czerwona - 1/4 sztuki (27 g)\n" +
            "Czosnek - 1/3 sztuki (2 g)\n" +
            "Oliwa z oliwek - 1/3 łyżki (3 ml)\n" +
            "Pomidor - 1 sztuka (170 g)\n" +
            "Przyprawy - kolendra liście, suszona - 1 łyżeczka (3 g)\n" +
            "Przyprawy - majeranek, suszony - 1/3 łyżeczki (1 g)\n" +
            "Przyprawy - pieprz czarny, suszony - 1 łyżeczka (1 g)\n" +
            "Sałata lodowa - 1/7 sztuki (50 g)\n" +
            "Tortilla pszenna Carrefour - 1 sztuka (60 g)" +
            "" +
            "Przygotowanie:" +
            "Mięso pokrój w paski, posyp pieprzem oraz majerankiem.\n" +
            "Odstaw na ok.10 minut, następnie na patelni rozgrzej olej i\n" +
            "smaż mięso, aż się zarumieni. Odstaw mięso, aby ostygło\n" +
            "i dodaj posiekaną kolendrę. Sałatę lodową porwij na\n" +
            "mniejsze kawałki. Na każdym placku tortilli połóż mięso\n" +
            "oraz sałatę i mocno zwiń. Obok połóż salsę\n" +
            "pomidorową.Przygotuj salsę: pomidory oraz cebulę pokrój\n" +
            "w drobną kostkę i przełóż do miski, dodaj drobno\n" +
            "posiekaną kolendrę, sok z limonki, czosnek oraz oliwę z\n" +
            "oliwek. Możesz wszystko zmiksować na gładki sos i\n" +
            "włożyć go do tortilli.",
            category: [meals.p2]
        },
        {

            uid: "2" ,
            name: "Pasta twarogow-jajeczna",
            kcal: 120,
            recipe:"Składniki:\n" +
            "Szczypiorek - 1/3 sztuki (7 g)\n" +
            "Jajka kurze, na twardo - 1 i 1/3 sztuki (75 g)\n" +
            "Przyprawy - kminek, suszony - 1/3 łyżeczki (1 g)\n" +
            "Przyprawy - pieprz czarny, suszony - 1 łyżeczka (1 g)\n" +
            "Sól biała - 1/3 łyżeczki (2 g)\n" +
            "Śmietana kwaśna, bez tłuszczu - 2/3 łyżki (17 g)\n" +
            "Twaróg półtłusty Polmlek - 2 i 1/4 plastra (67 g)" +
            "" +
            "Przygotowanie:" +
            "Ser dobrze ugnieść, jaja ugotować na twardo, a następnie\n" +
            "posiekać i wymieszać dokładnie składniki. Następnie\n" +
            "dodać śmietanę, posiekać szczypior, dodać pieprz, sól,\n" +
            "kminek i wymieszać dokładnie powtórnie.",
            category: [meals.p3]
        },
        {
            uid:"3",
            name: "Kasza jaglana z gruszką",
            kcal: 110,
            recipe:
            "Składniki:\n" +
            "Cytryna - 1/8 sztuki (5 g)\n" +
            "Gruszka - 1 i 1/4 sztuki (150 g)\n" +
            "Imbir, korzeń - 1/8 sztuki (5 g)\n" +
            "Kasza jaglana - 1/4 szklanki (50 g)\n" +
            "Ser twarogowy chudy - 1/3 plastra (10 g)\n" +
            "Żurawina cała premium ROLNIK - 2 łyżki (50 g)"+
            "" +
            "Przygotowanie:" +
            "Kaszę wsyp na sitko, przepłucz zimną wodą i wrzuć do\n" +
            "niewielkiej ilości gotującej się wody. Gotuj na małym\n" +
            "ogniu 10 minut. Gruszkę pokrój w kostkę. Kilka kawałków\n" +
            "odłóż na później do dekoracji. Skrop sokiem z cytryny,\n" +
            "żeby nie ściemniały. Pozostałe cząstki przełóż do\n" +
            "drugiego garnka i podduś razem z żurawiną. Po 10\n" +
            "minutach gotowania przełóż kaszę do garnka z gruszką i\n" +
            "żurawiną. Dodaj imbir, i gotuj przez 2 minuty, mieszając.\n" +
            "Kiedy kasza zmięknie, przykryj garnek i pozostaw do\n" +
            "całkowitego wchłonięcia wodę Tak przygotowane danie\n" +
            "posyp rozdrobnionym twarogiem i cząstkami gruszki.",
            category:[meals.p1]
        },

        {
            uid:"4",
            name: "Naleśniki szpinakowe z fetą",
            kcal: 210,
            recipe:"Składniki:\n" +
            "Jaja kurze całe - 1/2 sztuki (25 g)\n" +
            "Czosnek - 1 i 2/3 sztuki (8 g)\n" +
            "Masło - 1 łyżka (5 g)\n" +
            "Mąka pszenna biała - 8 i 1/3 łyżki (125 g)\n" +
            "Mleko spożywcze 2% tłuszczu - 1/4 szklanki (60 ml)\n" +
            "Oliwa z oliwek - 1/2 łyżki (5 ml)\n" +
            "Ser feta - 1/4 kostki (50 g)\n" +
            "Sól biała - 1/6 łyżeczki (1 g)\n" +
            "Szpinak, świeży - 8 garści (200 g)\n" +
            "Woda - 1/4 szklanki (60 ml)"+
            "" +
            "Przygotowanie:" +
            "Wymieszaj jajko z mąką i solą. Stopniowo dodawaj mleko i\n" +
            "wodę, cały czas mieszaj ciasto. Gdy będziesz miał już\n" +
            "ciasto o jednolitej konsystencji, dodaj masło. Odstaw\n" +
            "ciasto na 30 minut.\n" +
            "Po tym czasie smaż naleśniki na rozgrzanej patelni około\n" +
            "1 minuty z każdej strony.\n" +
            "Szpinak umyj, odkrój zgrubiałe łodyżki, czosnek posiekaj.\n" +
            "Na patelni rozgrzej oliwę, dodaj czosnek i szpinak. Smaż\n" +
            "przez 2–3 minuty, aż szpinak zmieni kolor i\n" +
            "zmniejszy swą objętość.\n" +
            "Po usmażeniu, szpinak odsącz na sicie, następnie\n" +
            "wymieszaj w misce z pokruszonym serem feta.\n" +
            "Farszem smaruj naleśniki, składaj w trójkąty.",
            category:[meals.p2]
        },

        {
            uid:"5",
            name: "Koktajl jaglano-truskawkowy",
            kcal: 110,
            recipe:"Składniki:\n" +
            "Kasza jaglana - 1/3 szklanki (60 g)\n" +
            "Miód pszczeli - 1 łyżka (24 g)\n" +
            "Mleko 1,5% tł. SM Mlekovita - 1/2 szklanki (125 ml)\n" +
            "Morele, suszone - 1/5 garści (20 g)\n" +
            "Truskawki - 3/4 szklanki (120 g)\n" +
            "Woda mineralna niegazowana - 1/3 szklanki (100 ml)\n" +
            "Sok z cytryny - 1/2 łyżki (3 ml)"+
            "" +
            "Przygotowanie:" +
            "Suszone morele pokroić, zmiksować z ugotowaną kaszą\n" +
            "jaglaną i wodą na jednolitą masę.Truskawki opłukać,\n" +
            "osuszyć, oczyścić z szypułek i połączyć ze zmiksowaną\n" +
            "kaszą. Dodać miód, sok z cytryny, mleko i ponownie\n" +
            "zmiksować na gładką masę. Jeśli konsystencja koktajlu\n" +
            "będzie za gęsta, dodać odrobinkę wody mineralnej\n" +
            "niegazowanej. Podawać z truskawkami i mietą.",
            category:[meals.p1]
        },


        {
            uid:"6",
            name: "Omlet orkiszowy",
            kcal: 150,
            recipe:"Składniki:\n" +
            "Jaja kurze całe - 2 sztuki (100 g)\n" +
            "Mleko 2% OSM - 1/8 szklanki (20 ml)\n" +
            "Musztarda - 1 łyżeczka (10 g)\n" +
            "Oliwki zielone bez pestek Bakalland - 10 sztuk (30 g)\n" +
            "Papryka czerwona - 1/7 sztuki (30 g)\n" +
            "Płatki orkiszowe Ekoprodukt - 1/5 szklanki (20 g)\n" +
            "Pomidor - 2/3 sztuki (100 g)\n" +
            "Ser feta - 1/7 kostki (30 g)\n" +
            "Sałata masłowa - 1/8 sztuki (20 g)"+
            "" +
            "Przygotowanie:" +
            "Żółtka oddziel od białek. Płatki orkiszowe zmiksuj lub\n" +
            "rozdrobnij, wymieszaj z żółtkami i dodaj mleko. Białka ubij\n" +
            "i dodaj do reszty. Wylej na patelnię na roztopione masło\n" +
            "klarowane. Piecz z dwóch stron. Gotowy omlet posmaruj\n" +
            "fetą i połóż na niego warzywa. Fajnie pasuje musztarda\n" +
            "francuska.",
            category:[meals.p1]
        },
        {
            uid:"7",
            name: "Kolorowy chłodnik",
            kcal: 140,
            recipe:"Składniki:\n" +
            "Kefir 1,5% tłuszczu OSM - 1 szklanka (220 ml)\n" +
            "Koperek świeży - 1/2 łyżeczki (2 g)\n" +
            "Ogórek - 1 sztuka (170 g)\n" +
            "Przyprawy - bazylia, suszona - 1 łyżeczka (1 g)\n" +
            "Przyprawy - majeranek, suszony - 1/3 łyżeczki (1 g)\n" +
            "Rzodkiewka - 3 sztuki (45 g)"+
            "" +
            "Przygotowanie:" +
            "Ogórka i rzodkiewkę zetrzyj na tarce o grubych oczkach.\n" +
            "Wymieszaj z kefirem. Posyp koperkiem i dopraw\n" +
            "ulubionymi ziołami.",
            category:[meals.p2]
        },

        {
            uid:"8",
            name: "Chleb z szynką",
            kcal: 190,
            recipe:"Składniki:\n" +
            "Chleb sitkowy - 2 kromki (90 g)\n" +
            "Masło - 1/2 łyżeczki (2 g)\n" +
            "Szynka gotowana z indyka - 2 plasterki (50 g)" +
            "" +
            "Przygotowanie:" +
            "Chleb posmaruj masłem, dodaj 2 plasterki szynki.",
            category:[meals.p3]
        },

        {
            uid:"9",
            name: "Płatki śniadaniowe z mlekiem",
            kcal: 230,
            recipe: "Składniki:\n" +
            "Płatki corn flakes -  (150 g)\n" +
            "Mleko 2% - (200 ml)" +
            "" +
            "Przygotowanie:" +
            "Płatki zalej ciepłym mlekiem, dodaj miodu do smaku",
            category:[meals.p1,]
        },

        {
            uid:"10",
            name: "Owsianka z musem malinowym",
            kcal: 270,
            recipe:"Składniki:\n" +
            "Maliny - 3/4 szklanki (100 g)\n" +
            "Miód pszczeli - 1/2 łyżki (13 g)\n" +
            "Mleko 1,5% tł. uht OSM - 1/2 szklanki (115 ml)\n" +
            "Otręby pszenne Sante - 1/2 łyżki (2 g)\n" +
            "Płatki owsiane Sante 500g - 1 i 1/2 łyżki (15 g)"+
            "" +
            "Przygotowanie:" +
            "Gotuj mleko z otrębami, maliny rozgnieć i podgrzej z\n" +
            "łyżeczką miodu, aż będą miękkie. Owsiankę podaj z\n" +
            "ciepłym musem.",
            category:[meals.p3]
        },


        {
            uid:"11",
            name: "Kasza bulgur z humusem",
            kcal: 220,
            recipe:"Składniki:\n" +
            "Cebula - 1/4 sztuki (25 g)\n" +
            "Cieciorka konserwowa - 3 łyżki (60 g)\n" +
            "Czosnek - 1/3 sztuki (2 g)\n" +
            "Ksylitol Sante - 2/3 łyżeczki (4 g)\n" +
            "Olej kokosowy - 1/3 łyżki (3 ml)\n" +
            "Oliwa z oliwek - 3/4 łyżki (8 ml)\n" +
            "Papryka czerwona - 1/4 sztuki (63 g)\n" +
            "Pietruszka, natka - 1/6 łyżeczki (1 g)\n" +
            "Pomidor - 3/4 sztuki (130 g)\n" +
            "Pomidor, suszony na słońcu - 2 i 3/4 plastra (19 g)\n" +
            "Woda - 1/7 szklanki (32 ml)\n" +
            "Sok z cytryny - 1/6 łyżki (1 ml)\n" +
            "Kasza bulgur - 4 i 2/3 łyżki (60 g)"+
            "" +
            "Przygotowanie:" +
            "Składniki na 4 równe porcje dania: Najpierw przygotować\n" +
            "hummus.Składniki na 8 czubatych łyżek: puszka\n" +
            "ciecierzycy, ząbek czosnku, 1/2 szklanki wody, 3 łyżki\n" +
            "oliwy z oliwek(30 ml), kilka kropel soku z cytryny, 5\n" +
            "plastrów suszonych pomidorów, szczypta soli. Wykonanie:\n" +
            "Pomidory(bez oleju i oliwy-Biedronka) zalać wrzątkiem i\n" +
            "odstawić na 10 minut. Po tym czasie osuszyć. Cieciorkę\n" +
            "przelać wodą na sitku. Cieciorkę wkładamy do blenedera i\n" +
            "miksujemy ze wszystkimi składnikami na gładką masę.\n" +
            "Następnie ugotuj 240 g kaszy(po 60 g na porcje).Kaszę\n" +
            "ugotuj na sypko ,wsyp zawartość opakowania na sito,\n" +
            "przepłucz zimną wodą. W garnku zagotuj dwukrotną ilość\n" +
            "w stosunku do kaszy wody. Dosyp kaszę, zamieszaj i gotuj\n" +
            "pod przykryciem z lekko uchyloną pokrywką, aż wchłonie\n" +
            "cały płyn i będzie al'dente (w razie potrzeby dolej odrobinę\n" +
            "gorącej wody). Gotuj mniej więcej 7-9 minut, nie mieszaj w\n" +
            "trakcie. Po ugotowaniu ponownie przepłucz zimną wodą.\n" +
            "Pomidory pokrój drobno 8 sztuk suszonych\n" +
            "pomidorów(składniki: 3 pomidory, papryka, cebula,\n" +
            "papryka ostra, papryka słodka, 2 łyżeczki ksylitolu, sól,\n" +
            "pieprz, 3/4 łyżki oleju kokosowego-12 g).\n" +
            "Wykonanie:Pomidory sparz i obierz ze skórki. Pokrój w\n" +
            "kostkę. Paprykę umyj, pozbądź się gniazd nasiennych i\n" +
            "również pokrój.Cebulę pokrój w kostkę, lekko podsmaż na\n" +
            "patelni z olejem kokosowym. Dodaj pomidory i paprykę,\n" +
            "zalej niewielką ilością wody i duś pod przykryciem na\n" +
            "średnim ogniu, aż większość płynu odparuje (ok. 30\n" +
            "minut).Zdejmij sos z ognia, odstaw do lekkiego\n" +
            "przestygnięcia. Następnie przelej do kielicha blendera,\n" +
            "dodaj przyprawy i ksylitol zmiksuj na gładko.Gdy\n" +
            "wszystkie składniki przestygną, połącz je ze sobą -\n" +
            "wymieszaj kaszę z sosem, posiekaną natką pietruszki,\n" +
            "ziołami i pokrojonymi drobno pomidorami. Na dnie\n" +
            "miseczki rozsmaruj hummus(po 2 czubate łyżki do każdej\n" +
            "miski), na to połóż bulgur z dodatkami.",
            category:[meals.p2]
        },

        {
            uid:"12",
            name:"Kakaowa owsianka z bananem i rodzynkami",
            kcal: 205,
            recipe:"Składniki:" +
            "Banan - 3/4 sztuki (90 g)\n" +
            "Kakao ciemne Gellwe - 1/2 łyżki (5 g)\n" +
            "Płatki owsiane - 1/3 szklanki (40 g)\n" +
            "Rodzynki suszone - 1 garść (30 g)" +
            "" +
            "Przygotowanie" +
            "płatki owsiane ugotuj na wodzie i dodaj kakao. Banana\n" +
            "pokrój w plasterki i wraz z rodzynkami dodaj do owsianki.\n" +
            "Przypraw cynamonem i imbirem.",
            category: [ meals.p1]
        },

        {
            uid:"13",
            name: "Placuszki z kaszy manny",
            kcal: 211,
            recipe: "Składniki:" +
            "Jaja kurze całe - 1/5 sztuki (10 g)\n" +
            "Kasza manna - 1/5 szklanki (34 g)\n" +
            "Masło - 1 i 1/4 łyżki (6 g)\n" +
            "Mleko 2% SM Mlekovita - 1/5 szklanki (50 ml)" +
            "" +
            "Przygotowanie:" +
            "Kaszę wymieszać z mlekiem i odstawić na\n" +
            "min. 20minut. Do naczynia włożyć masło i ustawić\n" +
            "2min/50stopni/obr1, dodać napęczniałą kaszę, żółtka i\n" +
            "łyżeczkę cukru waniliowego. Gotowe ciasto przełożyć do\n" +
            "miski. Naczynie miksujące umyć, wytrzeć do sucha,\n" +
            "włożyć motylek, dodać białko i ubijać 2min/obr3.5.\n" +
            "Gotową pianę przełożyć do miski z ciastem, delikatnie\n" +
            "wymieszać i smażyć na patelni z odrobiną oleju np.\n" +
            "kokosowego lub masła klarowanego.\n" +
            "Przepis tradycyjny: Kaszę wymieszać z mlekiem -\n" +
            "odstawić na ok. 20min. Masło rozpuścić, dodać do niego\n" +
            "kaszę i żółtka - dokładnie wymieszać. Z białka ubić pianę,\n" +
            "dodać do powstałego ciasta i wymieszać delikatnie.\n" +
            "Smażyć na patelni z odrobiną oleju np. kokosowego lub\n" +
            "masła klarowanego.",
            category: [meals.p1]
        },


        {
            uid:"14",
            name: "Jagodowa owsianka z orzechami",
            kcal: 201,
            recipe:
            "Składniki:" +
            "Czarne jagody - 2 szklanki (250 g)\n" +
            "Orzechy laskowe - 1/3 garści (12 g)\n" +
            "Płatki owsiane - 1/2 szklanki (50 g)" +
            "" +
            "Przygotowanie:" +
            "Płatki ugotuj. Jagody zmiksuj i dodaj do owsianki razem z\n" +
            "posiekanymi orzechami.",
            category: [meals.p1]
        },

        {
            uid:"15",
            name: "Fit deser a`la Snickers",
            kcal: 250,
            recipe:
            "Składniki:" +
            "Cukier waniliowy - 2 łyżeczki (8 g)\n" +
            "Daktyle drylowane Bakalland - 1/2 garści (23 g)\n" +
            "Herbatniki - 3 sztuki (15 g)\n" +
            "Kakao ciemne Gellwe - 1/2 łyżki (5 g)\n" +
            "Kasza jaglana - 1/5 szklanki (35 g)\n" +
            "Masło orzechowe Felix - 3/4 łyżki (15 g)\n" +
            "Mleko spożywcze 2% tłuszczu - 1/8 szklanki (25 ml)\n" +
            "Orzeszki ziemne solone Intersnack - 1 łyżka (15 g)\n" +
            "Woda - 1 szklanka (250 ml)" +
            "" +
            "Przygotowanie:" +
            "Do jednej miseczki wkładamy daktyle, zalewamy\n" +
            "wrzątkiem, aby daktyle zmiękły. Kaszę jaglaną gotujemy w\n" +
            "wodzie wraz z cukrem waniliowym oraz mlekiem. Kasza\n" +
            "powinna wsiąknąć całość wody i zwiększyć swoją\n" +
            "objętość. Pod koniec dodajemy kakao, mieszamy\n" +
            "dokładnie, odstawiamy do przestygnięcia, blendujemy na\n" +
            "gładki mus. Do naczynia miksującego wrzucamy\n" +
            "herbatniki, orzeszki ziemne ustawiamy 3s/ obr 5. Połowę\n" +
            "masy orzechowej nakładamy do szklaneczek. Na to\n" +
            "nakładamy masę jaglaną. Później znowu orzeszki.Daktyle\n" +
            "blendujemy na gładki mus 15s/ obr7 dodajemy masło\n" +
            "orzechowe , mieszamy łyżką, nakładamy na masę\n" +
            "orzeszków do szklanek.",
            category: [meals.p1]
        },

        {
            uid:"16",
            name: "Jaglany koktajl ananasowy",
            kcal: 179,
            recipe:
            "Składniki:" +
            "Ananas - 1/7 sztuki (90 g)\n" +
            "Banan - 3/4 sztuki (90 g)\n" +
            "Daktyle drylowane Bakalland - 1/3 garści (20 g)\n" +
            "Kasza jaglana - 1/4 szklanki (45 g)\n" +
            "Przyprawy - kurkuma, mielona - 1/4 łyżeczki (1 g)\n" +
            "Woda mineralna niegazowana - 1/3 szklanki (100 ml)\n" +
            "Sok z cytryny - 1/2 łyżki (3 ml)" +
            "" +
            "Przygotowanie:" +
            "Owoce umyć obrać i pokroić. daktyle i morele posiekać.\n" +
            "Zmiksować razem z kaszą jaglaną i sokiem z cytryny.\n" +
            "Dodać ok 200ml wody i szczyptę kurkumy, ponownie\n" +
            "zmiksować na jednolitą konsystencję. Jeśli koktajl będzie\n" +
            "za gęsty, dodać niegazowanej wody mineralnej. Gotowy\n" +
            "podać z listkiem mięty i kawałkiem ananasa.",
            category: [meals.p3]
        },

        {
            uid:"17",
            name: "Burgery z mięsem i szpinakiem",
            kcal: 317,
            recipe:
            "Składniki:" +
            "Jaja kurze całe - 1/3 sztuki (17 g)\n" +
            "Cebula - 1/3 sztuki (34 g)\n" +
            "Czosnek - 3/4 sztuki (4 g)\n" +
            "Indyk, mięso mielone - 1/2 szklanki (100 g)\n" +
            "Koncentrat pomidorowy 30% - 2/3 łyżeczki (10 g)\n" +
            "Olej rzepakowy, uniwersalny - 2/3 łyżki (7 ml)\n" +
            "Ryż brązowy - 1/5 szklanki (34 g)\n" +
            "Szpinak, świeży - 1 i 1/3 garści (34 g)" +
            "" +
            "Przygotowanie:" +
            "Potrzebne przyprawy: 1 łyżeczka czerwonej słodkiej\n" +
            "papryki, 1 łyżeczka kurkumy, 1 łyżeczka oregano, 1/3\n" +
            "łyżeczki ostrej Ryż ugotować w koszyczku na półtwardo.\n" +
            "DO naczynia miksującego dodać cebulę i czosnek, ustawić\n" +
            "5s/obr.3. Następnie dodać olej i włączyć 2min/temp. 120/\n" +
            "obr.2. Dodać mięso, doprawić pieprzem i przyprawami.\n" +
            "Dodać koncentrat i jajko - wymieszać 1min/obr 4\n" +
            "Następnie, dodać ryż i ponownie wymieszać, ale\n" +
            "dodatkowo z pomocą kopystki. Szpinak zblanszować i\n" +
            "posiekać na desce. Dodać do mięsa i ryżu. .Uformować\n" +
            "kotlety. Piec ok. 20-25minut w piekarniku w temp.\n" +
            "180stopni.",
            category: [meals.p2]
        },

        {
            uid:"18",
            name: "Bataty z dipem serowym",
            kcal: 276,
            recipe:
            "Składniki:" +
            "Czosnek - 1 sztuka (5 g)\n" +
            "Jogurt naturalny 2% OSM - 2 łyżki (50 g)\n" +
            "Olej rzepakowy, uniwersalny - 1 łyżka (10 ml)\n" +
            "Ser twarogowy chudy - 2 i 1/3 plastra (70 g)\n" +
            "Batat - 2/3 sztuki (130 g)" +
            "" +
            "Przygotowanie:" +
            "bataty pokrój w paski - jak frytki. Oprósz tymiankiem,\n" +
            "wędzoną papryką i skrop delikatnie olejem. Czosnek\n" +
            "zmiażdż, dodaj twaróg i jogurt i zmiksuj to na gładką\n" +
            "masę. bataty piecz ok. 40 minut w temp. 190stopni. Jedz\n" +
            "je maczając w powstałym dipie.",
            category:[meals.p2]
        },

        {
            uid:"19",
            name: "Naleśniki",
            kcal: 327,
            recipe:
            "Składniki:" +
            "Mąka gryczana - 1/8 szklanki (13 g)\n" +
            "Mąka pszenna biała - 1 i 1/3 łyżki (20 g)\n" +
            "Mleko 0,5% uht SM - 1/4 szklanki (58 ml)\n" +
            "Olej kokosowy - 3/4 łyżki (8 ml)\n" +
            "Woda mineralna niegazowana - 1/5 szklanki (45 ml)\n" +
            "Sól morska Sante - 1 szczypta (1 g)" +
            "" +
            "Przygotowanie:" +
            "Do miski wsyp mąkę i sól, wymieszaj. Wlej wodę i mleko,\n" +
            "ponownie wymieszaj bądź użyj miksera aby otrzymać\n" +
            "gładkie ciasto. Przed samym smażeniem dodaj do ciasta\n" +
            "tłuszcz i jeszcze raz wymieszaj. Smaż naleśniki.",
            category:[meals.p2]
        },

        {
            uid:"20",
            name:"Indyk z warzywami",
            kcal: 354,
            recipe:
            "Składniki:" +
            "Brokuły - 1/5 sztuki (100 g)\n" +
            "Indyk, mięso z podudzia bez skóry - 1 sztuka (150 g)\n" +
            "Kalafior - 1/8 sztuki (100 g)\n" +
            "Marchew - 2/3 sztuki (30 g)\n" +
            "Przyprawy - bazylia, suszona - 1 łyżeczka (1 g)\n" +
            "Przyprawy - pieprz czarny, suszony - 1 łyżeczka (1 g)\n" +
            "Ryż brązowy - 1/6 szklanki (30 g)\n" +
            "Sól morska Sante - 1 szczypta (1 g)" +
            "" +
            "Przygotowanie:" +
            "Wstaw ryż do gotowania. Obierz i pokrój w plasterki\n" +
            "marchewkę. Odetnij różyczki z kalafiora i brokuła.\n" +
            "Warzywa wrzuć na parę. Dodaj sól, pieprz, bazylię. indyka\n" +
            "pokrój na paseczki, rozbij lekko i obtocz w przyprawach -\n" +
            "dodaj do warzyw. Gotuj wszystko razem na parze ok.\n" +
            "15min.",
            category:[meals.p2]
        },

        {
            uid:"21",
            name:"Zapiekanki domowe",
            kcal: 302,
            recipe:
            "Składniki:" +
            "Bułka grahamka - 2/3 sztuki (50 g)\n" +
            "Kukurydza konserwowa Jeronimo Martins - 1 łyżka (15 g)\n" +
            "Pieczarka uprawna - 2 sztuki (40 g)\n" +
            "Por - 1/8 sztuki (10 g)\n" +
            "Ser gouda - 3/4 plastra (20 g)\n" +
            "Szynka z indyka - 40 g" +
            "" +
            "Przygotowanie:" +
            "Na bułkę połóż pokrojone w plastry pieczarki i pora, na to\n" +
            "kukurydzę. Na koniec połóż wędlinę i ser żółty. Tak\n" +
            "przygotowane zapiekanki wstaw na nagrzanego piekarnika\n" +
            "na 180 stopni i piecz ok. 15minut. Możesz też położyć je\n" +
            "na patelni, przykryć pokrywką i na bardzo malym ogniu\n" +
            "podgrzewać aż bułka będzie chrupiąca a ser żółty się\n" +
            "rozpuści",
            category:[meals.p2]
        },

        {
            uid:"22",
            name: "Sernik z ciastkiem i galaretką",
            kcal: 289,
            recipe:
            "Składniki:" +
            "Jogurt naturalny 2% OSM - 2 i 3/4 łyżki (70 g)\n" +
            "Kakao 16%, proszek - 1/8 łyżki (1 g)\n" +
            "Masło - 1 łyżka (5 g)\n" +
            "Ser twarogowy chudy - 1 i 2/3 plastra (50 g)\n" +
            "Sok czarna porzeczka MWS - 1/7 szklanki (30 ml)\n" +
            "Syrop klonowy - 3/4 łyżeczki (4 ml)\n" +
            "Żelatyna - 3/4 łyżeczki (3 g)\n" +
            "Ciasteczka owsiane z masłem OSKROBA - 20 g" +
            "" +
            "Przygotowanie:" +
            "Ciasteczka rozgnieć wałkiem lub w blenderze, dodaj\n" +
            "miękkie masło i kakao. Wymieszaj tak, żeby dokładnie\n" +
            "połączyły się składniki. Powstałe ciasto przełóż do\n" +
            "tortownicy i mocno \" uklep\". Jeśli robisz małą porcję,\n" +
            "możesz powstałym ciastem wypełnić pucharki. Wstaw do\n" +
            "lodówki. Do miski wrzuć ser i część jogurtu, mieszaj\n" +
            "mikserem lub blenderem, aż uzyskasz gładki krem.\n" +
            "Następnie dodaj resztę jogurtu, syrop klonowy i wanilię.\n" +
            "Wymieszaj, żeby składniki dobrze się połączyły. Żelatynę\n" +
            "(pół porcji) rozpuść w 50ml gorącej wody, dokładnie\n" +
            "wymieszaj i powstały klarowny płyn wlej do masy serowej.\n" +
            "Ponownie dokładnie ją wymieszaj, tak żeby żelatynę\n" +
            "rozprowadzić po całej masie. Blaszkę z ciastem lub\n" +
            "pucharki, wyjmij z lodówki i wylej na to powstałą masę\n" +
            "serową. Wstaw ponownie blaszkę do lodówki. Sok\n" +
            "domowy podgrzej w garnku, następnie zdejmij z ognia i\n" +
            "wsyp drugą połowę żelatyny, mieszaj do jej całkowitego\n" +
            "rozpuszczenia. Odstaw aby sok przestygł. Jak już będzie\n" +
            "chłodny wylej na ciasto. I ponownie wstaw do lodówki.\n" +
            "Ciasto jest gotowe do jedzenia dopiero, jak galaretka na\n" +
            "górze się zsiądzie.",
            category:[meals.p3]
        },

        {
            uid:"23",
            name: "Dorsz pieczony",
            kcal: 312,
            recipe:
            "Składniki:" +
            "Dorsz świeży, filety bez skóry - 1 i 1/2 sztuki (150 g)\n" +
            "Cebula - 1/4 sztuki (25 g)\n" +
            "Cytryna - 1/3 sztuki (30 g)\n" +
            "Czosnek - 1/3 sztuki (2 g)\n" +
            "Koncentrat pomidorowy 30% - 1 i 1/2 łyżeczki (23 g)\n" +
            "Oliwa z oliwek - 1/3 łyżki (3 ml)\n" +
            "Papryka zielona - 1/4 sztuki (35 g)\n" +
            "Pietruszka, natka - 2 i 1/4 łyżeczki (13 g)\n" +
            "Pomidor - 1 i 1/4 sztuki (213 g)\n" +
            "Przyprawy - pieprz czarny, suszony - 1 łyżeczka (1 g)" +
            "" +
            "Przygotowanie:" +
            "Oliwę rozgrzać w dużym rondlu. Cebulę obrać i pokroić w\n" +
            "plasterki. Paprykę pokroić w paski, a pomidory w plastry.\n" +
            "Warzywa wrzucić do rondla, dodać posiekany czosnek,\n" +
            "przykryć i smażyć 6 - 8 min od czasu do czasu mieszając.\n" +
            "Rybę pokroić w 5 cm kawałki i skropić sokiem z połowy\n" +
            "cytryny. Pietruszkę posiekać. Do warzyw dodać koncentrat\n" +
            "pomidorowy. Cytrynę pokroić w plasterki i rozłożyć\n" +
            "warstwą na warzywach. Na cytrynie ułożyć rybę, doprawić\n" +
            "solą, pieprzem i natką, przykryć i dusić ok. 15 min. Na\n" +
            "ostatnie 5 min. odkryć, aby sos odparował.",
            category:[meals.p2]
        },

        {
            uid:"24",
            name: "Sałatka z makaronem",
            kcal: 215,
            recipe:
            "Składniki:" +
            "Czosnek - 2 sztuki (10 g)\n" +
            "Jogurt naturalny 2% OSM - 4 łyżki (100 g)\n" +
            "Koperek świeży - 7 i 1/2 łyżeczki (30 g)\n" +
            "Majonez light Winiary - 1/3 łyżki (10 g)\n" +
            "Ogórek - 1 i 2/3 sztuki (300 g)\n" +
            "Papryka czerwona - 1/3 sztuki (100 g)\n" +
            "Pietruszka, natka - 1 i 2/3 łyżeczki (10 g)\n" +
            "Rzodkiewka - 13 i 1/3 sztuki (200 g)\n" +
            "Makaron bezjajeczny z semoliny - 50 g" +
            "" +
            "Przygotowanie:" +
            "Makaron ugotuj wg zaleceń na opakowaniu. Warzywa\n" +
            "pokrój w drobniutką kostkę. Wymieszaj z makaronem,\n" +
            "dodaj jogurt z czosnkiem i posiekaną zieleninkę.",
            category:[meals.p3]
        },

        {
            uid:"25",
            name: "Drożdżówki z jabłkami",
            kcal: 247,
            recipe:
            "Składniki:" +
            "Jaja kurze - JEDNO średnie jajko (60g) - 1/8 sztuki (5 g)\n" +
            "Cukier - 1/8 łyżki (1 g)\n" +
            "Drożdże babuni świeże Lesaffre - 1/8 sztuki (4 g)\n" +
            "Jabłko - 3/4 sztuki (150 g)\n" +
            "Masło - 1 i 2/3 łyżki (8 g)\n" +
            "Mąka pszenna biała - 3 i 1/3 łyżki (50 g)\n" +
            "Mleko 2% OSM - 1/8 szklanki (22 ml)" +
            "" +
            "Przygotowanie:" +
            "jabłka obrać, pokroić w kostkę i wrzucić do garnka podlać\n" +
            "50ml wody i dusić, aż będą miękkie i odparuje woda – ok.\n" +
            "25min – często mieszając, aby się nie przypaliły. Do\n" +
            "ciepłego mleka dodać drożdże i ksylitol, wymieszać.\n" +
            "Następnie dodać do mąki i połączyć z reszta składników,\n" +
            "zagnieść ciasto. Dobrze wyrobić i odstawić na pół godziny\n" +
            "do wyrośnięcia.\n" +
            "Odrywać niewielkie kulki ciasta, rozgnieść, w środek\n" +
            "włożyć 2 łyżeczki jabłek i uformować bułeczkę. Układać\n" +
            "na blaszce wyłożonej papierem i piec ok. 20-25 w\n" +
            "temperaturze 200stopni C.",
            category:[meals.p3]
        },

        {
            uid:"26",
            name: "Serek z malinami",
            kcal: 189,
            recipe:
            "Składniki:" +
            "Borówka amerykańska - 2 garście (100 g)\n" +
            "Maliny - 3/4 szklanki (100 g)\n" +
            "Serek homogenizowany naturalny OSM w Łowiczu - 12 i\n" +
            "1/2 łyżeczki (150 g)" +
            "" +
            "Przygotowanie:" +
            "Serek wymieszać z owocami.",

            category:[meals.p3]
        },






    ],

    addedMeals: [
        'sdfghjikjh56788'
    ]
}


console.log(JSON.stringify(database))



