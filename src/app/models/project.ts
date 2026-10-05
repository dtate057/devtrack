export type ProjectStatus = 'Planning' | 'In Progress' | 'Completed';
export const PROJECT_STATUSES: readonly ProjectStatus[] =[
    'Planning',
    'In Progress',
    'Completed'
];
export interface Project {
    id : number;
    name: string;
    description: string;
    status: ProjectStatus;
}