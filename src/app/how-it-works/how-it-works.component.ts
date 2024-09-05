import { Component } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faDollarSign,
  faCommentAlt,
  faAward,
  faImage,
  faUser,
  faCertificate,
  faPersonBiking
} from '@fortawesome/free-solid-svg-icons';
import {NgForOf} from "@angular/common";
import {group} from "@angular/animations";

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  standalone: true,
  imports: [FaIconComponent, NgForOf]
})
export class HowItWorksComponent {
  constructor() {
    library.add(faDollarSign, faCommentAlt, faAward, faImage, faPersonBiking);
  }

  steps = [
    { icon: faPersonBiking, title: 'List Your Ride', description: 'Easily list your bike, rollerskates, or skates for sale or rent.' },
    { icon: faUser, title: 'Connect', description: 'Join our forum to discuss, share tips, and meet other riders.' },
    { icon: faCertificate, title: 'Earn Badges', description: 'Get recognized for your activity with exclusive profile badges.' },
  ];
  protected readonly faImage = faImage;
}
