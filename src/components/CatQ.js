import React, { useState, useEffect} from 'react'
import { requestQ } from '../requests'

export const Questions = ({singleCat, setSingleCat}) => {
    const [triviaQuestion, setTriviaQuestion] = useState ('')
    const [rightAnswer, setRightAnswer] = useState ('')
    const [wrongAnswer, setWrongAnswer] = useState ([])
    let [counter, setCounter] = useState(0)

    const handleGoBack = () => setSingleCat(null)
    const handleNext = () => setCounter(counter +=1)

    useEffect(() => {
        requestQ(singleCat).then(response => {
            setTriviaQuestion(response.data.results[counter].question.replace(/[^a-zA-Z0-9 ,?%]/g, ''))
            setRightAnswer(response.data.results[counter].correct_answer.replace(/[^a-zA-Z0-9 ,?%]/g, ''))
            setWrongAnswer(response.data.results.incorrect_answers)
        })
    }, [singleCat, counter])

    return (
        <div>
            <button onClick={handleGoBack}>NewTrivialities? Click here!</button>
            <h2>{triviaQuestion}</h2>
            {console.log(triviaQuestion)}
            <button onClick={handleNext}>{rightAnswer}</button>
            {wrongAnswer.map((wrong, index) =>
                <button key={index} onClick={handleNext}>{wrong.replace(/[^a-zA-Z0-9 ,?%]/g, '')}</button>
            )}
            <h2>Number of Right Answers: {counter}</h2>
        </div>

    )
}
