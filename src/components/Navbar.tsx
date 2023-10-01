import logo from "../assets/agslogo.svg";

export const Navbar = () => {
  return (
    <nav className="flex p-3 bg-blue-500">
      <img src={logo} className="w-60" />
      <ul className="flex space-x-5 my-auto ml-auto mr-20 text-md text-white font-bold">
        <li>
          <a href="/">Главная</a>
        </li>
        <li>
          <a href="/about">О нас</a>
        </li>
        <li>
          <a href="/contact">Контакты</a>
        </li>
      </ul>
    </nav>
  );
};