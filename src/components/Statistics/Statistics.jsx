import {
  StatList,
  StatisticsSection,
  Title,
  StatItem,
  StatLabel,
  StatPerc,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export function Statistics({ title, stats }) {
  return (
    <StatisticsSection>
      {title && <Title>Upload stats</Title>}

      <StatList>
        {stats.map(stat => {
          return (
            <StatItem key={stat.id}>
              <StatLabel>{stat.label}</StatLabel>
              <StatPerc>{stat.percentage}%</StatPerc>
            </StatItem>
          );
        })}
      </StatList>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
