import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShkipComponent } from './shkip/shkip.component';
import { ShkipPipePipe } from './shkip-pipe.pipe';
import { ShkipDirectivDirective } from './shkip-directiv.directive';
import { GameComponent } from './game/game.component';
import { EmitComponent } from './emit/emit.component';
import { TabsComponent } from './tabs/tabs.component';
import { AddedPgComponent } from './added-pg/added-pg.component';
import { SettingsPgComponent } from './settings-pg/settings-pg.component';
import { GoPgComponent } from './go-pg/go-pg.component';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes =[
  {path: 'added', component: AddedPgComponent},
  {path: 'settings', component: SettingsPgComponent},
  {path: 'go', component: GoPgComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ShkipComponent,
    ShkipPipePipe,
    ShkipDirectivDirective,
    GameComponent,
    EmitComponent,
    TabsComponent,
    AddedPgComponent,
    SettingsPgComponent,
    GoPgComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
