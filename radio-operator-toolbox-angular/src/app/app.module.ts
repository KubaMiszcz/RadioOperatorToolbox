import { SettingsTabComponent } from './core-components/settings-tab/settings-tab.component';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './core-components/nav-bar/nav-bar.component';
import { FooterComponent } from './core-components/footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SarnegPageComponent } from './components/sarneg-page/sarneg-page.component';
import { VigenerePageComponent } from './components/vigenere-page/vigenere-page.component';
import { MenuTileComponent } from './components/menu-tile/menu-tile.component';
import { HomeTabComponent } from './core-components/home-tab/home-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SettingsTabComponent,
    FooterComponent,
    SarnegPageComponent,
    VigenerePageComponent,
    MenuTileComponent,
    HomeTabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
