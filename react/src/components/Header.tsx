import Button from "./Button";
import man from "./man.png";

const Header = () => {
    return (
        <header className="flex justify-between">
            <div>
                <h2 className="text-2xl font-bold">OnlyChat alfa</h2>
            </div>
            <div className="flex justify-between">
                {/* <div>
                    <Button className="bg-transparent text-neutral-300 font-medium">
                        Register
                    </Button>
                </div>
                <div>
                    <Button className="bg-white px-6 py-2">Log in</Button>
                </div> */}
                <div>
                    <Button className="ml-2 bg-white px-6 py-2">Logout</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
