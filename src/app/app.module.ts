import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginOptionsComponent } from './components/login-options/login-options.component';
import { HttpClientModule } from '@angular/common/http';
import { JobsComponent } from './components/jobs/jobs.component';
import { EmployersComponent } from './components/employers/employers.component';
import { JobseekersComponent } from './components/jobseekers/jobseekers.component';
import { JobtypeComponent } from './components/jobtype/jobtype.component';

import { CategoryComponent } from './components/category/category.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// import { ReactiveFormsModule } from '@angular/forms';
import { UpdateJobseekerprofileComponent } from './components/update-jobseekerprofile/update-jobseekerprofile.component';
import { UpdateEmployerprofileComponent } from './components/update-employerprofile/update-employerprofile.component';

import { JobseekerDashboardComponent } from './components/jobseeker-dashboard/jobseeker-dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginemployerComponent } from './components/loginemployer/loginemployer.component';
import { LoginjobseekerComponent } from './components/loginjobseeker/loginjobseeker.component';
import { RegisteremployerComponent } from './components/registeremployer/registeremployer.component';
import { MapComponent } from './components/map/map.component';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { ApplicantComponent } from './components/applicant/applicant.component';
import { EmployerDashboardComponent } from './components/employer-dashboard/employer-dashboard.component';
import { EmployerComponent } from './components/employer/employer.component';
import { EmployerprofileComponent } from './components/employerprofile/employerprofile.component';
import { FooterComponent } from './components/footer/footer.component';
import { JobseekerprofileComponent } from './components/jobseekerprofile/jobseekerprofile.component';
// import { LoginOptionsComponent } from './components/login-options/login-options.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ViewJobseekersComponent } from './components/view-jobseekers/view-jobseekers.component';


@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    EmployersComponent,
    JobseekersComponent,

    JobseekerprofileComponent,
    EmployerprofileComponent,

    
 
    CategoryComponent,
    NavbarComponent,
    UpdateJobseekerprofileComponent,
    UpdateEmployerprofileComponent,
    
    LoginOptionsComponent,
    ReviewsComponent,
    AboutComponent,
    ApplicantComponent,
    EmployerComponent,
    FooterComponent,
    EmployerDashboardComponent,
    JobtypeComponent,
    JobseekerDashboardComponent,
    LoginOptionsComponent,
    CategoryComponent,
    NavbarComponent,
    RegisterComponent,
    LoginemployerComponent,
    LoginjobseekerComponent,
    RegisteremployerComponent,
    MapComponent,
    ViewJobseekersComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }