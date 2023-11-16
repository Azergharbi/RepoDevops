import { Component } from '@angular/core';
import { Universitie } from 'src/app/model/Universitie';
import { UniversitieService } from 'src/app/services/universitie.service';

@Component({
  selector: 'app-universitie',
  templateUrl: './universitie.component.html',
  styleUrls: ['./universitie.component.css']
})
export class UniversitieComponent {
  universitie: Universitie = new Universitie();


  constructor(private universitieService: UniversitieService) { }

  createUniversitie(): void {
    this.universitieService.createUniversitie(this.universitie)
      .subscribe(data => {
        console.log('University created successfully:', data);
        // Reset the form or perform any other necessary actions
        this.universitie = new Universitie();
      }, error => {
        console.error('Error creating university:', error);
      });
  }

}
