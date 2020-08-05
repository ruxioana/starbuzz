import Vue from 'vue'
import Vuex from 'vuex'
import Quiz from '../model/Quiz.js'
import Question from '../model/Question.js'
import Answer from '../model/Answer.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        quiz: new Quiz(
            [
                new Question(
                    'Cati litri de apa e bine sa bei pe zi?',
                    [
                        new Answer(1, '1 litru'),
                        new Answer(2, '0.5 litri'),
                        new Answer(3, '2 litri'),
                        new Answer(4, '5 litri')
                    ],
                    3 /* al treilea rasp e cel corect */
                ),
                new Question(
                    'Cum se poate modifica starea din Vuex?',
                    [
                        new Answer(1, 'folosind mutatii'),
                        new Answer(2, 'modificand direct proprietatile starii'),
                        new Answer(3, 'apeland direct metoda din mutations'),
                        new Answer(4, 'starea nu se poate modifica')
                    ],
                    1
                ),
                new Question(
                    'Cum se poate face two-way-binfing in Vue?',
                    [
                        new Answer(1, 'folosind atributul v-model'),
                        new Answer(2, 'nu e poate face two-way-binfing in Vue'),
                        new Answer(3, 'folosind atributul v-data'),
                        new Answer(4, 'folosind v-two-way-binding')
                    ],
                    1
                )
            ]
        )
    },
    mutations: {
        answerQuestion: (state, answer) => state.quiz.answerQuestion(answer),
        next: (state) => state.quiz.next(),
        back: (state) => state.quiz.back()
    },
    getters: {
        activeQuestion: (state) => state.quiz.getActiveQuestion(),
        isQuizFinished: (state) => state.quiz.finished,
        quizScore: (state) => state.quiz.calculateScore()
    }
});