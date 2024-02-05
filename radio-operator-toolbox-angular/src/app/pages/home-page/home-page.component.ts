import { AppDataService } from 'src/app/services/app-data.service';
import { AppService } from '../../services/app.service';
import { Component } from '@angular/core';
import { AppSettingsService } from 'src/app/services/app-settings.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomeTabComponent {
  appData = this.appDataService.appData;
  appSettings = this.appSettingsService.appSettings;
  helpLines = helpLines

  constructor(
    private appService: AppService,
    private appDataService: AppDataService,
    private appSettingsService: AppSettingsService
  ) {
  }

  saveAppData() {
    this.appDataService.saveAppData();
  }

  loadAppData() {
    this.appDataService.loadAppData();
  }

  validateLink(link: string | undefined): string {
    return link?.startsWith('/') ? link : '/' + link;
  }
}

const helpLines = 
  `- bledy, uwagi, propozycje mozna zglaszac tutaj:\n
  url|RadioOperatorToolbox/issues|https://github.com/KubaMiszcz/RadioOperatorToolbox/issues,\n
  - aplikacja to tak naprawde strona internetowa, dlatego jesli na komorce dodales skrot na pulpicie, to przy usuwaniu aplikacji usuwaj tylko skrot, jak dasz <odinstaluj> to odinstalujesz sobie przegladarke,
  - do wpisywania tekstu na komorce mozna uzywac dyktafonu: ikona mikrofonu na klawiaturze ekranowej,
  - apka do dzialania nie potrzebuje internetu, wystarczy sciagnac pliki stad:,
  url|RadioOperatorToolbox.zip|https://github.com/KubaMiszcz/RadioOperatorToolbox/archive/refs/heads/gh-pages.zip,
  rozpakowac do katalogu i kliknac w index.html,
  - zeby schowac wszystkie te wskazowki zaznacz checkbox w zakladce "Ustawienia"
  - CLEAR ALL czysci zapisane dane, ustawienia zostaja, ale i tak dobrze sobie z zakladki 'ustawienia' zawartosc tych pol gdzies zapisac do pliku tesktowego i potem latwo zaimportowac`
;
