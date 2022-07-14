import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { JobseekerprofileComponent } from './components/jobseekerprofile/jobseekerprofile.component';
import { UpdateJobseekerprofileComponent } from './components/update-jobseekerprofile/update-jobseekerprofile.component';

  

import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { JobsComponent } from './components/jobs/jobs.component';
import { EmployersComponent } from './components/employers/employers.component';
import { JobseekersComponent } from './components/jobseekers/jobseekers.component';

import { CategoryComponent } from './components/category/category.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginOptionsComponent } from './components/login-options/login-options.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AboutComponent } from './components/about/about.component';
import { ApplicantComponent } from './components/applicant/applicant.component';
import { JobseekerprofileComponent } from './components/jobseekerprofile/jobseekerprofile.component';
// import { login_component } from './components/login/login.component';
import { LoginemployerComponent } from './components/loginemployer/loginemployer.component';
import { LoginjobseekerComponent } from './components/loginjobseeker/loginjobseeker.component';
import { RegisterComponent } from './components/register/register.component';

import { JobseekerDashboardComponent } from './components/jobseeker-dashboard/jobseeker-dashboard.component';
import { EmployerDashboardComponent } from './components/employer-dashboard/employer-dashboard.component';
import { RegisteremployerComponent } from './components/registeremployer/registeremployer.component';
import { EmployerprofileComponent } from './components/employerprofile/employerprofile.component';
import { ViewJobseekersComponent } from './components/view-jobseekers/view-jobseekers.component';

// import { EmployerprofileComponent } from './components/employerprofile/employerprofile.component';
// import { ApplicantprofileComponent } from './components/applicantprofile/applicantprofile.component';
// import { EmployerprofileComponent } from './components/employerprofile/employerprofile.component';
// import { JobseekerprofileComponent } from './components/jobseekerprofile/jobseekerprofile.component';
// import { EmployerprofileComponent } from './components/employerprofile/employerprofile.component';

const routes: Routes = [

  {path: '', redirectTo:'about', pathMatch:'full'},
  {path: 'employer', component: EmployersComponent },
  {path: 'jobseeker', component: JobseekersComponent },
  {path: 'categories', component: CategoryComponent },
  {path: 'navbar', component: NavbarComponent },
  {path: 'login_options', component: LoginOptionsComponent},
  {path: 'about', component: AboutComponent },
  {path: 'reviews', component: ReviewsComponent },
  {path: 'applicant', component: ApplicantComponent },
  {path: 'dashboard/:id', component: EmployerDashboardComponent },
  {path: 'jobdashboard/:id', component: JobseekerDashboardComponent },
  
  {path: 'jobseekerprofile', component: JobseekerprofileComponent},
  {path: 'update-jobseekerprofile/:id', component: UpdateJobseekerprofileComponent},
  {path: 'employerprofile', component: EmployerprofileComponent},
 
  {path: 'loginemployer', component: LoginemployerComponent },
  {path: 'loginjobseeker', component: LoginjobseekerComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'registeremployer', component: RegisteremployerComponent },
  {path: 'view-jobseekers', component: ViewJobseekersComponent},
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
