import { CallsPage } from './../calls/calls.page';
import { StatePage } from './../state/state.page';
import { Component, ViewChild, OnInit } from '@angular/core';
import { SuperTabs } from '@ionic-super-tabs/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  statePage = StatePage;
  callsPage = CallsPage;

  constructor() {
  }
  
  ngOnInit() {

  }
}
