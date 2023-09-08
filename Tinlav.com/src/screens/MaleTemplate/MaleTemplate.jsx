import React, { useState } from 'react';
import { IphonePro } from '../../components/IphonePro';
import './style.css';
import { Link } from 'react-router-dom';


export const MaleTemplate = () => {
    return (
        <div className="screen">
          <div className="div">
            <div className="group">
              <img className="group-2" alt="Group" src="group-9.png" />
              <div className="group-3">
                <div className="frame-button">
                  <div className="text-wrapper-2">Войти</div>
                </div>
                <div className="group-4">
                  <div className="group-5">
                    <div className="div-wrapper">
                      <div className="text-wrapper-2">C мужчинами</div>
                    </div>
                    <div className="frame-button-2">
                      <div className="text-wrapper-2">С женщинами</div>
                    </div>
                    <div className="frame-button-3">
                      <div className="text-wrapper-2">Со всеми</div>
                    </div>
                  </div>
                  <p className="p">С кем вы хотите знакомиться?</p>
                  <div className="text-wrapper-3">Добро пожаловать</div>
                </div>
              </div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <p className="div-2">
                  <span className="span">У вас ещё нет аккаунта? </span>
                  <span className="text-wrapper-4">Зарегистрироваться</span>
                </p>
              </div>
            </div>
            <div className="text-wrapper-5">Установите наше приложение.</div>
            <div className="social">
              <img className="unnamed" alt="Unnamed" src="unnamed-1.png" />
              <img className="download-on-the-app" alt="Download on the app" src="download-on-the-app-store-1.svg" />
            </div>
            <div className="group-6">
              <div className="select-language">
                <div className="text-wrapper-6">Русский</div>
                <img className="iconamoon-arrow-up" alt="Iconamoon arrow up" src="iconamoon-arrow-up-2-duotone.svg" />
              </div>
              <p className="text-wrapper-7">© 2023 Знакомства через добрые дела</p>
            </div>
            <img className="logo-white" alt="Logo white" src="logo-white.png" />
            <div className="overlap-wrapper">
              <div className="overlap">
                <div className="graphite">
                  <div className="overlap-group-3">
                    <img className="img-3" alt="Screen" src="screen-3.png" />
                    <img className="graphite" alt="Graphite" src="graphite-2.png" />
                  </div>
                </div>
                <IphonePro
                  className="iphone-13-pro"
                  color="gold"
                  gold="gold-2.png"
                  goldClassName="design-component-instance-node"
                  overlapGroupClassName="iphone-pro-instance"
                  screen="screen-2.png"
                  screenClassName="iphone-13-pro-instance"
                />
              </div>
            </div>
          </div>
        </div>
      );
}
