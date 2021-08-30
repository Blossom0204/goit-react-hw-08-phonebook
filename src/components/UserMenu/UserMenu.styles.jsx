import styled from '@emotion/styled'
export const UserContainer = styled.div`
  display: 'flex';
  align-items: 'center';
`
export const UserButton = styled.button`
  background-color: #ebedf32c;
  color: #161127;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  line-height: 24px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid #1f3d9e30;
  box-shadow: 0 12px 16px 0 #278cbb3d, 0 17px 50px 0 #1f3d9e30;
  &:hover {
    border-radius: 4px;
    background-color: #020c2b2c;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 12px 16px 0 #278cbb3d, 0 17px 50px 0 #1f3d9e30;
  }
`
