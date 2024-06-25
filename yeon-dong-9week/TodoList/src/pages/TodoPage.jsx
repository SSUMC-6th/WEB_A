import { useState, useEffect } from 'react'
import { FirstContainer, Container, TodayDate, TodayDateContainer, TodayTime, TodayDayOfWeek } from './TodoPage.style'
import InputTodo from '../components/InputTodo'
import TodoList from '../components/TodoList'

function TodoPage() {
  const [date, setDate] = useState(new Date());
  const [dayText, setDayText] = useState("");
  const [dayofweekText, setDayofweekText] = useState("");
  const [timer, setTimer] = useState("00:00:00");
  const week = ['일', '월', '화', '수', '목', '금', '토'];

  useEffect(() => {
    updateDayText(date);
  }, [date]);

  const updateDayText = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayOfWeek = week[date.getDay()];
    setDayText(`${year}년 ${month}월 ${day}일`);
    setDayofweekText(`${dayOfWeek}요일`);
  };

  const currentTimer = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    setTimer(`${hours}:${minutes}:${seconds}`)
  }

  const startTimer = () => {
    setInterval(currentTimer, 1000)
  }

  startTimer()


  return (
    <>
      <FirstContainer>
        <Container>
          <TodayDateContainer>
            <TodayDate>{dayText}</TodayDate>
            <TodayTime>{timer}</TodayTime>
          </TodayDateContainer>
            <TodayDayOfWeek>{dayofweekText}</TodayDayOfWeek>
            <hr/>
            <InputTodo/>
            <TodoList/>
        </Container>
      </FirstContainer>
    </>
  )
}

export default TodoPage
