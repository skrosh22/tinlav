import React, { useState } from 'react';
import { IphonePro } from '../../components/IphonePro';
import './style.css';
import { Link } from 'react-router-dom';


<><Link to="/male">C мужчинами</Link> <Link to="/female">С женщинами</Link></>

export const Screen = () => {
  // Состояние для отслеживания выбранного пола
  const [selectedGender, setSelectedGender] = useState('');

  // Обработчик события при выборе пола
  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <div className="screen">
      <div className="div">
        <div className="group">
          <div className="group-2">
            <a href="/login" className="frame-button  white-text">
              <div>Войти</div>
            </a>
            <div className="group-3">
              <div className="group-4">
                <a href="/male">
                  <div className="div-wrapper">
                    <button className="button" onClick={() => handleGenderSelection('Мужчина')}>Мужчина</button>
                  </div>
                </a>
                <a href="/female">
                  <div className="frame-button-2">
                    <button className="button" onClick={() => handleGenderSelection('Женщина')}>Женщина</button>
                  </div>
                </a>
              </div>
              <div className="text-wrapper-3">Укажите свой пол</div>
              <div className="text-wrapper-4">Добро пожаловать</div>
            </div>
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group-2">
            <p className="p">
              <span className="span">У вас ещё нет аккаунта? </span>
              <a href="/RegestrationPage">Зарегистрироваться</a>
            </p>
          </div>
        </div>
        <div className="text-wrapper-6">Установите наше приложение.</div>
        <div className="social">
          <img
            className="unnamed"
            alt="Unnamed"
            src="https://generation-sessions.s3.amazonaws.com/b2e825aa10c2720f5038517e1643f9bb/img/unnamed-1@2x.png"
          />
          <img
            className="download-on-the-app"
            alt="Download on the app"
            src="https://generation-sessions.s3.amazonaws.com/b2e825aa10c2720f5038517e1643f9bb/img/download-on-the-app-store-1.svg"
          />
        </div>
        <div className="group-5">
          <div className="select-language">
            <div className="text-wrapper-7">Русский</div>
            <img
              className="iconamoon-arrow-up"
              alt="Iconamoon arrow up"
              src="https://generation-sessions.s3.amazonaws.com/b2e825aa10c2720f5038517e1643f9bb/img/iconamoon-arrow-up-2-duotone.svg"
            />
          </div>
          <p className="text-wrapper-8">© 2023 Знакомства через добрые дела</p>
        </div>
        <img
          className="logo-white"
          alt="Logo white"
          src="https://generation-sessions.s3.amazonaws.com/b2e825aa10c2720f5038517e1643f9bb/img/logowhite@2x.png"
        />
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="graphite">
              <div className="overlap-group-3">
                <img
                  className="img-3"
                  alt="Screen"
                  src="https://generation-sessions.s3.amazonaws.com/b2e825aa10c2720f5038517e1643f9bb/img/screen-2@2x.png"
                />
                <img
                  className="graphite"
                  alt="Graphite"
                  src="https://generation-sessions.s3.amazonaws.com/b2e825aa10c2720f5038517e1643f9bb/img/graphite@2x.png"
                />
              </div>
            </div>
            <IphonePro
              className="iphone-13-pro"
              color="gold"
              gold="https://generation-sessions.s3.amazonaws.com/b2e825aa10c2720f5038517e1643f9bb/img/gold-1@2x.png"
              goldClassName="design-component-instance-node"
              overlapGroupClassName="iphone-pro-instance"
              screen="https://generation-sessions.s3.amazonaws.com/b2e825aa10c2720f5038517e1643f9bb/img/screen-1@2x.png"
              screenClassName="iphone-13-pro-instance"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
