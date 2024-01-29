import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsTabComponent as SettingsTabComponentXXXXXXXXXOLD } from './pages/settings-page-old/settings-tab.component';
import { HomeTabComponent } from './pages/home-page/home-page.component';
import { SarnegTabComponent } from './components/sarneg-tab/sarneg-tab.component';
import { VigenereTabComponent } from './components/vigenere-tab/vigenere-tab.component';
import { ReportPageComponent } from './pages/report-page/report-page.component';
import { CorrespondenceBookPageComponent } from './pages/correspondence-book-page/correspondence-book-page.component';
import { TDRDataPageComponent as TDRDataPageComponent } from './pages/tdr-data-page/tdr-data-page.component';
import { AppSettingsPageComponent } from './pages/app-settings-page/app-settings-page.component';

const routes: Routes = [
  { path: 'sarneg-tab', component: SarnegTabComponent },
  { path: 'vigenere-tab', component: VigenereTabComponent },

  { path: 'report-page', component: ReportPageComponent },
  { path: 'correspondence-book-page', component: CorrespondenceBookPageComponent },
  
  { path: 'tdr-data-page', component: TDRDataPageComponent },
  { path: 'settings-page', component: AppSettingsPageComponent },

  { path: 'settings-tab', component: SettingsTabComponentXXXXXXXXXOLD },
  { path: 'home-tab', component: HomeTabComponent },
  { path: '', redirectTo: '/vigenere-tab', pathMatch: 'full' },
  { path: '**', component: CorrespondenceBookPageComponent },
  // { path: '', redirectTo: '/home-tab', pathMatch: 'full' },
  // { path: '**', component: HomeTabComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
