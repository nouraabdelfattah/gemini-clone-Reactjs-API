import React, { useContext } from "react";
import iqons from "../../../../Iqons/iqons";

import { Context } from "../../../../context/Context";
export default function Search() {
  const { onSent, setInput, input } = useContext(Context);

  return (
    <div className="search">
      <div className="container  row search-box ">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          className="col-md-6 col-12 search-input"
          placeholder="Enter Question?"
        
        />

        <div className="col-md-4 col-5 search-iqon">
          <iqons.MdOutlineAddPhotoAlternate className="photo-iqon" />
          <iqons.IoMicOutline />
          {input ? (
            <iqons.VscSend
              className="send-iqon"
              onClick={() => onSent(undefined, input)}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      </div>
   
  );
}
