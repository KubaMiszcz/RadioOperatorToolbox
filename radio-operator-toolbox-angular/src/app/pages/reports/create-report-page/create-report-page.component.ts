import { Component } from '@angular/core';
import { IReport } from 'src/app/models/report.model';
import { AppDataService } from 'src/app/services/app-data.service';
import { AppSettingsService } from 'src/app/services/app-settings.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-create-report-page',
  templateUrl: './create-report-page.component.html',
  styleUrls: ['./create-report-page.component.scss'],
})
export class CreateReportPageComponent {
  reportsTemplates: IReport[] = [];
  // savedReports: IReport[] = []; //km
  helpLines = helpLines;

  constructor(private appService: AppService, private appDataService: AppDataService, private appSettingsService: AppSettingsService) {
    this.reportsTemplates = this.appSettingsService.appSettings.reportsTemplates ?? [];
  }

  setCurrentReportTemplate(report: IReport) {
    this.appService.currentReportBS.next(report);
  }
}

const helpLines = `🟢 szablony meldunkow, mozna dodac swoje, najprosciej skopiowac ustawienia w zakladce ustawienia, wyedytowac istniejacy szablon i dokleic na koncu za klamerka ostatniego szablonu, pamietac o przecinkach miedzy klamerkami
  🟢 szablon 'Bazowy raport do edycji' ma wszystkie typy danych, 
  🟢 po wyklikaniu meldunku ponizej mamy gotowy meldunek do przeczytania,
  🟢 meldunek mozna skopiowac do TXT i wyslac sms/signalem/MGPO itp
  🟢 szablon mozna uzyc jako sciage do pisania meldunku na kartce

  ⚪ zapisywanie raportow - w planach
  `;
