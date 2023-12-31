import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component';
import { SideBarComponentComponent } from './side-bar-component/side-bar-component.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { FooterComponent } from './footer/footer.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppEventComponent } from './componnets/app-event/app-event.component';
import { TeamComponent } from './componnets/team/team.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProjectComponent } from './componnets/project/project.component';
import { MyteamComponent } from './componnets/myteam/myteam.component';
import { ProjectaddedsuccComponent } from './componnets/projectaddedsucc/projectaddedsucc.component';
import { GetvideoComponent } from './componnets/getvideo/getvideo.component';
import { ProjectDetailComponent } from './componnets/project-detail/project-detail.component';
import { StatsComponent } from './componnets/stats/stats.component';
import { AddeventComponent } from './componnets/addevent/addevent.component';
import { UniversitieComponent } from './componnets/universitie/universitie.component';
import { AlluniComponent } from './componnets/alluni/alluni.component';
import { CourseComponent } from './componnets/course/course.component';
import { CourseCComponent } from './course-c/course-c.component';
import { AllcoursesComponent } from './componnets/allcourses/allcourses.component'; 



@NgModule({
  declarations: [
    AppEventComponent,
    AppComponent,
    SideBarComponentComponent,
    NavBarComponentComponent,
    HomeComponentComponent,
    DashboardComponentComponent,
    NotFoundComponent,
    AdvertisementComponent,
    FooterComponent,
    TeamComponent,
    ProjectComponent,
    MyteamComponent,
    ProjectaddedsuccComponent,
    GetvideoComponent,
    ProjectDetailComponent,
    StatsComponent,
    AddeventComponent,
    UniversitieComponent,
    AlluniComponent,
    CourseComponent,
    CourseCComponent,
    AllcoursesComponent,
  ],
  imports: [
    BrowserModule,

    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule


  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA,
  ]
})
export class AppModule { }
