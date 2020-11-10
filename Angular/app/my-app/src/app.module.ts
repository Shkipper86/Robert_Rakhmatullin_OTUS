import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ShkipPipePipe } from './shkip-pipe.pipe';
import { ShkipDirectivDirective } from './shkip-directiv.directive';
import { TabsComponent } from './tabs/tabs.component';
import { AddedPgComponent } from './added-pg/added-pg.component';
import { SettingsPgComponent } from './settings-pg/settings-pg.component';
import { GoPgComponent } from './go-pg/go-pg.component';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TranslatePgComponent } from './translate-pg/translate-pg.component';
import { HttpClientModule} from '@angular/common/http';


const appRoutes: Routes =[
  {path: 'added', component: AddedPgComponent},
  {path: 'settings', component: SettingsPgComponent},
  {path: 'go', component: GoPgComponent},
  {path: 'translate', component: TranslatePgComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ShkipPipePipe,
    ShkipDirectivDirective,
    TabsComponent,
    AddedPgComponent,
    SettingsPgComponent,
    GoPgComponent,
    TranslatePgComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'your App-ID' }),
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
