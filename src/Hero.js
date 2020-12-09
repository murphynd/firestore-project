import React from "react";
import * as Tone from "tone";

const synth = new Tone.MembraneSynth().toMaster();

function playSynth() {
  synth.triggerAttackRelease("C2", "8n");
}

const Hero = ({ handleLogout }) => {
  return (
    <section className="hero">
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <button id="button" onClick={playSynth}>
        start
      </button>
    </section>
  );
};
export default Hero;
