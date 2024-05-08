import { Component, signal } from '@angular/core';



export type MenuItem = {
  icon: string;
  route: any;
}

@Component({
  selector: 'app-custom-side-nav',
  templateUrl: './custom-side-nav.component.html',
  styleUrls: ['./custom-side-nav.component.scss']
})

export class CustomSideNavComponent {

  public menuItems = signal<MenuItem[]>([
    {
      icon: 'home',
      route: 'home'
    },
    {
      icon: 'add_circle',
      route: 'newOrder'
    },
    {
      icon: 'folder',
      route: 'quickCheck'
    },
    {
      icon: 'location_on',
      route: 'appTracker'
    },
    {
      icon: 'check',
      route: 'myDocs'
    },
    {
      icon: 'account_box',
      route: 'account'
    },
    {
      icon: 'more_horiz',
      route: 'more'
    }
  ]);
}

