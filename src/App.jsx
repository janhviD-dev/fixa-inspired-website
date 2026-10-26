import { useState } from "react";
import Preloader from "./component/Preloader";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import { BrowserRouter} from "react-router";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-black overflow-x-hidden">
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        
          <main className="relative isolate">
            <Home isLoaded={true} />
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
            <Page5 />
            
          </main>
        
      )}
    </div>
  );
}

export default App;
