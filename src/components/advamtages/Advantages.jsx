import css from "../advamtages/Advantages.module.css";
import rectangle from '../../assets/rectangle.png';
import box from '../../assets/box.svg';
import fire from '../../assets/fire.svg';
import hands from '../../assets/hands.svg';
import blank from '../../assets/blank_icon.svg';
import arrow from '../../assets/arrow_icon.png';
import man from '../../assets/man_icon.png';
import whiteRectangle from '../../assets/white_rectangle.png';
import purpleBox from '../../assets/purple_box_icon.svg';
import purpleFire from '../../assets/purple_fire.svg';
import purpleHands from '../../assets/purple_hands.svg';
import purpleBlank from '../../assets/purple_blank.svg';
import purpleArrow from '../../assets/purple_arrow.svg';
import purpleMan from '../../assets/purple_man.svg';
import { useState } from "react";

const Advantages=() =>{
  // const [squareStates, setSquareStates] = useState([false, false]); // Массив состояний для двух квадратов
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);

  const handleMouseHover1 = () => {
    setIsHovered1(!isHovered1);
  };

  const handleMouseHover2 = () => {
    setIsHovered2(!isHovered2);
  };

  const handleMouseHover3 = () => {
    setIsHovered3(!isHovered3);
  };

  const handleMouseHover4 = () => {
    setIsHovered4(!isHovered4);
  };

  const handleMouseHover5 = () => {
    setIsHovered5(!isHovered5);
  };

  const handleMouseHover6 = () => {
    setIsHovered6(!isHovered6);
  };
  // const handleMouseHover = (index) => {
  //   const newSquareStates = [...squareStates]; // Создаем копию массива состояний
  //   newSquareStates[index] = !newSquareStates[index]; // Изменяем состояние для конкретного квадрата
  //   setSquareStates(newSquareStates); // Обновляем состояние
  // };
    
      return (
        <section className={css.aboutUs}>
          <div className={css.title}><h1>Почему стоит работать с нами?</h1></div>
          <div className={css.rectangles}>
          
            <div>
              <img className={css.rectangle} src={!isHovered1 ? rectangle : whiteRectangle} alt="rectangle" onMouseEnter={handleMouseHover1} // Обработчик для события наведения курсора
                onMouseLeave={handleMouseHover1}></img>
              <img className={!isHovered1 ? css.icon : css.iconOpacity} src={!isHovered1 ? box : purpleBox} alt="box"></img>
              {!isHovered1 ? 
              <p className={css.text}>Первый день<br></br>работы бесплатно</p> :
              <p className={css.textBlack}>Попробуйте, освойтесь<br></br>и выберите то, что удобно<br></br>вам</p>}
            </div>
             
            <div>
              <img className={css.rectangle} src={!isHovered2 ? rectangle : whiteRectangle} alt="rectangle" onMouseEnter={handleMouseHover2} // Обработчик для события наведения курсора
                onMouseLeave={handleMouseHover2}></img>
              <img className={!isHovered2 ? css.icon : css.iconOpacity} src={!isHovered2 ? fire : purpleFire} alt="fire"></img>
              {!isHovered2 ?
              <p className={css.text}>Экономия<br></br>на топливе</p> : 
              <p className={css.textBlack}>Все наши авто на газу. Он<br></br>экономичнее бензина на<br></br>700 &#8381; за смену</p>}
            </div>

            <div>
              <img className={css.rectangle} src={!isHovered3 ? rectangle : whiteRectangle} alt="rectangle" onMouseEnter={handleMouseHover3} // Обработчик для события наведения курсора
                onMouseLeave={handleMouseHover3}></img>
              <img className={!isHovered3 ? css.handsIcon : css.iconHandsOpacity} src={!isHovered3 ? hands : purpleHands} alt="hands"></img>
              {!isHovered3 ?
              <p className={css.text}>Поддержка 24/7<br></br>по телефону и на<br></br>дороге</p>:
              <p className={css.textBlack}>Менеджеры и служба<br></br>безопасности всегда готовы<br></br>ответить или выехать на<br></br>дорогу</p>}
            </div>

          </div>

          <div className={css.rectangles}>

            <div>
              <img className={css.rectangle} src={!isHovered4 ? rectangle : whiteRectangle} alt="rectangle" onMouseEnter={handleMouseHover4} // Обработчик для события наведения курсора
               onMouseLeave={handleMouseHover4}></img>
              <img className={!isHovered4 ? css.lowIcon : css.lowIconOpacity} src={!isHovered4 ? blank: purpleBlank} alt="blank"></img>
              {!isHovered4 ?
              <p className={css.text}>Высокий приоритет<br></br>по заказам</p>:
              <p className={css.textBlack}>У вас будут заказы, даже в<br></br>периоды низкого спроса на<br></br>такси</p>}
            </div>

            <div>
              <img className={css.rectangle} src={!isHovered5 ? rectangle : whiteRectangle} alt="rectangle" onMouseEnter={handleMouseHover5} // Обработчик для события наведения курсора
               onMouseLeave={handleMouseHover5}></img>
              <img className={!isHovered5 ? css.lowIcon : css.lowIconOpacity} src={!isHovered5 ? arrow : purpleArrow} alt="arrows"></img>
              {!isHovered5 ?
              <p className={css.text}>Карьерный<br></br>рост</p>:
              <p className={css.textBlack}>Треть наших менеджеров<br></br>начали карьеру с должности<br></br>водителя</p>}
            </div>

            <div>
              <img className={css.rectangle} src={!isHovered6 ? rectangle : whiteRectangle} alt="rectangle" onMouseEnter={handleMouseHover6} // Обработчик для события наведения курсора
               onMouseLeave={handleMouseHover6}></img>
              <img className={!isHovered6 ? css.lowIcon : css.lowIconOpacity} src={!isHovered6 ? man : purpleMan} alt="man"></img>
              {!isHovered6 ?
              <p className={css.text}>Профессиональное<br></br>обучение</p>:
              <p className={css.textBlack}>4-дневное сопровождение<br></br>от успешного водителя<br></br>таксопарка</p>}
            </div>

          </div>
        </section>
      )
    
  }
  
  export default Advantages;