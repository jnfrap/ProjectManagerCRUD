export interface Project {
    name: string;
    description?: string;
    start_date: Date;
    end_date: Date;
    status: 'In progress' | 'Completed' | 'Cancelled' | 'On hold' | 'Not started';
}