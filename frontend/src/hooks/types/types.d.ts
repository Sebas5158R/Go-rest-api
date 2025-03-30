export type taskData = {
    id: number;
    title: string;
    description: string;
    done: boolean;
}

export type userData = {
    ID: number,
    first_name: string;
    last_name: string;
    email: string;
    tasks?: Task[];
}