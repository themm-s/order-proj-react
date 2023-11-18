import { PropsWithChildren } from "react";

type TProps = {
  title: string;
  children: React.ReactNode;
  blueSection?: boolean;
};

export const AboutSection: React.FC<PropsWithChildren<TProps>> = ({ children, title, blueSection }) => {
  return (
    <section className={`pb-8 pt-4 flex justify-center ${blueSection ? "bg-primary" : ""}`}>
      <div className="container">
        <div className="row justify-center text-center">
          <div className="text-center my-5 space-y-8">
            <h1 className="font-bold text-3xl mb-3">{title}</h1>
            <p className="text-black text-xl mb-4">
              {children}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};