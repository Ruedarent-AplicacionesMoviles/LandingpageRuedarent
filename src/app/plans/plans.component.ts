import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  imports: [
    NgForOf,
    NgClass
  ],
  standalone: true
})
export class PlansComponent {
  plans = [
    { title: 'Bronze', price: 'Free/month then $1.99/month', features: ['Allows 2 publications per month', 'Basic assistance'], highlight: 'bg-green-600' },
    { title: 'Silver', price: '$5.99/month', features: ['Allows 10 publications per month', 'Prior assistance', 'featured publications'], highlight: 'bg-yellow-500' },
    { title: 'Gold', price: '$19.99/month', features: ['Ilimited publications', 'Assistance 24/7'], highlight: 'bg-blue-600' },
  ];
}
