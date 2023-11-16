import { Component } from '@angular/core';
import { Course } from 'src/app/model/Course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  course: Course = new Course();

  constructor(private courseService: CourseService) {}

  addCourse(): void {
    this.courseService.addCourse(this.course)
      .subscribe(data => {
        console.log('Course added successfully:', data);
        this.course = new Course(); // Reset the form or perform any other necessary actions
      }, error => {
        console.error('Error adding course:', error);
      });
  }
}
