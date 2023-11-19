import logo from "../assets/agslogo.svg";

export const Navbar = () => {
  return (
    <nav className="flex p-3 bg-blue-500 md:px-24">
      <a href="/"><img src={logo} className="absolute md:relative w-52 mb-auto" /></a>
      <ul className="md:hidden my-auto mt-14 space-y-1 text-md text-white font-semibold">
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
      <ul className="md:flex hidden space-x-5 my-auto ml-auto mr-20 text-md text-white font-semibold">
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