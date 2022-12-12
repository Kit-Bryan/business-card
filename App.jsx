import ReactDOM from "react-dom/client";
import Portrait from "./components/Portrait";
import MainContent from "./components/MainContent"
import Footer from "./components/Footer";

export default function App () {
    return (
        <div className="app">
            <Portrait />
            <MainContent />
            <Footer />
        </div>
    )
}