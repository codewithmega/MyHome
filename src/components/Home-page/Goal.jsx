import React from "react";

const Goal = () => {
  return (
    <div>
      <div className="mt-10 goal-section w-full h-90 relative">
        <div className="goal-head text-center">
          <br/>
          <h3 className="mt-15 sansation text-white text-4xl font-semibold"  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
            <span>OUR</span> <span>GOAL</span>
          </h3>
        </div>
        <div className="goal-content text-center mx-auto p-3 text-white outfit text-2xl w-11/12 md:w-9/12 mt-7"  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
          <span className="italic">"To build a sustainable environment founded on quality services with
          appropriate techniques and dependable work-force"</span>
        </div>
      </div>
    </div>
  );
};

export default Goal;
