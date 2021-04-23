import './App.css'
import Body from '../Body/Body'
import Header from "../Header/Header";
import Footer from '../Footer/Footer'
import Sidebar from "../Sidebar/Sidebar";
import {useState} from "react";

function App() {

    const [showOptions, setShowOptions] = useState(false)

    return (
    <div className="App">
        <Header />
        <Body setShowOptions={setShowOptions} showOptions={showOptions}/>
        <Footer />
        <Sidebar showOptions={showOptions} setShowOptions={setShowOptions}/>
    </div>
    );
}

export default App;
