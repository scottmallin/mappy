import { useEditor } from "@/context/EditorContext";

export const Toolbar = () => {
  const { state, dispatch } = useEditor();
  return (
    <div className="mappy-toolbar absolute bottom-4 translate-x-1/2 left-1/2">
      <button onClick={() => dispatch({ type: "set-tool", tool: "pen" })}>
        Line
      </button>
      {state.tool}
    </div>
  );
};
