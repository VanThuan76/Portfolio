import { render } from "@react-three/offscreen";
import Scene from "./scene";

self.onmessage = (event) => {
  const { breakpoint, positions } = event.data;
  render(<Scene breakpoint={breakpoint} positions={positions} />);
};
