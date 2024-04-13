import "./App.css";
import Chat from "./components/Chat";
import Header from "./components/Header";

function App() {
    return (
        <>
            <Header />
            <main className="flex p-2 h-full">
                <div className="z-10 h-full w-full font-mono text-sm lg:flex">
                    <Chat />
                </div>
            </main>
        </>
    );
}

export default App;
