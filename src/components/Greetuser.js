import { useState } from "react";
import "./GreetUser.css";

const Greetuser = () => {
    const [user, setuser] = useState("");

    function onChange(e) {
        setuser(e.target.value);
    }

    return (
        <div className="greet-container">
            <form>
                <input
                    type="text"
                    value={user}
                    onChange={onChange}
                    placeholder="Enter your name"
                />
            </form>
            <div>
                {user && `Hello ${user}`}
            </div>
        </div>
    );
};

export default Greetuser;
