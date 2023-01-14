import "./App.css";

import YoutubeEmbed from "./components/YoutubeVideo";

export default function App() {
  return (
    <div className="App">
      <h1>Videodle</h1>
      <YoutubeEmbed embedId="djV11Xbc914" />
    </div>
  );
}
