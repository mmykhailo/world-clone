import { jsx as _jsx } from "react/jsx-runtime";
import './App.css';
import Wordle from './components/Wordle';
function App() {
    return (_jsx("div", { className: "App", children: _jsx(Wordle, {}) }));
}
export default App;
