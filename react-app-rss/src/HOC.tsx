/* eslint-disable react/jsx-props-no-spreading */
import { useLocation } from 'react-router';
import React from 'react';

export interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
}

export const HOCProps = <Props extends WithRouterProps>(Component: React.ComponentType<Props>) => {
  return function ComponentWithHOC(props: Omit<Props, keyof WithRouterProps>) {
    const location = useLocation();
    return <Component {...(props as Props)} location={location} />;
  };
};
