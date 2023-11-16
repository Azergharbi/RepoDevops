import { Component } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/model/Course';

@Component({
  selector: 'app-allcourses',
  templateUrl: './allcourses.component.html',
  styleUrls: ['./allcourses.component.css']
})
export class AllcoursesComponent {

  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses(): void {
    this.courseService.getAllCourses()
      .subscribe(
        data => {
          this.courses = data;
          console.log('Courses fetched successfully:', data);
        },
        error => {
          console.error('Error fetching courses:', error);
        }
      );
  }
}
