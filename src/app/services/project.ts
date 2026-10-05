import { Service } from '@angular/core';
import { Project,ProjectStatus } from '../models/project';
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

    getProjects(): readonly Project[] {
        return [...this.projects];
    }
    addProject(project: Project) {
        this.projects= [...this.projects,project];
    }
    deleteProject(id: number) {
        this.projects = this.projects.filter(project => project.id !== id);
    }
    updateProject(updatedProject: Project) {
        this.projects = this.projects.map(project => project.id === updatedProject.id ? updatedProject : project);
    }
    getProjectById(id: number): Project | undefined {
        return this.projects.find(project => project.id === id);
    }
    getProjectsByStatus(status: ProjectStatus) : Project[]{
        return this.projects.filter(
            project => project.status === status
        );
    }
    getProjectCount(): number{
        return this.projects.length;
    }
    getProjectCountByStatus(status : ProjectStatus) : number{
        return this.getProjectsByStatus(status).length;
    }
}
