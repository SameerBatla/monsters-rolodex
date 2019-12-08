import React from "react";
import "./card-list.styles.css";
import Card from "../card/Card";

function Cardlist(props) {
  return (
    <div className="card-list">
      {props.monsters.map(monster => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
}

export default Cardlist;
