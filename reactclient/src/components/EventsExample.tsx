import React, {FC} from "react";

const EventsExample: FC = () => {
  const clickHandler = (e: React.MouseEvent) => {
    
  }

  return (
    <div>
      <button onClick={clickHandler}></button>
    </div>
  );
}