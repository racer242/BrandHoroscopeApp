import React, { Component } from "react";
import { ReactComponent as X } from "../images/x.svg";

class CompsPopup extends Component {
  constructor(props) {
    super(props);
    this.closeButton_clickHandler = this.closeButton_clickHandler.bind(this);
  }

  closeButton_clickHandler(event) {
    if (this.props.onClose) this.props.onClose();
  }

  render() {
    return (
      <div id="CompsBox" onClick={this.closeButton_clickHandler}>
        <div
          id="PopupContainer"
          key="PopupContainer"
          style={{ maxWidth: 800, background: "none" }}
          {...this.props}
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <div id="PopupContent" key="PopupContent">
            <h1>Участники</h1>
            <div className="space-top">
              <a href="https://april-agency.com/" target="_blank">
                <img
                  src="agency/aprel.svg"
                  height="30"
                  alt="Апрель"
                  title="Апрель"
                ></img>
              </a>
              <h2>Овен (01.04.2014)</h2>
              <p>
                Настоящие огоньки зодиакального круга! С ними каждый день как
                рекламная акция: ярко, динамично и неординарно. В Апреле обожают
                решать самые сложные кейсы и всегда готовы к новым вызовам,
                поэтому, если вам нужно вдохновение и свежие идеи, они готовы
                ворваться, как попап-баннер.
              </p>
            </div>
            <div className="space-top">
              <a href="https://solcreative.ru/" target="_blank">
                <img
                  src="agency/sol.png"
                  height="30"
                  alt="СОЛЬ"
                  title="СОЛЬ"
                ></img>
              </a>
              <h2>Телец (05.05.2014)</h2>
              <p>
                СОЛЬ — яркий представитель стихии креатива. Неисправимые
                гедонисты, они ценят хороший дизайн, брендинг, NFT-практики и
                другой фестивальный эпатаж. Основные черты этого знака —
                предсказуемое безумство, стремление к неописуемому комфорту
                клиента на проекте, а ещё фан, роскошь и прочий дзен.
              </p>
            </div>
            <div className="space-top">
              <a href="https://www.cats.studio/" target="_blank">
                <img
                  src="agency/cats.png"
                  height="50"
                  alt="Cats Digital Studio"
                  title="Cats Digital Studio"
                ></img>
              </a>
              <h2>Близнецы (16.06.2022)</h2>
              <p>
                Настоящие интерактивные мастера, они создают взаимодействие,
                находя свежие ракурсы, призывающие к постоянным экспериментам и
                синергии инновационных технологий и искусства. Не удивительно,
                что эти «мультизадачники», как нейронные сети: быстро
                адаптируются и без устали генерируют идеи.
              </p>
            </div>
            <div className="space-top">
              <a href="https://sensesay.ru/" target="_blank">
                <img
                  src="agency/sense.svg"
                  height="30"
                  alt="Sensesay"
                  title="Sensesay"
                ></img>
              </a>
              <h2>Близнецы (13.06.2018)</h2>
              <p>
                Sensesay — как многорукий бог Шива, справляется со всеми
                проектами сразу, не теряя веселый нрав и энергию в потоке
                многозадачности. Пятничные BrandBar проходят в лучших традициях
                знака: лекция для любознательной стороны, тусовка — для
                коммуникабельной.
              </p>
            </div>
            <div className="space-top">
              <a href="https://hate.agency/ru/" target="_blank">
                <img
                  src="agency/hate.png"
                  height="30"
                  alt="Hate"
                  title="Hate"
                ></img>
              </a>
              <h2>Рак (07.07.2017)</h2>
              <p>
                Это амбициозные, душевные, чувствительные натуры, но за день до
                сдачи тендера бывают раздражительными и резкими, ведь они
                вкладывают в проекты всю душу. На первый взгляд могут показаться
                негативно настроенными, но когда узнаешь их поближе, понимаешь —
                это не хейт, это лав.
              </p>
            </div>
            <div className="space-top">
              <a href="https://makeloveagency.com/ru" target="_blank">
                <img
                  src="agency/makelove.svg"
                  height="30"
                  alt="Makelove"
                  title="Makelove"
                ></img>
              </a>
              <h2>Лев (30.07.2012)</h2>
              <p>
                Они, как «Каннские львы», собирают самых ярких клиентов и самые
                ценные проекты. Огонь дедлайнов — подвластная им стихия! Они
                харизматичны и знают, как впечатлить аудиторию. А ещё им
                покровительствует Солнце, поэтому на всех модных вечеринках в
                пасмурной Москве они всегда в списке желанных гостей.
              </p>
            </div>
            <div className="space-top">
              <a href="https://thedirectors.ru" target="_blank">
                <img
                  src="agency/directors.png"
                  height="50"
                  alt="The Directors"
                  title="The Directors"
                ></img>
              </a>
              <h2>Лев (02.08.2012)</h2>
              <p>
                Они срежиссируют хаотичные идеи в обалденный креатив, превратят
                обычные шрифты в персонализированный арт и все это без рыка на
                заказчика или коллег. Бесконечно энергичные, готовые сходу
                художественно трактовать бриф в поисках УТП и обеспечивать
                техническое совершенство исполнения.
              </p>
            </div>
            <div className="space-top">
              <a href="https://www.depotwpf.ru/" target="_blank">
                <img
                  src="agency/depot.svg"
                  height="35"
                  alt="Depot"
                  title="Depot"
                ></img>
              </a>
              <h2>Дева (02.09.1998)</h2>
              <p>
                Твой номер один в создании и переделывании брендов. Ему не
                страшны коридоры затмения и ретроградные Меркурии, ведь он сам
                затмит кого угодно. Очень большой опыт научил его видеть
                будущее. Но не переживай, Depot не слишком много умничает и
                очень любит тусоваться!
              </p>
            </div>
            <div className="space-top">
              <a href="https://rodnya.moscow/" target="_blank">
                <img
                  src="agency/rodnya.png"
                  height="40"
                  alt="RODNYA Creative PR Studio"
                  title="RODNYA Creative PR Studio"
                ></img>
              </a>
              <h2>Весы (15.10.2015)</h2>
              <p>
                Обаятельные новаторы, стремящиеся ко взаимопониманию между
                людьми и брендами. Две варежки, как две чаши весов,
                символизируют гармонию, а влияние планеты-покровительницы дарует
                им страсть, с которой они берутся за дело. Находят решение любой
                проблеме, так как в проблемы не верят в принципе.
              </p>
            </div>
            <div className="space-top">
              <a href="https://digital-lab.ru/" target="_blank">
                <img
                  src="agency/diglab.svg"
                  height="50"
                  alt="Digital Lab"
                  title="Digital Lab"
                ></img>
              </a>
              <h2>Скорпион (16.11.2010)</h2>
              <p>
                Они держат проект цепко, думают молниеносно, брифуют метко.
                Скорпионы знают, как достичь цели, и если для этого потребуются
                нестандартные решения, что ж... Так даже интереснее!
                Препятствия? Нет! Это ступени роста.
              </p>
            </div>
            <div className="space-top">
              <a href="https://cpeople.ru/" target="_blank">
                <img
                  src="agency/creativepeople.png"
                  height="50"
                  alt="CreativePeople"
                  title="CreativePeople"
                ></img>
              </a>
              <h2>Стрелец (01.04.2003)</h2>
              <p>
                Тубро-коллега, который врывается в офис с неугомонной энергией и
                заряжает всех вокруг. Встреча с ним значит, что твой день
                пройдет на все 100, а то и 200! Огонь в их глазах не угасает,
                даже если дедлайн уже вчера. Он придумает креатив, на который
                можно отреагировать только: «Я в а**е, давай!».
              </p>
            </div>
            <div className="space-top">
              <a href="https://wowow.digital/" target="_blank">
                <img
                  src="agency/wowow.png"
                  height="50"
                  alt="Wowow Digital"
                  title="Wowow Digital"
                ></img>
              </a>
              <h2>Козерог (27.12.2019)</h2>
              <p>
                Обаятельные новаторы, стремящиеся ко взаимопониманию между
                людьми и брендами. Две варежки, как две чаши весов,
                символизируют гармонию, а влияние планеты-покровительницы дарует
                им страсть, с которой они берутся за дело. Находят решение любой
                проблеме, так как в проблемы не верят в принципе.
              </p>
            </div>
            <div className="space-top">
              <a href="https://grape.ru/ru" target="_blank">
                <img
                  src="agency/grape.svg"
                  height="30"
                  alt="Grape"
                  title="Grape"
                ></img>
              </a>
              <h2>Водолей (21.09.2009)</h2>
              <p>
                Виртуозы своего дела, умеющие мастерски обращаться с
                современными технологиями. Они способны видеть альтернативные
                пути решения, даже в самых нестандартных ситуациях. С легкостью
                придумывают новые способы взаимодействия, которые удивляют и
                восхищают целевую аудиторию любого проекта.
              </p>
            </div>
            <div className="space-top">
              <a href="https://rassvet.digital" target="_blank">
                <img
                  src="agency/rassvet.png"
                  height="35"
                  alt="Rassvet.digital"
                  title="Rassvet.digital"
                ></img>
              </a>
              <h2>Водолей (27.01.2017)</h2>
              <p>
                Прогрессивные мудрецы пиара, терпеливые наставники и смелые
                новаторы. Летят вперед, по дороге обучая искусству пиара в
                акселераторе. Сдаваться не в их стиле! Как говорит отдел продаж:
                «ведь даже после самой темной ночи всегда наступает рассвет».
                Воду льют только из кулера, из статей ее выжимают.
              </p>
            </div>
            <div className="space-top">
              <a href="https://mart.agency" target="_blank">
                <img
                  src="agency/mart.svg"
                  height="45"
                  alt="Март"
                  title="Март"
                ></img>
              </a>
              <h2>Рыбы (18.03.2003)</h2>
              <p>
                Тонко чувствуют свежие течения и знают, как ловить волну, чтобы
                оставаться в топе. Гибкие, свободные и творческие по своей
                природе, при этом умеют работать как одна стая, чтобы достичь
                целей. Лучшие идеи у них на крючке. А если будет нужно, всем
                покажут, где раки зимуют.
              </p>
            </div>
          </div>
          <X
            width={60}
            className="close-button popup-close"
            onClick={this.closeButton_clickHandler}
          />
        </div>
        <div id="PageTop" style={{ pointerEvents: "none" }}>
          <div
            className="site-logo"
            style={{ cursor: "pointer", pointerEvents: "all" }}
            onClick={this.closeButton_clickHandler}
          >
            <div className="site-logo-image"></div>
            <div className="site-logo-frame">
              <div className="site-logo-frame-image spin"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompsPopup;
