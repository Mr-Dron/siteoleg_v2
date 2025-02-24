import React from "react";
import "./Courses.css";

function Header() {
  return (
    <div className="course-block">
        <div className="name-block">Курсы</div>
        <div className="tariffs-container">
            <div className="tariff-container">
                <div className="description-tariff">Информация о тарифе</div>
                <a href="#header" className="button-tariff">кнопка тарифа</a>
            </div>
            <div className="tariff-container">
                <div className="description-tariff">Информация о тарифе</div>
                <a href="#header" className="button-tariff">кнопка тарифа</a>
            </div>
            <div className="tariff-container">
                <div className="description-tariff">Информация о тарифе</div>
                <a href="#header" className="button-tariff">кнопка тарифа</a>
            </div>
        </div>
        <a href="#header" className="button-course-manager">кнопка к менеджеру</a>
    </div>
  );
}

export default Header;