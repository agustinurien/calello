import React, { useState } from "react";
import "./cirugias.css";

const Cirugias = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="cirugiasContainer">
        <h1>1</h1>
        <button onClick={() => setOpen(!open)}>abrir</button>
        {open && <div className="texto"></div>}
      </div>

      <div className="cirugiasContainer">
        <h1>2</h1>
      </div>

      <div className="cirugiasContainer">
        <h1>3</h1>
      </div>

      <div className="cirugiasContainer">
        <h1>4</h1>
      </div>

      <div className="cirugiasContainer">
        <h1>5</h1>
      </div>
    </>
  );
};

export default Cirugias;
