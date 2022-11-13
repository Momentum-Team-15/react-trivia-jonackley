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
            setTriviaQuestion(response.data.results.question)
            setRightAnswer(response.data.results.correct_answer)
            setWrongAnswer(response.data.results.incorrect_answers)
        })
    }, [singleCat, counter])

    return (
        <div>
            <button onClick={handleGoBack}>NewTrivialities? Click here!</button>
            <h2>{triviaQuestion}</h2>
            {console.log(triviaQuestion)}
            <button onClick={handleNext}>{rightAnswer}</button>
        </div>

    )
}
