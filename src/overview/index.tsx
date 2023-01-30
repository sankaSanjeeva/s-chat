/** @jsxImportSource @emotion/react */
import "twin.macro";
import { Chat, Contact, Info } from "./components";

export default function Overview() {
  return (
    <div tw="flex h-screen">
      <Contact />
      <Chat />
      <Info />
    </div>
  );
}
