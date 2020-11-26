import { Component } from '@angular/core';

export interface TabItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tabs: TabItem[] = [
    {
      label: 'Section 1',
      icon: 'home',
      route: 'one',
    },
    {
      label: 'Section 2',
      icon: 'person',
      route: 'two',
    },
    {
      label: 'Section 3',
      icon: 'search',
      route: 'three',
    },
  ];
}
