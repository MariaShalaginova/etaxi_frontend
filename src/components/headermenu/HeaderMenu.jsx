import css from './HeaderMenu.module.css'
import { Link } from 'react-router-dom'

function HeaderMenu() {
    return (
        <nav className={css.mobile}>
           
                <ul className={css.navigation}>
                <Link to='/'>
                    <li className={css.item}><a href="ya.ru">Машины</a></li>
                </Link> 
                        <div className={css.vl}>  
                        </div>
                    <li className={css.item}><a href="ya.ru">Отзывы</a></li>
                         <div className={css.vl}>      
                        </div>
                    <li className={css.item}><a href="ya.ru">Контакты и офисы</a></li>
                         <div className={css.vl}>  
                        </div>
                    <li className={css.item}><a href="ya.ru">Команда</a></li>
                         <div className={css.vl}>  
                        </div>
                    <li className={css.item}><a href="ya.ru">Блог</a></li>
                </ul>
            
        </nav>
    )
}
export default HeaderMenu