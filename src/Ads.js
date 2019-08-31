import React from 'react';
import { Card } from 'antd';
import * as S from './styled';

const Ads = ({ ads }) => {
  return (
    <S.EmojiCard cover={<img alt="ads" src={ads} />}>
      <Card.Meta description="Ads Section" />
    </S.EmojiCard>
  );
};

export default Ads;
