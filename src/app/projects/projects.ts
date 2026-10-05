import { Component, inject, OnInit } from '@angular/core';
import { Project, PROJECT_STATUSES } from '../models/project';
import { CreateProject } from '../create-project/create-project';
import { ProjectService } from '../services/project';
import { FormsModule } from '@angular/forms';
@Component({
  imports: [CreateProject, FormsModule],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects implements OnInit {

  private projectService = inject(ProjectService);
  projects: readonly Project[] = [];
  selectedProject: Project | null = null;
  editingProject: Project | null = null;
  editErrorMessage = '';

  projectStatuses = PROJECT_STATUSES;

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }
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
    if (this.editingProject?.id === id) {
      this.editingProject = null;
    }
    this.editErrorMessage = '';
  }
  editProject(project: Project) {
    this.selectedProject = project;
    this.editingProject = { ...project };
    this.editErrorMessage = '';
  }
  saveProject() {
    if (this.editingProject && this.editingProject.name.trim() !== '') {
      //save project
      this.projectService.updateProject(this.editingProject);
      this.projects = this.projectService.getProjects();
      this.selectedProject = this.projectService.getProjectById(this.editingProject.id) ?? null;
      this.editingProject = null;
      this.editErrorMessage = '';

    }
    else {
      this.editErrorMessage = 'Name Required';
    }
  }
  cancelEdit() {
    this.editingProject = null;
    this.editErrorMessage = '';
  }
  get projectCount(): number {
    return this.projectService.getProjectCount();
  }
  get completedProjectCount(): number {
    return this.projectService.getProjectCountByStatus('Completed');
  }
  get inProgressProjectCount(): number {
    return this.projectService.getProjectCountByStatus('In Progress');
  }
  get planningProjectCount(): number {
    return this.projectService.getProjectCountByStatus('Planning');
  }
}
