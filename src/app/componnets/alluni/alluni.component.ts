import { Component, OnInit } from '@angular/core';
import { Universitie } from 'src/app/model/Universitie';
import { UniversitieService } from 'src/app/services/universitie.service';

@Component({
  selector: 'app-alluni',
  templateUrl: './alluni.component.html',
  styleUrls: ['./alluni.component.css']
})
export class AlluniComponent implements OnInit {
  universities: Universitie[] = [];

  constructor(private universitieService: UniversitieService) { }

  ngOnInit(): void {
    this.loadAllUniversities();
  }

  private loadAllUniversities(): void {
    this.universitieService.getAllUniversities()
      .subscribe(data => {
        this.universities = data;
      }, error => {
        console.error('Error loading universities:', error);
      });
  }
}
