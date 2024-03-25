import React from 'react';
import { IconContext } from 'react-icons';
import styled from 'styled-components';

interface ProviderProps {
  // only if you use Typescript
  className?: string;
  children: React.JSX.Element;
}
const Provider = ({ className, children }: ProviderProps) => (
  <IconContext.Provider value={{ className }}>{children}</IconContext.Provider>
);

export const StyledIcon = styled(Provider)`
  ${({ theme: t }) => {
    return `color:  ${t.colors.text};
      height: ${t.sizes[24]}px;
      width: ${t.sizes[24]}px;
      `;
  }};
`;
