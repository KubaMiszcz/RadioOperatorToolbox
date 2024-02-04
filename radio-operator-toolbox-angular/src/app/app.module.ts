import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './core-components/nav-bar/nav-bar.component';
import { FooterComponent } from './core-components/footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SarnegTabComponent } from './pages/encodings-page/sarneg-tab/sarneg-tab.component';
import { VigenereTabComponent } from './pages/encodings-page/vigenere-tab/vigenere-tab.component';
import { MenuTileComponent } from './pages/home-page/menu-tile/menu-tile.component';
import { TDRDataPageComponent } from './pages/tdr-data-page/tdr-data-page.component';
import { CorrespondenceBookPageComponent } from './pages/correspondence-book-page/correspondence-book-page.component';
import { AppSettingsPageComponent } from './pages/app-settings-page/app-settings-page.component';
import { HelpPageComponent } from './pages/help-page/help-page.component';
import { HomeTabComponent as HomePageComponent } from './pages/home-page/home-page.component';
import { NotepadPageComponent } from './pages/notepad-page/notepad-page.component';
import { NotepadNavbarComponent } from './pages/notepad-page/notepad-navbar/notepad-navbar.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { CheatsheetComponent } from './pages/cheatsheet-page/cheatsheet-page.component';
import { ReportsPageComponent } from './pages/reports-page/reports-page.component';
import { ReportTabComponent } from './pages/reports-page/report-tab/report-tab.component';
import { EncodingsPageComponent } from './pages/encodings-page/encodings-page.component';
import { ModalGenericComponent } from './core-components/modal-generic/modal-generic.component';
import { QuickDataComponent } from './core-components/nav-bar/quick-data-modal/quick-data.component';
import { VICTabComponent } from './pages/encodings-page/vic-tab/vic-tab.component';
import { PolybiusSquareTabComponent } from './pages/encodings-page/polybius-square-tab/polybius-square-tab.component';
import { HelpTileComponent } from './core-components/help-tile/help-tile.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    SarnegTabComponent,
    VigenereTabComponent,
    MenuTileComponent,
    HomePageComponent,
    TDRDataPageComponent,
    CorrespondenceBookPageComponent,
    AppSettingsPageComponent,
    HelpPageComponent,
    NotepadPageComponent,
    NotepadNavbarComponent,
    QuickDataComponent,
    CheatsheetComponent,
    ReportsPageComponent,
    ReportTabComponent,
    EncodingsPageComponent,
    ModalGenericComponent,
    VICTabComponent,
    PolybiusSquareTabComponent,
    HelpTileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule,
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
