import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../model/Course';

import { Observable } from 'rxjs';
//docker exec -it  prometheus cat  /etc/prometheus/prometheus.yml

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = 'http://192.168.1.144:8089/api/course'; // Update the URL as per your backend

  constructor(private http: HttpClient) { }

  addCourse(course: Course): Observable<Course> {
    const url = `${this.baseUrl}/add-course`;
    return this.http.post<Course>(url, course);
  }

  getAllCourses(): Observable<Course[]> {
    const url = `${this.baseUrl}/retrieve-all-courses`;
    return this.http.get<Course[]>(url);
  }
}
