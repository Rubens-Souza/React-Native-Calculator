import React from "react";
import { View } from "react-native";

import Result from "./Result/Result";
import OperationDisplay from "./OperationDisplay/OperationDisplay";

const Display = ({
    value
}) => {

    return (
        <View>
            <Result value={100000} />
            <OperationDisplay formula={"12 x 3 + 4"} />
        </View>
    );
};

export default Display;