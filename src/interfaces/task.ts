export interface Task {
    name: string;
    description?: string;
    creation_date: Date;
    due_date: Date;
    status: 'In progress' | 'Completed' | 'Cancelled' | 'On hold' | 'Not started';
    assigned_to: number;
    related_project: string;
}