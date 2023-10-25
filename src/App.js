import Navbar from "./components/navbar/Navbar";
import {useState} from "react";
import ImageContainer from "./components/imageContainer/ImageContainer";

function App() {
    const [search, setSearch] = useState("");


    return (
        <>
            <Navbar setSearch={setSearch} search={search}/>
            <ImageContainer search={search}/>
        </>
    );
}

export default App;
