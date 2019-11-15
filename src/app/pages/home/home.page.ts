
import { Component, OnInit } from '@angular/core';
import { ChatsComponent } from 'src/app/components/chats/chats.component';
import { StateComponent } from 'src/app/components/state/state.component';
import { CallsComponent } from 'src/app/components/calls/calls.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  statePage = StateComponent;
  callsPage = CallsComponent;
  chatsPage = ChatsComponent;

  constructor() {
  }
  
  ngOnInit() {

  }
}
