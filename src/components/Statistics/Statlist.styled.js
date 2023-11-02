import styled from 'styled-components';

export const Statsection = styled.section`
  width: 300px;
  background-color: honeydew;
  border-radius: 10px;
  padding: 0;
`;
export const Topic = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: gray;
  padding: 3px;
  margin: 3px;
`;
export const StatList = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0;
  padding: 0;
`;
export const StatsItems = styled.li`
  display: flex;
  flex-direction: column;
`;

export const StatsWrap = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
`;
