import React, { useContext} from "react";
import "../Sidebar/css/Sidebar.css";
import iqons from "../../Iqons/iqons";
import { Context } from "../../context/Context";


export default function Sidebar() {
  const {onSent, prevPrompt,setRecentPrompt,newChat}=useContext(Context)
  const loadPrompt=async(prompt)=>{
    setRecentPrompt(prompt)
  await  onSent(prompt)
  }
  return (
    <div className="Side-bar">
      <div className="offcanvas offcanvas-start " id="demo">
        {/*Side-bar new Chat  */}
        <div className="offcanvas-header ">
          <div onClick={()=>newChat()}  className="new-chat">
            <h3 className="offcanvas-title">
              <iqons.GoPlus />
            </h3>
            <p className="new-chat-p">New Chat</p>
          </div>
          <button
          
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <hr />
        <div className="offcanvas-body">
          {/*Side-bar recent */}
          <div className="recent">
            <h4 className="recent-title">Recent</h4>
            {prevPrompt.map((item)=>{
                return (
                  <div onClick={()=>loadPrompt(item)} className="recent-content">
                  <span>
                    <iqons.BiMessage />
                  </span>
                  <p className="recent-item-p">{item.slice(0,18)}</p>
        
                </div>
                )
              })}
         
          </div>
          {/*Side-bar bottom */}
          <div className="bottom">
            <div className="bottom-item ">
              <span>
                <iqons.GoQuestion />
              </span>
              <p>Help</p>
            </div>
            <div className="bottom-item ">
              <span>
                <iqons.GoHistory />
              </span>
              <p>Activity</p>
            </div>
            <div className="bottom-item ">
              <span>
                <iqons.IoMdSettings />
              </span>
              <p>Settings</p>
            </div>
          </div>
        </div>
      </div>
      {/*Side-bar Iqon */}
      <p className="menu" data-bs-toggle="offcanvas" data-bs-target="#demo">
        <iqons.IoMenu />
      </p>
    </div>
  );
}
