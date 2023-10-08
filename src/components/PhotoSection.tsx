import React from "react";
import * as photo from "../constants/index";

type TPhotos = {
  photo: string;
  name: string;
  position: string;
};

export const Photos: React.FC<TPhotos> = ({ photo, name, position }) => {
  return (
    <div className="text-center">
      <img className="w-[150px] h-[150px] p-1 border rounded-full m-auto" src={photo} />
      <h5 className="font-bold text-lg font-serif">{name}</h5>
      <div className="font-sans m-auto w-5/6">{position}</div>
    </div>
  );
};

export const PhotoSection = () => {
  return (
    <div className="flex px-5 my-5 justify-center">
      <div className="flex flex-row space-x-28">
        <Photos
          photo={photo.genDir}
          name={"Александр Павлович"}
          position={"Генеральный директор"}
        />
        <Photos
          photo={photo.deputyDir}
          name={"Сергей Калюков"}
          position={"Зам. Генерального директора по производству"}
        />
        <Photos
          photo={photo.commerceDir}
          name={"Михаил Савченко"}
          position={"Зам. Генерального директора по коммерчиским вопросом"}
        />
        <Photos
          photo={photo.finDir}
          name={"Людмила Александровна"}
          position={"Финансовый директор"}
        />
      </div>
    </div>
  );
};;