import { Video } from "./video";

export class Module {
  id!:number;
  courseId !: number;
  name!:string;
  moduleNumber!:number;
  description!:string;
  videos !: Video[];
}
