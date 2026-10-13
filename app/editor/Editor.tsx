"use client";

import { Stage, Layer } from "react-konva";
import { useWindowSize } from "@/hooks/window-size";
import { Toolbar } from "./Toolbar";
import { EditorContextProvider } from "@/context/EditorContext";

export const Editor = () => {
  const window = useWindowSize();

  return (
    <EditorContextProvider>
      <div className="mappy-editor relative w-screen h-screen">
        <Stage width={window.width} height={window.height}>
          <Layer></Layer>
        </Stage>
        <Toolbar />
      </div>
    </EditorContextProvider>
  );
};
