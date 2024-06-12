import iqons  from "../../../../Iqons/iqons"; 
import "../../css/Main.css";
import { Context } from "../../../../context/Context";
import { useContext } from "react";
export default function Sugesstions() {
  const { onSent } = useContext(Context);
  const handleClick = (pValue) => {
    console.log(pValue);
    onSent(undefined, pValue);
  };

  return (
    <div className="container-fluid cards row ">
      <div className="card col-xl-2  col-lg-6 col-sm-12 ">
        <div className="card-body cardBody">
          <p
            onClick={() =>
              handleClick(
                "Suggest beautiful places to see on an upcoming road trip"
              )
            }
          >
            Suggest beautiful places to see on an upcoming road trip
          </p>
          <span className="cardBody-Iqon">
            <iqons.LiaCompass />
          </span>
        </div>
      </div>
      <div className="card col-xl-2  col-lg-5 col-sm-12 ">
        <div className="card-body cardBody">
          <p
            onClick={() =>
              handleClick("Briefly summerize this concept:urban planning")
            }
          >
            Briefly summerize this concept:urban planning
          </p>
          <span className="cardBody-Iqon">
            <iqons.AiOutlineBulb />
          </span>
        </div>
      </div>
      <div className="card col-xl-2  col-lg-5 col-sm-12">
        <div className="card-body cardBody">
          <p
            onClick={() =>
              handleClick(
                "Brainstorm team bonding activities for our work retreat"
              )
            }
          >
            Brainstorm team bonding activities for our work retreat
          </p>
          <span className="cardBody-Iqon">
            <iqons.FaRegMessage />
          </span>
        </div>
      </div>
      <div className="card col-xl-2 col-lg-5 col-sm-12">
        <div className="card-body cardBody">
          <p
            onClick={() => {
              handleClick("Tell me about React js and React native");
            }}
          >
            Tell me about React js and React native
          </p>
          <span className="cardBody-Iqon">
            <iqons.FaCode />
          </span>
        </div>
      </div>

      <p className="bottom-p">
        Gemini may display inaccurate info, including about people, so
        double-check its responses. Your privacy and Gemini Apps{" "}
      </p>
    </div>
  );
}
