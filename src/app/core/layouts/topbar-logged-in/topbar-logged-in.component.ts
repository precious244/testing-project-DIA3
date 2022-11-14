import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar-logged-in',
  templateUrl: './topbar-logged-in.component.html',
  styleUrls: ['./topbar-logged-in.component.scss']
})
export class TopbarLoggedInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  opened = false;

}
