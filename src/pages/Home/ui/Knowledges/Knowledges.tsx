import './Knowledges.scss'
import Image from 'next/image'
import knowledgesBg from '../../../../../public/images/tech.svg'

function Knowledges () {
  return (
    <section className="knowledges">
      <div className="container">
        <h2 className="section__title knowledges__title">
          Набор знаний, который вы получите
        </h2>
        <div className="knowledges__technologies">
          <div className="knowledges__block">
            <h4 className="knowledges__sm-title">HTML и CSS</h4>
            <p className="knowledges__sm-desc">
              Введение в HTML и CSS. Разберем как построить правильную структуру
              верстки. Познакомимся с популярными инструментами для верстки:
              Flexbox, Grid. Освоим HTML Теги. CSS-свойства. Позиционирование,
              z-index. Псевдоклассы. Псевдоэлементы. Подключение нестандартных
              шрифтов. Формы, стилизация полей форм.Адаптивная верстка
              html-страниц, единицы измерения. Mobile first.SVG графика, иконочные
              шрифты. Css-свойство Animation. Swipper. Animation CSS. Bootstrap 4.
              Методология БЭМ.Sass, SCSS.Pixel Perfect
            </p>
            <h4 className="knowledges__sm-title">Введение в Java Script</h4>
            <p className="knowledges__sm-desc">
              Разберем Основные типы данных JS.Массивы. Циклы Функции.Объекты.
              Использование JS c элементами страницы. DOM. Анонимные функции.
              Асинхронность. События браузера. LocalStorage.Рекурсия. Протокол
              HTTP, AJAX-запросы. Получение данных с сервера. Async_Await. Изучим
              Основы ООП, прототипно-ориентированное наследование. Перехват
              ошибок. Promises. Замыкания, области видимости. Учимся работать с
              системой контроля версий Git и с сервисом GitHub
            </p>
            <h4 className="knowledges__sm-title">React</h4>
            <p className="knowledges__sm-desc">
              Разберем NPM и управление зависимостями. Создадим
              Frontend-приложение на React. Изучим что такое React. Компоненты, их
              взаимодействие. State, props. JSX Как Планировать и создавать
              React-проект. Как построть структуру проекта. Жизненный цикл
              компонентов. Паттерны React. Использование React с API. fetch, axios
              History браузера. React Router Разделение на компоненты. Хуки в
              React, React Context
            </p>
            <h4 className="knowledges__sm-title">Redux. Redux Toolkit.</h4>
            <p className="knowledges__sm-desc">
              Разберем Redux (actions, reducers) Рассмотрим как работать с
              Асинхронными действиями в Redux. redux-thunk. Изучим Redux Toolkit.
            </p>
            <h4 className="knowledges__sm-title">TypeScript</h4>
            <p className="knowledges__sm-desc">
              Разберем Типы и Интерфейсы. Enum. Generics. Изучим Типизацию
              событий. MouseEvents, DragEvents, ChangeEvents Типизацию хуков
              useRef, UseHistory, useParams . Типизацию react-router-dom.
              Рассмотрим как Создавать компоненты с TypeScript.
            </p>
          </div>
        </div>
        <div className="knowledges__bg">
          {/* <img src="./assets/images/tech.svg" alt="" /> */}
          <Image src={knowledgesBg} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Knowledges