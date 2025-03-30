export type taskData = {
    ID: number;
    title: string;
    description: string;
    done: boolean;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string;
}

export type userData = {
    ID: number,
    first_name: string;
    last_name: string;
    email: string;
    tasks?: Task[];
}