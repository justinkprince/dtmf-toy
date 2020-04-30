import Tone from "tone";

let tones = [];

const startTone = frequencies => {
  frequencies.forEach(frequency => {
    const tone = new Tone.Oscillator(frequency, "sine").toMaster();
    tone.start();
    tones.push(tone);
  });
};

const stopTone = () => {
  tones.forEach(tone => tone.stop());
  tones.length = 0;
};

export { startTone, stopTone };

export default {
  startTone,
  stopTone
};
