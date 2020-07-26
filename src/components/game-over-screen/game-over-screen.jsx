import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {AppRoute} from '../../common/consts';

const GameOverScreen = ({onReplayButtonClick}) => {
  return (
    <section className="result">
      <div className="result__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
      </div>
      <h2 className="result__title">Какая жалость!</h2>
      <p className="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
      <Link
        className="replay"
        to={AppRoute.ROOT}
        type="button"
        onClick={onReplayButtonClick}
      >
        Попробовать ещё раз
      </Link>
    </section>
  );
};

GameOverScreen.propTypes = {
  onReplayButtonClick: PropTypes.func.isRequired,
};

export default GameOverScreen;
