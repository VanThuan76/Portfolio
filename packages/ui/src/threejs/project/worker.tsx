import { render } from "@react-three/offscreen";
import Scene from "./scene";

self.onmessage = (event) => {
  const { position, scale, isFly } = event.data;
  render(<Scene isFly={isFly} scale={scale} position={position} />);
};
