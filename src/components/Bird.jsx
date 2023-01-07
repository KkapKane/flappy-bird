import { useEffect } from "react";

export default function Bird({ yPos, setYPos }) {

  //run this check when yPos moves
  useEffect(() => {
    //if the y pos is out the box set it back into the box

    if (yPos > 92) {
      setYPos(92);
    }
  }, [yPos]);

  return (
    <div id="bird" style={{ top: `${yPos}%` }}></div>
  );
}