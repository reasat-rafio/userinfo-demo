import React from "react";
import { useParams } from "react-router-dom";
import InfoCore from "../Info/InfoCore/InfoCore";
import fakeData from "../../fakeData/Index";

const DaynamicDetails = () => {
  const { userName } = useParams();
  const taegetData = fakeData.find((e) => e.name === userName);
  return (
    <div>
      <h2>{userName}</h2>
      <InfoCore displayBtn={false} infos={taegetData} />
    </div>
  );
};

export default DaynamicDetails;
