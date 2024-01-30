import { SettingsTabComponent } from './pages/settings-page-old/settings-tab.component';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './core-components/nav-bar/nav-bar.component';
import { FooterComponent } from './core-components/footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SarnegTabComponent } from './components/sarneg-tab/sarneg-tab.component';
import { VigenereTabComponent } from './components/vigenere-tab/vigenere-tab.component';
import { MenuTileComponent } from './components/menu-tile/menu-tile.component';
import { ReportPageComponent as ReportsPageComponent } from './pages/reports-page/reports-page.component';
import { TDRDataPageComponent } from './pages/tdr-data-page/tdr-data-page.component';
import { CorrespondenceBookPageComponent } from './pages/correspondence-book-page/correspondence-book-page.component';
import { AppSettingsPageComponent } from './pages/app-settings-page/app-settings-page.component';
import { HelpPageComponent } from './pages/help-page/help-page.component';
import { HomeTabComponent as HomePageComponent } from './pages/home-page/home-page.component';
import { NotepadPageComponent } from './pages/notepad-page/notepad-page.component';
import { NotepadNavbarComponent } from './pages/notepad-page/notepad-navbar/notepad-navbar.component';
import { QuickDataComponent } from './components/quick-data/quick-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SettingsTabComponent,
    FooterComponent,
    SarnegTabComponent,
    VigenereTabComponent,
    MenuTileComponent,
    HomePageComponent,
    ReportsPageComponent,
    TDRDataPageComponent,
    CorrespondenceBookPageComponent,
    AppSettingsPageComponent,
    HelpPageComponent,
    NotepadPageComponent,
    NotepadNavbarComponent,
    QuickDataComponent,
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
