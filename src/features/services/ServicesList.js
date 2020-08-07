import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from '../../components/Card';
import { fetchServices } from '../../app/api'
import { MainContainer } from '../../components/styledComponents';

export const ServicesList = () => {
  const services = useSelector(state => state.services.cards)
  const selectedDate = useSelector(state => state.services.selectedDate)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServices())
  }, []);

  return (
    <MainContainer>
      {
        services.filter(card => card.release_date.includes(selectedDate)).map(service => <Card
          key={service.id}
          title={service.title}
          subscriptionCost={service.subscription_cost}
          status={service.status}
          totalSubscription={service.total_subscriptions}
          totalVacancies={service.total_vacancies}
          totalEarned={service.total_earned}
          totalViews={service.total_views}
        />)
      }
    </MainContainer>
  )
}