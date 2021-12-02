import "./App.css";
import { ChangeColor } from "./components/ChangeColor";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
    return (
        <div className="App">
            <ChangeColor />
            <Profile />
            <Login />
        </div>
    );
}

export default App;
