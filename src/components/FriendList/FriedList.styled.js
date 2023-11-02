import styled from 'styled-components';

const getBgColor = props => {
  switch (props.$status) {
    case 'true':
      return 'green';
    case 'false':
      return 'red';
    default:
      return 'yellow';
  }
};

export const FriendsList = styled.ul`
  width: 300px;
`;

export const Friend = styled.li`
  display: flex;
  margin-bottom: 10px;
`;

export const FriendCard = styled.div`
  display: flex;
  gap: 10px;
  width: 300px;
  border-radius: 8px;
  border: 2px solid black;
  padding: 10px;
  background-color: ${getBgColor};
`;
