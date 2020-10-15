import React from "react";
import { SafeAreaView } from "react-native";

import Styles from "./Styles";

import Keyboard from "../features/Keyboard/Keyboard";

const App = (
    props
) => {

    return (
        <SafeAreaView style={Styles.App}>
            <Keyboard/>
        </SafeAreaView>
    );
};

export default App;