import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsTabComponent } from './core-components/settings-tab/settings-tab.component';
import { HomeTabComponent } from './core-components/home-tab/home-tab.component';

const routes: Routes = [
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
