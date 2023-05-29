export interface Project {
    _id: string;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    status: 'In progress' | 'Completed' | 'Cancelled' | 'On hold' | 'Not started';
    members: string[];
}