import { useEffect, useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import * as Styled from './styles'


export function CircularProgressBar({ correctAnswers, wrongAnswers }){

    const [percent, setPercent ] = useState(0)
    const [currentPercent, setCurrentPercent] = useState(0)

    useEffect(()=>{
        let time = 1000/percent       
        let interval = setInterval(() => {
            if(currentPercent !==0 && currentPercent === percent){
                clearInterval(interval)
            }
            if(percent !==0 && currentPercent < percent){
                setCurrentPercent((e)=>e+1)
            }
        }, time)
        return ()=> clearInterval(interval)
        
    })
    
    useEffect(()=>{
        setPercent(Math.round((correctAnswers/(correctAnswers+wrongAnswers)) * 100))
    }, [correctAnswers, wrongAnswers])


    return(
        <Styled.ContainerBar>
            <CircularProgressbar 
                value={percent ? percent : 0}
                maxValue={100}
                text={`${currentPercent}%`}
                circleRatio={0.7}
                styles={{
                    trail: {
                        strokeLinecap: "round",
                        transform: "rotate(-126deg)",
                        transformOrigin: "center center",
                        stroke: "#ddd"
                    },
                    path: {
                        strokeLinecap: "round",
                        circleRatio: '0.7',
                        transform: "rotate(-126deg)",
                        transformOrigin: "center center",
                        stroke: "#38a7ff",
                        transitionDelay: '1s',
                        transition: 'stroke-dashoffset 1.5s ease 0s'
                    },
                    text: {
                        fill: "#38a7ff",
                        transitionDelay: '1s',
                        transition: 'all 1s ease-in',
                        fontFamily: "'Roboto Mono', monospace",
                        fontWeight: "bold"
                    }
                }}
                strokeWidth={10}
            />
        </Styled.ContainerBar>

    )
}