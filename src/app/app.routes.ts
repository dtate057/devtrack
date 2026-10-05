import { Routes } from '@angular/router';
import { Projects } from './projects/projects';
import { Dashboard } from './dashboard/dashboard';
import { CreateProject} from './create-project/create-project';

export const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'projects', component: Projects},
    { path: 'dashboard', component: Dashboard},
    { path: 'createproject', component: CreateProject}
];
