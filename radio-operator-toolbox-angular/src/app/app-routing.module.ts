import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsTabComponent } from './core-components/settings-tab/settings-tab.component';

const routes: Routes = [
  { path: 'edit-procedure-tab', component: SettingsTabComponent },
  { path: 'timer-tab', component: SettingsTabComponent },
  { path: 'settings-tab', component: SettingsTabComponent },
  { path: '', redirectTo: '/training-tab', pathMatch: 'full' },
  { path: '**', component: SettingsTabComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
