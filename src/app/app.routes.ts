import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Achievements } from './pages/achievements/achievements';
import { ContactUs } from './pages/contact-us/contact-us';
import { ScienceLab } from './pages/facilities/science-lab/science-lab';
import { ComputerLab } from './pages/facilities/computer-lab/computer-lab';
import { Library } from './pages/facilities/library/library';
import { SportsFacilities } from './pages/facilities/sports-facilities/sports-facilities';
import { Facilities } from './pages/facilities/facilities';
import { CourseAndCurriculum } from './pages/course-and-curriculum/course-and-curriculum';
import { Gallery } from './pages/gallery/gallery';
import { Admissions } from './pages/admissions/admissions';

export const routes: Routes = [
  { path: '', component: Home },

  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'course-and-curriculum', component: CourseAndCurriculum },
  {
    path: 'facilities',
    component: Facilities,
    children: [
      { path: 'science-lab', component: ScienceLab },
      { path: 'computer-lab', component: ComputerLab },
      { path: 'library', component: Library },
      { path: 'sports-facilities', component: SportsFacilities },
      { path: '', redirectTo: 'science-lab', pathMatch: 'full' },
    ],
  },
  { path: 'achievements', component: Achievements },
  { path: 'admissions', component: Admissions },
  { path: 'gallery', component: Gallery },
  { path: 'contact-us', component: ContactUs },

  { path: '**', redirectTo: '' },
];
