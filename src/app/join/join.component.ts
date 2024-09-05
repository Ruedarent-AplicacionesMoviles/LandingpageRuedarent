import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './join.component.html',
  styleUrl: './join.component.css'
})
export class JoinComponent {
  email: string = '';

  onSubmit() {
    if (this.email){
      console.log('Email submitted: ', this.email);
    }
  }
}
