import React from "react";
import { StyledResultText, StyledEqualsSign, StyledResultGroup } from "./Styles";

const Result = ({
    value
}) => {

    return (
        <StyledResultGroup>
            <StyledEqualsSign>
                =
            </StyledEqualsSign>
            <StyledResultText>
                {value}
            </StyledResultText>
        </StyledResultGroup>
    );
};

export default Result;