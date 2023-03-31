import {Category} from "./Category";

export class Question {

    id: number;
    answerA: string;
    answerB: string;
    answerC: string;
    answerD: string;
    question: string;
    correctAnswer: string;
    category: Category = new Category();
    image: Uint8Array;
    userAnswer: string;
    answerTimeSec: number;

}
