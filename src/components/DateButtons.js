import React, { useState } from 'react';
import styled from '@emotion/styled';
import { add, sub, isToday, format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { filterServicesByDate } from '../features/services/serviceSlice'

const ButtonContainer = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  cursor: pointer;
  width: 30px;
  border: none;
  background-color: transparent;
`;

export const DateButtons = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date())

  const handleIncreaseDate = () => {
    let newDate = add(date, { days: 1 })
    setDate(newDate);
    dispatch(filterServicesByDate(format(newDate, "y-MM-dd")))
  }

  const handleDecreaseDate = () => {
    let newDate = sub(date, { days: 1 });
    setDate(newDate);
    dispatch(filterServicesByDate(format(newDate, "y-MM-dd")));
  }

  //console.log(format(date, "y-MM-dd"))

  return (
    <ButtonContainer>
      <Button onClick={handleDecreaseDate}>{"<"}</Button>
      <div>
        {
          isToday(date) ? "Today" : format(date, "MMM d")
        }
      </div>
      <Button onClick={handleIncreaseDate}>{">"}</Button>
    </ButtonContainer>
  )
}