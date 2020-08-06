import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from './Card';
import { MainHeader, DivCenter } from '../../components/styledComponents';
import { fetchServices } from '../../app/api'

export const ServicesList = () => {
  const services = useSelector(state => state.services.cards)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServices())
  }, []);

  return (
    <>
      <MainHeader>
        <DivCenter>
          Hola mundo
        </DivCenter>
      </MainHeader>
      <DivCenter>
        {
          services.map(service => <Card
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
      </DivCenter>
    </>
  )
}