"use client";
import { useEffect, useState } from "react";
import { toast } from "@/components/custom/toast";

interface Props {
  state: any;
}

const VoiceSynthesizer = ({ state }: Props) => {
  const [synth, setSynth] = useState<SpeechSynthesis | null>(null);

  useEffect(() => {
    setSynth(window.speechSynthesis);
  }, []);

  useEffect(() => {
    if (!state.response || !synth) return;
    toast(
      {
        variant: "default",
        title: state.response,
      },
      { duration: 100000 },
    );
    const wordsToSay = new SpeechSynthesisUtterance(state.response);
    synth.cancel();
    const voices = synth.getVoices();
    const englishVoice = voices.find((voice) => voice.lang === "en-US");

    if (englishVoice) {
      wordsToSay.voice = englishVoice;
      wordsToSay.pitch = 1;
      wordsToSay.rate = 1;
      wordsToSay.volume = 1;
      synth.speak(wordsToSay);
    }
    return () => {
      synth.cancel();
    };
  }, [state]);
  return null;
};
export default VoiceSynthesizer;
