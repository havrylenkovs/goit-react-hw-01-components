import styled from 'styled-components';

const StatList = styled.ul`
  display: flex;
  list-style: none;
  height: 50px;
  padding: 0;
  margin: 0;
  margin-bottom: 20px;
`;

const StatisticsSection = styled.section`
  width: 400px;
  background-color: lightgray;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h2`
  text-align: center;
  background-color: #ffff;
  margin: 0;
  padding: 20px;
  text-transform: uppercase;
  color: #00000091;
  font-weight: 600;
`;

const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 5);
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 500;
  background-color: ${getRandomHexColor};
`;

const StatLabel = styled.span`
  font-size: 14px;
  margin-bottom: 5px;
`;

const StatPerc = styled.span`
  font-size: 18px;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export { StatList, StatisticsSection, Title, StatItem, StatLabel, StatPerc };
