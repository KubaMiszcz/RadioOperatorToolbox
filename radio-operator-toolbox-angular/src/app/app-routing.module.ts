import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsTabComponent } from './tabs/settings-tab/settings-tab.component';
import { HomeTabComponent } from './tabs/home-tab/home-tab.component';
import { SarnegPageComponent } from './components/sarneg-page/sarneg-page.component';
import { VigenerePageComponent } from './components/vigenere-page/vigenere-page.component';
import { ReportPageComponent } from './components/report-page/report-page.component';

const routes: Routes = [
  { path: 'sarneg-page', component: SarnegPageComponent },
  { path: 'vigenere-page', component: VigenerePageComponent },
  { path: 'report-page', component: ReportPageComponent },
  { path: 'settings-tab', component: SettingsTabComponent },
  { path: 'home-tab', component: HomeTabComponent },
  { path: '', redirectTo: '/vigenere-tab', pathMatch: 'full' },
  { path: '**', component: VigenerePageComponent },
  // { path: '', redirectTo: '/home-tab', pathMatch: 'full' },
  // { path: '**', component: HomeTabComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
