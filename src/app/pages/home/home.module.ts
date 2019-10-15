import { ChatsPage } from './../chats/chats.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

import { HomePage } from './home.page';
import { CallsPage } from '../calls/calls.page';
import { StatePage } from '../state/state.page';

@NgModule({
  entryComponents: [
    CallsPage,
    StatePage,
    ChatsPage
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
    CallsPage,
    StatePage,
    ChatsPage
  ]
})
export class HomePageModule {}
