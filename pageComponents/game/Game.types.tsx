import { Question } from 'shared/types'

export interface Game {
  questions: Question[]
  correctAnswers: number
}
