export interface QuizCardView {
  id: string;
  title: string;
  authorName: string;
  duration: number;
  questionCount: number;
  difficulty: "easy" | "medium" | "hard" | "easy - hard";
  authorImageSrc: string;
  rating: number;
  imageSrc: string;
  ratingCount: number
};


export const quizzesData: QuizCardView[] = [
  {
    "id": "fcf7890f-9c72-46d3-931e-34494307be37",
    "title": "The essentials of the Web",
    "authorName": "Sebastian Sigl",
    "imageSrc": "/assets/img/quizzes/frontend/cover_web_essentials.png",
    "authorImageSrc": "/assets/img/team/sesigl_rounded.png",
    "rating": 4.3,
    "ratingCount": 1991,
    "duration": 10320,
    "questionCount": 20,
    "difficulty": "easy - hard",
  },
]
