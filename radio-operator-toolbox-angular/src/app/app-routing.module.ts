import { ReportsHistoryPageComponent } from './pages/reports/reports-history-page/reports-history-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SarnegTabComponent } from './pages/encodings-page/sarneg-tab/sarneg-tab.component';
import { VigenereTabComponent } from './pages/encodings-page/vigenere-tab/vigenere-tab.component';
import { CorrespondenceBookPageComponent } from './pages/correspondence-book-page/correspondence-book-page.component';
import { TDRDataPageComponent as TDRDataPageComponent } from './pages/tdr-data-page/tdr-data-page.component';
import { AppSettingsPageComponent } from './pages/app-settings-page/app-settings-page.component';
import { NotepadPageComponent } from './pages/notepad-page/notepad-page.component';
import { CheatsheetComponent } from './pages/DEPR/cheatsheet-page-DEPR/cheatsheet-page.component';
import { ReportsPageComponent } from './pages/DEPR/reports-page/reports-page.component';
import { ReportTabComponent } from './pages/reports/report-tab/report-tab.component';
import { EncodingsPageComponent } from './pages/encodings-page/encodings-page.component';
import { VICTabComponent } from './pages/encodings-page/vic-tab/vic-tab.component';
import { PolybiusSquareTabComponent } from './pages/encodings-page/polybius-square-tab/polybius-square-tab.component';
import { CreateReportPageComponent } from './pages/reports/create-report-page/create-report-page.component';
import { CalculatorsPageComponent } from './pages/calculators-page/calculators-page.component';
import { CheatsheetsPageComponent } from './pages/cheatsheets-page/cheatsheets-page.component';

const routes: Routes = [
  { path: 'tdr-data-page', component: TDRDataPageComponent },
  { path: 'create-report-page', component: CreateReportPageComponent },
  { path: 'report-tab', component: ReportTabComponent },
  { path: 'reports-history-page', component: ReportsHistoryPageComponent },
  
  
  { path: 'cheatsheets-page', component: CheatsheetsPageComponent },
  { path: 'calculators-page', component: CalculatorsPageComponent },

  
  { path: 'notepad-page', component: NotepadPageComponent },
  
  { path: 'correspondence-book-page', component: CorrespondenceBookPageComponent },
  
  { path: 'settings-page', component: AppSettingsPageComponent },
  
  // DEPRECATED //km
  { path: 'reports-page', component: ReportsPageComponent },

  { path: 'cheatsheet-page', component: CheatsheetComponent },
  { path: 'encodings-page', component: EncodingsPageComponent },
  { path: 'sarneg-tab', component: SarnegTabComponent },
  { path: 'vigenere-tab', component: VigenereTabComponent },
  { path: 'vic-tab', component: VICTabComponent },
  { path: 'polybius-tab', component: PolybiusSquareTabComponent },
  // END DEPERACTED
  
  { path: 'home-page', component: HomePageComponent },
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: '**', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
