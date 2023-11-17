import { PropsWithChildren } from "react";

type TProps = {
  photo: string;
  title: string;
  reversed: boolean;
  graybg: boolean;
};

export const Section: React.FC<PropsWithChildren<TProps>> = ({
  photo,
  title,
  children,
  reversed,
  graybg }) => {
  const reversedClass = reversed ? " xl:flex-row-reverse" : "xl:flex-row";
  const grayBackGround = graybg ? "bg-gray-50" : "";

  return (
    <div className={`grid xl:flex xl:flex-row${reversedClass} items-center p-5 xl:px-12 ${grayBackGround}`}>
      <img className="m-auto xl:mx-5 w-1/2" src={photo} alt="..." />
      <div className="text-center">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="text-2xl mx-5 text-gray-500">
          {children}
        </p>
      </div>
    </div>
  );
};