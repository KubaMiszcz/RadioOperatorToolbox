import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerTabComponent } from './components/timer-tab/timer-tab.component';

const routes: Routes = [
  { path: 'edit-procedure-tab', component: TimerTabComponent },
  { path: 'timer-tab', component: TimerTabComponent },
  { path: 'settings-tab', component: TimerTabComponent },
  { path: '', redirectTo: '/training-tab', pathMatch: 'full' },
  { path: '**', component: TimerTabComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
