import section1Photo from "../assets/aboutfirst.svg";

export const Main = () => {
  return (
    <>
      <header className="py-5">
        <div className="flex px-5 justify-center">
          <div className="my-5 text-center">
            <h1 className="font-bold mt-3 text-5xl text-center">
              Полный цикл сервисного обслуживания
            </h1>
          </div>
        </div>
        <hr className="mt-10 border-gray-300" />
      </header>
      <section className="py-5">
        <div className="">
          <div className="">
            <div className="">
              <img className=""
                src={section1Photo} alt="..." />
            </div>
            <h2 className="text-4xl font-bold">Автомобильные газозаправочные станции</h2>
            <p className="text-2xl mb-0">
              Собственная сеть газозаправочных станций по всему региону, как стационарных, так и мобильных, что позволяет заправлять
              <br />ваш транспорт и бытовые баллоны СУГ в удобном для вас месте.
              <br />
              <br />Осуществляем заправку газгольдеров по заявке в удобное для вас время.
              <br />
              <br />Проводим плановую ежемесячную тарировку раздаточных колонок с заменой фильтров вне зависимости от их степени загрязнения.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};