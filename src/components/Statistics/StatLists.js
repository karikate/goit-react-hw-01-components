import {
  Statsection,
  Topic,
  StatList,
  StatsItems,
  StatsWrap,
} from './Statlist.styled';

export const Statistics = ({ items }) => {
  return (
    <Statsection>
      <Topic>Upload stats</Topic>
      <StatList>
        {items.map(item => (
          <StatsItems key={item.id}>
            <StatsItem item={item} />
          </StatsItems>
        ))}
      </StatList>
    </Statsection>
  );
};

const StatsItem = ({ item: { label, percentage } }) => {
  return (
    <StatsWrap>
      <span>{label}</span>
      <span>{percentage}%</span>
    </StatsWrap>
  );
};
