import styled from 'styled-components';

export const Card = styled.div`
  width: 300px;
  height: auto;
  background-color: ghostwhite;
  border-radius: 10px;
  text-align: center;
  padding-top: 10px;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
`;

export const Text = styled.p`
  margin: 5px;
`;

export const InfoList = styled.ul`
  width: 100%;
  padding: 0;
  list-style: none;
  color: aliceblue;
  background-color: gainsboro;
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
`;

export const InfoItem = styled.li`
  padding: 20px;
  display: flex;
  gap: 5px;
  flex-direction: column;
`;
