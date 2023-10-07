import { PropsWithChildren } from "react";

type TProps = {
  photo: string;
  title: string;
  reversed: boolean;
};

export const Section: React.FC<PropsWithChildren<TProps>> = ({ photo, title, children, reversed }) => {
  const reversedClass = reversed ? " xl:flex-row-reverse" : "xl:flex-row";

  return (
    <div className={`grid xl:flex xl:flex-row${reversedClass} items-center xl:px-12`}>
      <img className="m-auto w-2/3" src={photo} alt="..." />
      <div className="text-center">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="text-2xl mx-5 text-gray-500">
          {children}
        </p>
      </div>
    </div>
  );
};