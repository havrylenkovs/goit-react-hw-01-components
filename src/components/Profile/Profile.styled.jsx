import styled from 'styled-components';

const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Description = styled.div`
  display: block;
  margin-bottom: 15px;
  text-align: center;
  padding: 25px 30px;
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border: 4px solid white;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  border-radius: 45%;
  margin: 0 auto;
  margin-bottom: 15px;
`;
const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: black;
  margin-bottom: 5px;
`;
const Tag = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: black;
  margin-bottom: 5px;
`;

const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgb(162 162 162 / 62%);

  background-color: #43436629;
  li {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: calc(33.3%);

    padding: 10px 0;
  }
  li:not(:last-child) {
    border-right: 1px solid rgb(162 162 162 / 62%);
  }
`;
const Label = styled.span`
  font-size: 12px;
  margin-bottom: 2px;
`;

const Quantity = styled.span`
  color: black;
`;
export { ProfileDiv, Description, Avatar, Name, Tag, Stats, Label, Quantity };
