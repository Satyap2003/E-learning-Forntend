export class Department {
    id: number;
    name: string;
    description: string;
    head: string;
    numberOfCourses: number;
    numberOfStudents: number;
    location: string;

    constructor(
        id: number,
        name: string,
        description: string,
        head: string,
        numberOfCourses: number,
        numberOfStudents: number,
        location: string
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.head = head;
        this.numberOfCourses = numberOfCourses;
        this.numberOfStudents = numberOfStudents;
        this.location = location;
    }
}
