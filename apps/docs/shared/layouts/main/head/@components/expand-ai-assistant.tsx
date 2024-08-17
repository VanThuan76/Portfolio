"use client";
import { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

import transcript from "@server/actions/azure";

import { Toast } from "@ui/molecules/other-utils/toast";
import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";

export const mimeType = "audio/webm";
const initialState = {
  sender: "",
  response: "",
  id: "",
};
export type Message = {
  sender: string;
  response: string;
  id: string;
};

const VoiceSynthesizer = ({ state }: { state: any }) => {
  const [synth, setSynth] = useState<SpeechSynthesis | null>(null);

  useEffect(() => {
    setSynth(window.speechSynthesis);
  }, []);

  useEffect(() => {
    if (!state.response || !synth) return;
    Toast({
      variant: "default",
      title: state.response,
    });
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

const ExpandAIAssistant = () => {
  const [state, formAction] = useFormState(transcript, initialState);
  const [permission, setPermission] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [audioChunk, setAudioChunk] = useState<Blob[]>([]);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const getMicrophonePermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch (error: any) {
        console.log(error.message);
      }
    } else {
      console.log("The MediaRecord AI is not supported in your browse");
    }
  };
  useEffect(() => {
    getMicrophonePermission();
  }, []);
  const { pending } = useFormStatus();
  const uploadAudio = (blob: Blob) => {
    const file = new File([blob], "audio.webm", { type: mimeType });
    if (fileRef.current) {
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      fileRef.current.files = dataTransfer.files;
      if (buttonRef.current) {
        buttonRef.current.click();
      }
    }
  };
  const startRecording = async () => {
    if (stream === null || pending || mediaRecorder === null) return;
    setRecordingStatus("recording");
    const media = new MediaRecorder(stream, { mimeType });
    mediaRecorder.current = media;
    mediaRecorder.current.start();
    let localAudioChunk: Blob[] = [];
    mediaRecorder.current.ondataavailable = (e) => {
      if (typeof e.data === "undefined") return;
      if (e.data.size === 0) return;
      localAudioChunk.push(e.data);
    };
    setAudioChunk(localAudioChunk);
  };
  const stopRecording = async () => {
    if (mediaRecorder.current === null || pending) return;
    setRecordingStatus("inactive");
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      const audioBlob = new Blob(audioChunk, { type: mimeType });
      uploadAudio(audioBlob);
      setAudioChunk([]);
    };
  };
  return (
    <form
      action={formAction}
      onError={(e) => {
        new Error(`Error ${e}`);
      }}
    >
      <input type="file" name="audio" hidden ref={fileRef} />
      <button type="submit" hidden ref={buttonRef} />
      <div
        className="w-[35px] h-[35px] overflow-hidden rounded-full cursor-pointer"
        onClick={() => !permission && getMicrophonePermission()}
      >
        {pending && (
          <LoaderImage
            src="/siri-active.gif"
            isLoader={false}
            alt="Siri Active"
            width={100}
            height={100}
            className="assistant w-full h-full object-cover object-center rounded-full grayscale"
          />
        )}
        {permission && recordingStatus === "inactive" && !pending && (
          <LoaderImage
            src="/siri.png"
            onClick={startRecording}
            isLoader={false}
            alt="Siri Not Active"
            width={100}
            height={100}
            className="w-full h-full object-cover object-center rounded-full assistant cursor-pointer hover:scale-110 transition-all duration-150 ease-in-out"
          />
        )}
        {recordingStatus === "recording" && (
          <LoaderImage
            src="/siri-active.gif"
            onClick={stopRecording}
            isLoader={false}
            alt="Siri Recording"
            width={100}
            height={100}
            className="w-full h-full object-cover object-center rounded-full assistant cursor-pointer hover:scale-110 transition-all duration-150 ease-in-out"
          />
        )}
        <VoiceSynthesizer state={state} />
      </div>
    </form>
  );
};

export default ExpandAIAssistant;
