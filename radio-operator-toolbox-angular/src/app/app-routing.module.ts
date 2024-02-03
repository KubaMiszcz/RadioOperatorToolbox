import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTabComponent } from './pages/home-page/home-page.component';
import { SarnegTabComponent } from './pages/encodings-page/sarneg-tab/sarneg-tab.component';
import { VigenereTabComponent } from './pages/encodings-page/vigenere-tab/vigenere-tab.component';
import { CorrespondenceBookPageComponent } from './pages/correspondence-book-page/correspondence-book-page.component';
import { TDRDataPageComponent as TDRDataPageComponent } from './pages/tdr-data-page/tdr-data-page.component';
import { AppSettingsPageComponent } from './pages/app-settings-page/app-settings-page.component';
import { NotepadPageComponent } from './pages/notepad-page/notepad-page.component';
import { CheatsheetComponent } from './pages/cheatsheet-page/cheatsheet-page.component';
import { ReportsPageComponent } from './pages/reports-page/reports-page.component';
import { ReportTabComponent } from './pages/reports-page/report-tab/report-tab.component';
import { EncodingsPageComponent } from './pages/encodings-page/encodings-page.component';
import { VICTabComponent } from './pages/encodings-page/vic-tab/vic-tab.component';
import { PolybiusSquareTabComponent } from './pages/encodings-page/polybius-square-tab/polybius-square-tab.component';

const routes: Routes = [
  { path: 'encodings-page', component: EncodingsPageComponent },
  { path: 'sarneg-tab', component: SarnegTabComponent },
  { path: 'vigenere-tab', component: VigenereTabComponent },
  { path: 'vic-tab', component: VICTabComponent },
  { path: 'polybius-tab', component: PolybiusSquareTabComponent },

  { path: 'reports-page', component: ReportsPageComponent },
  { path: 'report-tab', component: ReportTabComponent },
  { path: 'notepad-page', component: NotepadPageComponent },
  { path: 'cheatsheet-page', component: CheatsheetComponent },
  { path: 'correspondence-book-page', component: CorrespondenceBookPageComponent },
  
  { path: 'tdr-data-page', component: TDRDataPageComponent },
  { path: 'settings-page', component: AppSettingsPageComponent },

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
