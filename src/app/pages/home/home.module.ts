import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

import { HomePage } from './home.page';
import { ChatsComponent } from 'src/app/components/chats/chats.component';
import { StateComponent } from 'src/app/components/state/state.component';
import { CallsComponent } from 'src/app/components/calls/calls.component';

@NgModule({
  entryComponents: [
    ChatsComponent,
    StateComponent,
    CallsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    SuperTabsModule
  ],
  declarations: [
    HomePage,
    ChatsComponent,
    StateComponent,
    CallsComponent
  ]
})
export class HomePageModule {}
