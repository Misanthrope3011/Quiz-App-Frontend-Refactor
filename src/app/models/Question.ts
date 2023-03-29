import {Category} from "./Category";

export class Question {

    id: number;
    answerA: string;
    answerB: string;
    answerC: string;
    answerD: string;
    question: string;
    correctAnswer: string;
    category: Category;
    image: string;
    userAnswer: string;
    answerTimeSec: number;

}
