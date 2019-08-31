import { Card, Icon, Layout } from 'antd';
import styled from 'styled-components';

const { Content, Header } = Layout;

export const HeaderContent = styled(Header)`
  h1 {
    color: #fff;
    padding: 0 16px;
  }
`;

export const PaddingContent = styled.div`
  padding: 16px;

  ${props => props.right && 'float: right'}
`;

export const Main = styled.div`
  padding: 15px;
`;

export const Container = styled(Content)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const Spinner = styled(Icon)`
  && {
    font-size: 50px;
    color: #de0606;
  }
`;

export const EmojiCard = styled(Card)`
  position: relative;
  margin: 10px;
  height: 200px;

  .ant-card-body {
    padding: 16px;
  }

  .emoji__description {
    h6 {
      margin-bottom: 0;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 12px;
    }
  }

  .emoji__price {
    position: absolute;
    top: -12px;
    right: -15px;
    background-color: #ee0606;
    padding: 5px;
    h6 {
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 0;
    }
  }

  img {
    height: 155px;
  }
`;

export const EmojiMeta = styled(Card.Meta)`
  .ant-card-meta-title {
    text-align: center;
    ${props => props.size && `font-size: ${props.size}px`};
    margin-bottom: 16px;
    padding: 20px;
  }
`;

export const EndContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
