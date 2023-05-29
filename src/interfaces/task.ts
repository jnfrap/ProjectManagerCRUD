export interface Task {
    _id: string;
    name: string;
    description: string;
    createdAt: Date;
    expiresAt: Date;
    status: 'TODO' | 'DOING' | 'DONE';
    project: string;
    members: string[];
}