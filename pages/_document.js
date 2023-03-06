import Document, { Html, Main, NextScript, Head } from "next/document";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App({ authService, dbService, youtube }) {
  return (
    <div className={`${styles.app} ${themeClass}`}>
      <Header />
      <DndProvider backend={HTML5Backend}>
        <Home />
      </DndProvider>
      {player && <Player />}
    </div>
  );
}

export default App;
