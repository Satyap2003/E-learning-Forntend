export class Course {
  id: number = 0;
  name: string = '';
  description: string = '';
  price: number = 0;
  rating: number = 0;
  img: string = '';
  duration: string = '';
  noOfStudents: number = 0;
  lectureId: string = '';
  lectureName: string = '';
  ratingCount: number = 0;

  constructor(
      id: number = 0,
      name: string = '',
      description: string = '',
      price: number = 0,
      rating: number = 0,
      img: string = '',
      duration: string = '',
      noOfStudents: number = 0,
      lectureId: string = '',
      lectureName : string = '',
      ratingCount: number = 0
  ) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.rating = rating;
      this.img = img;
      this.duration = duration;
      this.noOfStudents = noOfStudents;
      this.lectureId = lectureId;
      this.lectureName = lectureName;
      this.ratingCount = ratingCount;
  }
}
