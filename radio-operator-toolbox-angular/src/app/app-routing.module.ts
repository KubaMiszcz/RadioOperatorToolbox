import { SarnegPageComponent } from './components/sarneg-page/sarneg-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsTabComponent } from './tabs/settings-tab/settings-tab.component';
import { HomeTabComponent } from './tabs/home-tab/home-tab.component';

const routes: Routes = [
  { path: 'sarneg-page', component: SarnegPageComponent },
  { path: 'settings-tab', component: SettingsTabComponent },
  { path: 'home-tab', component: HomeTabComponent },
  { path: '', redirectTo: '/home-tab', pathMatch: 'full' },
  { path: '**', component: HomeTabComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
