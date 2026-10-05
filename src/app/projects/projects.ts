import { Component, inject } from '@angular/core';
import { Project } from '../models/project';
import { CreateProject } from '../create-project/create-project';
import { ProjectService } from '../services/project';
import { FormsModule} from '@angular/forms';
@Component({
  imports: [CreateProject,FormsModule],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {

  private projectService = inject(ProjectService);
  projects: Project[] = this.projectService.getProjects();
  selectedProject: Project | null = null;

  selectProject(id: number) {
    this.selectedProject = this.projectService.getProjectById(id) ?? null;
  }
  addProject(project: Project) {
    this.projectService.addProject(project);
    this.projects = this.projectService.getProjects();
  }
  deleteProject(id: number) {
    this.projectService.deleteProject(id);
    this.projects = this.projectService.getProjects();
    if (this.selectedProject?.id === id) {
      this.selectedProject = null;
    }
  }
  editProject(project: Project){
    this.selectedProject = {...project };
  }
  saveProject(){
    if(this.selectedProject)
      {
      this.projectService.updateProject(this.selectedProject);
      this.projects = this.projectService.getProjects();
      this.selectedProject = null;
      }
  }
  cancelEdit(){
    this.selectedProject = null;
  }
}
