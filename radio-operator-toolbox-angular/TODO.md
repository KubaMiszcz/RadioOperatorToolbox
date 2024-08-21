### repo: https://github.com/KubaMiszcz/RadioOperatorToolbox
      
# APKA ogolnie
- [ ] pliki sa w kat docu ze szkolenia 
- [ ] ikonki?
- [ ] icon info i modal z helpem #P1
- [ ] PL/EN version
- [ ] zwijak jako component #P1 
- [ ] Live save do localstorage #P1
- [ ] wylacz wszytskei helpy i przerob na tooltipy
- [ ] tlo ciemne
- [ ] toltip przy inputach czy dziala na mobile albo jakos to ogarnij albo jakis help? albo jako pytajnik w naglowku z dluzszym pojasnieniem jak nei bedzie miejsca


# DEV
- [ ]  - pangular form validators ogarnij #P1
- [ ] zeby dzialalo offline czyli ikonki i bootstap lokalnie
- [ ] favikony PWA cos sie nei skaluja, favikonka dla kazdego rozmiaru
- [ ] dzialanie offline - host yurself icons boostrpa etc
- [ ] cos usatwneia apply i kopiwanie nie do konca dziala
- [ ] na ekranie 4k menu sie rozwija - ???
- [ ] przekazuj jako caly tilemodel
- [ ] podstrony jako menuitems 
- [ ] Menuitems I favouritesz
- [ ] tiles dodaj favouties

# Home page
- [ ] splaash screen i nie pokazuj wiecej i sabe to local
- [ ] wskazowka zby pobrac apke z brancha gh-pages pobrac dist
- [ ] w pierwszym helpie link do issues [https://github.com/KubaMiszcz/RadioOperatorToolbox/issues]


# TABS
## TDR
dane z TDR
- [ ] `slowa kluczowe` w TDR?
- [ ] podmieniaj w tresci slowa na slowa kluczowe albo dodaj jako update, albo toggle w ustawieniach 
- [ ] kryptonimy przepatrz TDR i co sie przyda w poly zeby nie szyfrowac kartkami, i 
- [x] alarmy, 
- [ ] slowa kodowe, 
- [ ] po dyscji dodaj numer sieci do korespondenta zeby pokazywalo jako calosc , najwyzej ze spacja?
- [ ] authcode i corrNo w team i TDR
- [ ] rozroznia dni parzyste i nieparzyste do sarnega i vigernera?? nie, to se kazdy sam wkopiuje i usatwi aktywne slowo, ale dodaj to do TDR-page
- [ ] helpa zacznij
- [ ] - do teams dodaj authcode i correspondentcode
- [ ] - import export TDR na dole
- [ ]  losownik sarnega daj gdzeis indziej
    - [ ] w lsowniku do sarnego przleacnik PL EN
    - [ ] wsadzic gdzies lsowanie slwo do sarnego pewno w TDR
    - [ ] - codewords - losowanie codewords na dni parzyste i nieparzyste

## utworz meldunek
tworzenie meldunku na podst szablonu
- [ ] dodaj tab `utworz meldunek` #P1
- [ ] te wzory meldunkow
- [ ] pole z nazwa i geneorwanie nazwy np numer
- [ ] jakis `zapisz meldunek`

## meldunki  
archiwum istniejacych meldunkow
- [ ] dodaj tab `meldunki` #P1
- [ ] medevac
- [ ] saltr 
- [ ] saltur
- [ ] contact
- [ ] sitrep
- [ ] 5w
- [ ] CFF - obmyslic jak
- [ ] gotwa
- [ ] itp
- [ ] CRUD do tego



## kalkulatory
- [ ] dodaj tab `kalkulatory` #P1
- [ ] wzory na dlug anteny #bug dipol to 1/4fali anie 1.2, wartosci suwaikiem dodatkowo
- [ ] inverted vee to maks 120, kalk o ile podniejsc srodek przy dlugosci zeby nie przekrocyzc
- [ ] jka roadzc z duzym swr kiedy skraca a kiedy wydluzac 
- [ ] interpolacja po paraboli #P3
- [ ] te widgety do KF progagacji itp 
    - [ ] Widget HF propagation https://www.hamqsl.com/solar.html
      
## sciagawki
- [ ] dodaj tab `sciagawki` #P1
- [ ] alfabet nato
- [ ] dlugosc an

## kodowania 
- [ ] slowa kodowe kasuja sie po doswiezeniu #bug
- [ ] tabela vigenere/polibiusz? ostyluj #P3 
- [ ] rozroznia dni parzyste i nieparzyste do sarnega i vigernera??
- [ ]  szyfry:
    - [ ] zacnzijk kodowanie VIC #P3 
    - [ ] https://pl.wikipedia.org/wiki/Szachownica_Polibiusza
    - [ ] https://pl.wikipedia.org/wiki/Szyfr_Vigen%C3%A8re%E2%80%99a

## ustawienia
- [ ] zapis do lokacstorage po wyjsciu z taba #P1
- [ ] inne uswtaienia jako inputy checkboxy itp ale nie za wiele
    - [ ] dokladnosc nasych gridow - suwak 1/10/100,
- [ ] lista liter w alfabecie jako info

## Help page
- [ ]     - poasnienie jak gegnrowac rapoerty valuetypes itp
---
---
   
  


## eksperymenty
eksperymenty #P3
- [ ] dodaj tab `eksperymenty` #P1
- [ ] generator  - MIL-STD-2525B, MIL-STD-2525C, MIL-STD-2525D, APP6-B, APP6-D,
- [ ] - szukajka SIDC wg tych standardow nato milsymbols npm, https://www.spatialillusions.com/milsymbol/index.html

### ksiazka korespondencji 
ksiazka resjestr meldunkow itp korespondencji w czasie
- [ ] - rejestr korespondencji
- [ ] - Szukajka w książce korespondencji po dacie, nadawcy dbiorcy i tresci
- [ ] - bypassing color? width? ???
- [ ] - get rid of timestamp use DTG instead
- [ ] - sender recipien jako obikety a nie nicknamy ???
  
  
  
  
  
  
  
  
  
  
  
   
# angular template readme
---
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.3.
  
## Development server
  
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
  
## Code scaffolding
  
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
  
## Build
  
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
  
## Running unit tests
  
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
  
## Running end-to-end tests
  
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
  
## Further help
  
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.