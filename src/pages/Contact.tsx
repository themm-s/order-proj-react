export const Contact = () => {
  return (
    <>
      <section className="p-12">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-center rtl:text-right text-gray-500">
            <thead className="text-xs text-gray uppercase">
              <tr>
                <th scope="col" className="px-6 py-3">
                  № АГЗС
                </th>
                <th scope="col" className="px-6 py-3">
                  Адрес
                </th>
                <th scope="col" className="px-6 py-3">
                  График работы
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  1
                </th>
                <td className="px-6 py-4">
                  г. Нефтеюганск, ул. Объездная б/н, возле ЮНП № 100
                </td>
                <td className="px-6 py-4">
                  Круглосуточно
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  2
                </th>
                <td className="px-6 py-4">
                  г. Пыть-ях, ул. Магистральная, промзона Северная
                </td>
                <td className="px-6 py-4">
                  Круглосуточно
                </td>
              </tr>
              <tr className="bg-white">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  3
                </th>
                <td className="px-6 py-4">
                  г. Нефтеюганск, Северо-Восточная зона, массив 2, квартал 5, строение 2
                </td>
                <td className="px-6 py-4">
                  Круглосуточно
                </td>
              </tr>
              <tr className="bg-white">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  4
                </th>
                <td className="px-6 py-4">
                  Через день:
                  <br />
                  2 день – сп. Каркатеевы
                  <br />
                  Приразломное месторождение (район КПП)
                  <br />
                  Приобское месторождение (поворот на Елыковское м/р)
                </td>
                <td className="px-6 py-4">
                  Через день:
                  <br />
                  с 17.00 до 18.00
                  <br />
                  с 11.00 до 13.00
                  <br />
                  14.00 до 16.00
                </td>
              </tr>
              <tr className="bg-white">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  5
                </th>
                <td className="px-6 py-4">
                  Заправка газгольдеров
                </td>
                <td className="px-6 py-4">
                  По звонку
                </td>
              </tr>
              <tr className="bg-white">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  6
                </th>
                <td className="px-6 py-4">
                  г. Нефтеюганск, Северо-Западная зона, ул. Сургутская, здание 17, Гор. Газ
                </td>
                <td className="px-6 py-4">
                  С 07:00 до 19:00
                </td>
              </tr>
              <tr className="bg-white">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  7
                </th>
                <td className="px-6 py-4">
                  Ханты-Мансийский район, с. Селиярово, ул. Лесная
                </td>
                <td className="px-6 py-4">
                  С 7:00 до 22:00
                </td>
              </tr>
              <tr className="bg-white">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  9
                </th>
                <td className="px-6 py-4">
                  Ханты-Мансийский район, Сургутский район, сельское поселение Угут, промышленная зона Угутская 1, улица Советская, № 29.
                </td>
                <td className="px-6 py-4">
                  С 7:00 до 22:00
                </td>
              </tr>
              <tr className="bg-white">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  Офис
                </th>
                <td className="px-6 py-4">
                  г. Нефтеюганск, 1 мкр., дом 33, помещение 7
                </td>
                <td className="px-6 py-4">
                  Пн-Чт с 8:30 до 17:00
                  <br />
                  Пт с 8:30 до 12:30
                  <br />
                  Обед с 12:30 до 14:00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};