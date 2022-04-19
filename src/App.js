import React, { useContext } from "react";
import { StoreContext } from "./contexts/storeContext";
import Counter from "./components/Counter";
import SimpleCounter from "./components/SimpleCounter";

const App = () => {
    const { state } = useContext(StoreContext);
    console.log('##ABEL## >> state >>  App', state);
    return (
        <div>
            <SimpleCounter/>
            <Counter/>
        </div>
    );
};

export default App;
