import React from "react";
import "./Info.css";
import fakeData from "../../fakeData/Index";
import { useState } from "react";
import InfoCore from "./InfoCore/InfoCore";
import Cart from "./Cart/Cart";
import Details from "./Details/Details";

const Info = () => {
  const [infos, setInfos] = useState(fakeData);
  const [eIfnos, setEinfos] = useState([]);
  const [lastInfos, setLastInfos] = useState([]);

  const onButtonClick = (eInfo) => {
    const newInfo = [...eIfnos, eInfo];
    setEinfos(newInfo);
    setLastInfos(eInfo);
    console.log(lastInfos);
    console.log(eIfnos);
  };

  return (
    <div className="info">
      <Details eIfnos={eIfnos} lastInfos={lastInfos} />
      <div className="info-core">
        {infos.map((inf) => (
          <InfoCore
            displayBtn={true}
            onButtonClick={onButtonClick}
            infos={inf}
          ></InfoCore>
        ))}
      </div>
      <Cart eIfnos={eIfnos} />
    </div>
  );
};

export default Info;
