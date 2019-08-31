import React from 'react';
import * as S from './styled';

const Loader = () => {
  return (
    <S.Container>
      <S.Spinner type="loading" />
    </S.Container>
  );
};

export default Loader;
