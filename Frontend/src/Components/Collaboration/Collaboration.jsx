import React from "react";
import "./Collaboration.css";

const Collaboration = () => {
  return (
    <section className="collaboration">
      <div className="collaboration_container">

        {/* TOP LABEL */}
        <div className="collaboration_top">
          <span className="collaboration_label">COLLABORATION</span>
          <div className="collaboration_line"></div>
        </div>

        {/* MAIN CONTENT */}
        <div className="collaboration_main">

          {/* LEFT CONTENT */}
          <div className="collaboration_left">
            <h2>Let's work together.</h2>

            <p>
              Ready to make a difference? Visit our call-to-action section to
              learn how you can support our mission,{" "}
              <strong>invest in solar energy</strong>, or get started with your
              own solar project today.
            </p>
          </div>

          {/* RIGHT CTA */}
          <div className="collaboration_right">
            <div className="down_arrow">↓</div>

            <button className="collaboration_btn">
              Let's Talk <span>↗</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Collaboration;