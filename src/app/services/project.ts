import { Service } from '@angular/core';
import { Project } from '../models/project';
@Service()
export class ProjectService {
    private projects: Project[] = [
        {
            id: 1,
            name: 'DevTrack',
            description: 'Angular project and task management application',
            status: 'In Progress'
        },
        {
            id: 2,
            name: 'Portfolio Website',
            description: 'Personal portfolio showcasing',
            status: 'Planning'
        }

    ];
    getProjects(): Project[] {
        return [...this.projects];
    }
    addProject(project: Project) {
        this.projects.push(project)
    }
    deleteProject(id: number) {
        this.projects = this.projects.filter(project => project.id !== id);
    }
    updateProject(updatedProject: Project) {
        const index = this.projects.findIndex(project => project.id === updatedProject.id);
        if (index !== -1) {
            this.projects[index] = updatedProject;
        }
    }
    getProjectById(id: number): Project | undefined {
        return this.projects.find(project => project.id === id);
    }
}
