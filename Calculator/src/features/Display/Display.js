import React from "react";
import { View } from "react-native";

import Result from "./Result/Result";
import OperationDisplay from "./OperationDisplay/OperationDisplay";

const Display = ({
    value="", formula=""
}) => {

    return (
        <View>
            <Result value={value} />
            <OperationDisplay formula={formula} />
        </View>
    );
};

export default Display;