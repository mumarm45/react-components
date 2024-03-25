import React from 'react';
import { ContentStyledComponent } from './content.styled';

export const Content = ({ children }: MainComoonentProps) => {
  return <ContentStyledComponent>{children}</ContentStyledComponent>;
};
interface MainComoonentProps {
  children: React.JSX.Element;
}
