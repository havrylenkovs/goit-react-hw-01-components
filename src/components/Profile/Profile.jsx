import PropTypes, { number } from "prop-types";
import {ProfileDiv, Description, Avatar, Name, Tag, Stats, Label, Quantity} from "./Profile.styled"

export function Profile({ username, tag, location, avatar, stats }) {
	return (
		<ProfileDiv>
  <Description>
    <Avatar
      src={avatar}
      alt="User avatar"
    />
		<Name>{username}</Name>
    <Tag>@{tag}</Tag>
    <p>{location}</p>
  </Description>

  <Stats>
    <li>
      <Label>Followers</Label>
      <Quantity> {stats.followers}</Quantity>
    </li>
    <li>
      <Label>Views</Label>
      <Quantity> {stats.views}</Quantity>
    </li>
    <li>
      <Label>Likes</Label>
      <Quantity> {stats.likes}</Quantity>
    </li>
  </Stats>
</ProfileDiv>
	)
}

Profile.propTypes = {
	username: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	avatar: PropTypes.string,
	stats: PropTypes.shape({
		followers: number.isRequired,
		views: number.isRequired,
		likes: number.isRequired,
	}).isRequired,
}