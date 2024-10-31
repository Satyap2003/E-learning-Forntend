export class Course {
    id: number;
    name: string;
    description: string;
    price: number;
    rating:number;
    img:string;
    duration: string;
    noOfStudents:number;
    lectureId: string;
    ratingCount: number;

    constructor(id: number, name: string, description: string, price: number, rating:number, img:string, duration:string, noOfStudents:number, lectureId:string, ratingCount:number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.rating=rating;
        this.img=img;
        this.duration=duration;
        this.noOfStudents=noOfStudents;
        this.lectureId=lectureId;
        this.ratingCount=ratingCount;
    }
}
