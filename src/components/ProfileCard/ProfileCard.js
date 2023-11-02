import { Card, Img, Text, InfoList, InfoItem } from './ProfileCard.styled';

export const Profile = ({
  item: { username, tag, location, avatar, stats },
}) => {
  return (
    <Card>
      <Img src={avatar} alt="User avatar" />
      <Text>{username}</Text>
      <Text>@{tag}</Text>
      <Text>{location}</Text>

      <InfoList>
        <InfoItem>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </InfoItem>
        <InfoItem>
          <span>Views</span>
          <span>{stats.views}</span>
        </InfoItem>
        <InfoItem>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </InfoItem>
      </InfoList>
    </Card>
  );
};
