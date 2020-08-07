import React from 'react';
import { CardContainer, ContentContainer, CardTitle, CardContent, Circle, CardProgress, CardFooter } from './CardStyled'
import { ReactComponent as DollarIcon } from '../images/money.svg';
import { ReactComponent as UsersIcon } from '../images/users.svg';
import { ReactComponent as ViewsIcon } from '../images/views.svg';

export const Card = ({ title, subscriptionCost, status, totalSubscription, totalVacancies, totalEarned, totalViews }) => {
  return (
    <CardContainer>
      <ContentContainer>
        <CardTitle>{title}</CardTitle>
        <div>
          <CardContent>
            <p>${subscriptionCost} / month</p>
            <p>
              {(status === 'live') ? <Circle bgColor="green" /> : null}
              {(status === 'saved') ? <Circle bgColor="yellow" /> : null}
              {(status === 'rejected') ? <Circle bgColor="red" /> : null}
              {status}
            </p>
          </CardContent>
          <CardProgress value={totalSubscription} max={totalVacancies} />
        </div>
      </ContentContainer>
      <CardFooter>
        <div><DollarIcon />${totalEarned}</div>
        <div><UsersIcon /> {totalSubscription}</div>
        <div><ViewsIcon /> {totalViews}</div>
      </CardFooter>
    </CardContainer>
  )
}
