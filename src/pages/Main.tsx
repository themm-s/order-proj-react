import * as photo from "../constants/index";
import { Section } from "../components/Section";
import { PhotoSection } from "../components/PhotoSection";

export const Main = () => {
  return (
    <>
      <header className="py-5">
        <div className="flex px-5 justify-center">
          <div className="my-5 text-center">
            <h1 className="font-bold font-serif my-3 text-5xl text-center">
              Полный цикл сервисного обслуживания
            </h1>
          </div>
        </div>
        <hr className="border-gray-300 mt-5" />
      </header>
      <Section
        photo={photo.section1Photo}
        title={"Автомобильные газозаправочные станции"}
        reversed={true}
        graybg={false}>
        <br />
        Собственная сеть газозаправочных станций по всему региону, как
        стационарных, так и мобильных, что позволяет заправлять
        <br />ваш транспорт и бытовые баллоны СУГ в удобном для вас месте.
        <br />
        <br />Осуществляем заправку газгольдеров
        по заявке в удобное для вас время.
        <br />
        <br />Проводим плановую ежемесячную тарировку раздаточных колонок
        с заменой фильтров вне зависимости от
        их степени загрязнения.
      </Section>
      <Section
        photo={photo.section2Photo}
        title={"Установка ГБО пропана"}
        reversed={false}
        graybg={true}>
        <br />
        Рациональный способ существенно сократить финансовые расходы на топливо и повысить ресурс
        двигателя практически на 40%.
        <br />
        <br /> Монтаж такой системы является довольно сложным процессом, поэтому доверить его следует
        компетентным и опытным специалистам.
        <br />
        <br />У нас имеется большой опыт в реализации полного спектра услуг в данном направлении –
        от установки ГБО, его сервисного обслуживания до его настройки и ремонта.
      </Section>
      <Section
        photo={photo.section3Photo}
        title={"Аттестация автомобильных и бытовых баллонов"}
        reversed={true}
        graybg={false}>
        <br />
        Освидетельствование может гарантировать то, что баллон безопасен в эксплуатации и может быть использован по
        назначению, в противном случае их эксплуатация недопустима.
        <br />
        <br />Существует единый порядок освидетельствования, во время ее проведения проводят осмотр поверхностей баллонов
        на предмет обнаружения повреждения поверхности.
      </Section>
      <hr className="border-gray-300" />
      <PhotoSection />
      <hr className="border-gray-300" />
      <section className="flex py-5 justify-center">
        <div className="px-5 my-5">
          <div className="text-center">
            <h1 className="mb-5 font-bold text-3xl">Последние новости</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-around">
              <div className="">
                <img src={photo.newsPhoto} className="h-[500px] w-[400px]" />
              </div>
              <div>
                <img src={photo.newsPhoto2} className="h-[500px] w-[400px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};