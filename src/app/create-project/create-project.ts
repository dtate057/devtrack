import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Project } from '../models/project';
@Component({
  imports: [FormsModule],
  selector: 'app-create-project',
  styleUrl: './create-project.css',
  templateUrl: './create-project.html',
})
export class CreateProject {
  projectName = '';
  projectDescription = '';
  projectStatus = 'Planning';
  errorMessage = '';

  projectCreated = output<Project>();

  createProject() {
    if (this.projectName.trim() === '') {
      this.errorMessage = 'Project name is required';
      return;
    }
    this.errorMessage = '';
    const newProject: Project = {
      id: Date.now(),
      name: this.projectName,
      description: this.projectDescription,
      status: this.projectStatus
    };
    this.projectCreated.emit(newProject);
    this.projectName = '';
    this.projectDescription = '';
    this.projectStatus = 'Planning';
    console.log(newProject);
  }
}
