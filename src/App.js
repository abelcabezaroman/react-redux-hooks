import React, { useContext } from "react";
import { StoreContext } from "./contexts/storeContext";
import Counter from "./components/Counter";

const App = () => {
    const { state } = useContext(StoreContext);
    console.log('##ABEL## >> state >>  App', state);
    return (
        <div>
            <Counter/>
        </div>
    );
};

export default App;
