import {
  createContext,
  useContext,
  useReducer,
  type Dispatch,
  type ReactNode,
} from "react";

type Tool = "none" | "pen" | "eraser";

type EditorState = { tool: Tool };
type EditorAction = { type: "set-tool"; tool: Tool };

type EditorContextValue = {
  state: EditorState;
  dispatch: Dispatch<EditorAction>;
};

const EditorContext = createContext<EditorContextValue | null>(null);

function editorReducer(state: EditorState, action: EditorAction): EditorState {
  switch (action.type) {
    case "set-tool":
      return { ...state, tool: action.tool };
    default:
      throw new Error("Unhandled editor action type");
  }
}

const initialState: EditorState = { tool: "none" };

function EditorContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(editorReducer, initialState);

  return (
    <EditorContext.Provider value={{ state, dispatch }}>
      {children}
    </EditorContext.Provider>
  );
}

function useEditor() {
  const ctx = useContext(EditorContext);
  if (!ctx)
    throw new Error("useEditor must be used inside EditorContextProvider");
  return ctx;
}

export { EditorContextProvider, useEditor };
