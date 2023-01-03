import React, { useState } from "react";
const CardHolder = (props) => {
  const [classDiv, setClassDiv] = useState(true);
  return (
    <div
      key={props.index}
      onClick={() => setClassDiv(!classDiv)}
      className={classDiv ? "card card-body" : "country-detail"}
    >
      <img alt={props.data.name} src={props.data.flag} className="thumbnail" />
      <div className="content">
        <h6> {props.data.name}</h6>
        <strong> Population : </strong>
        {props.data.population.toLocaleString()}
        <br />
        <strong> Region :</strong>
        {props.data.region}
        <br />
        <strong> Capital :</strong>
        {props.data.capital}
        <br/>
        <strong>Languages:</strong>
      {props.data.languages.map(x => x.name).join(', ')}
          <br/>
      </div>
    </div>
  );
};
export default CardHolder;
