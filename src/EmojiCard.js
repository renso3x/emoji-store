import React from 'react';
import { formateDate, formatPrice } from './utils';
import * as S from './styled';

const EmojiCard = ({ emoji }) => {
  return (
    <S.EmojiCard hoverable>
      <S.EmojiMeta title={emoji.face} size={emoji.size} />
      <div className="emoji__description">
        <h6>
          Size: <b>{emoji.size}px</b>
        </h6>
        <h6>Published: {formateDate(emoji.date)}</h6>
      </div>
      <div className="emoji__price">
        <h6>${formatPrice(emoji.price)}</h6>
      </div>
    </S.EmojiCard>
  );
};

export default EmojiCard;
