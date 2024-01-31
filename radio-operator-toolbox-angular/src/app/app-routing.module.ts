import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsTabComponent as SettingsTabComponentXXXXXXXXXOLD } from './pages/settings-page-old/settings-tab.component';
import { HomeTabComponent } from './pages/home-page/home-page.component';
import { SarnegTabComponent } from './components/sarneg-tab/sarneg-tab.component';
import { VigenereTabComponent } from './components/vigenere-tab/vigenere-tab.component';
import { CorrespondenceBookPageComponent } from './pages/correspondence-book-page/correspondence-book-page.component';
import { TDRDataPageComponent as TDRDataPageComponent } from './pages/tdr-data-page/tdr-data-page.component';
import { AppSettingsPageComponent } from './pages/app-settings-page/app-settings-page.component';
import { NotepadPageComponent } from './pages/notepad-page/notepad-page.component';
import { CheatsheetComponent } from './pages/cheatsheet/cheatsheet.component';
import { ReportsPageComponent } from './pages/reports-page/reports-page.component';
import { ReportTabComponent } from './pages/reports-page/report-tab/report-tab.component';

const routes: Routes = [
  { path: 'sarneg-tab', component: SarnegTabComponent },
  { path: 'vigenere-tab', component: VigenereTabComponent },

  { path: 'reports-page', component: ReportsPageComponent },
  { path: 'report-tab', component: ReportTabComponent },
  { path: 'notepad-page', component: NotepadPageComponent },
  { path: 'cheatsheet-page', component: CheatsheetComponent },
  { path: 'correspondence-book-page', component: CorrespondenceBookPageComponent },
  
  { path: 'tdr-data-page', component: TDRDataPageComponent },
  { path: 'settings-page', component: AppSettingsPageComponent },

  { path: 'settings-tab', component: SettingsTabComponentXXXXXXXXXOLD },
  { path: 'home-tab', component: HomeTabComponent },
  { path: '', redirectTo: '/reports-tab', pathMatch: 'full' },
  { path: '**', component: ReportsPageComponent },
  // { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  // { path: '**', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
