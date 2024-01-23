import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsTabComponent } from './pages/settings-page-old/settings-tab.component';
import { HomeTabComponent } from './pages/home-page/home-tab.component';
import { SarnegTabComponent } from './components/sarneg-tab/sarneg-tab.component';
import { VigenereTabComponent } from './components/vigenere-tab/vigenere-tab.component';
import { ReportPageComponent } from './pages/report-page/report-page.component';

const routes: Routes = [
  { path: 'sarneg-page', component: SarnegTabComponent },
  { path: 'vigenere-page', component: VigenereTabComponent },

  { path: 'report-page', component: ReportPageComponent },

  { path: 'settings-tab', component: SettingsTabComponent },
  { path: 'home-tab', component: HomeTabComponent },
  { path: '', redirectTo: '/vigenere-tab', pathMatch: 'full' },
  { path: '**', component: ReportPageComponent },
  // { path: '', redirectTo: '/home-tab', pathMatch: 'full' },
  // { path: '**', component: HomeTabComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
