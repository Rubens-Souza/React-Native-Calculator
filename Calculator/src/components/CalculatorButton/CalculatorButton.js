import React from "react";

import ButtonTypes from "../../shared/constants/ButtonTypes";
import { StyledNumberButton, StyledNumberButtonText, StyledOperationButton, StyledOperationButtonText, StyledDoubleVerticalOperationButton } from "./Styles";

const CalculatorButton = ({
    content, operation, type
}) => {

    const createOperationDoubleButton = () => {
        return (
            <StyledDoubleVerticalOperationButton
                onPress={operation}
                >
                <StyledOperationButtonText>
                    {content}
                </StyledOperationButtonText>
            </StyledDoubleVerticalOperationButton>
        );
    };

    const createOperationButton = () => {
        return (
            <StyledOperationButton
                onPress={operation}
                >
                <StyledOperationButtonText>
                    {content}
                </StyledOperationButtonText>
            </StyledOperationButton>
        );
    };

    const createNumberButton = () => {
        return (
            <StyledNumberButton
                onPress={operation}
                >
                <StyledNumberButtonText>
                    {content}
                </StyledNumberButtonText>
            </StyledNumberButton>
        );
    };

    const getTargetRenderButton = () => {
        switch (type) {
            case ButtonTypes.Operation:
                return createOperationButton();

            case ButtonTypes.OperationDoubleVertical:
                return createOperationDoubleButton();
            
            default:
                return createNumberButton();
        }
    };

    return getTargetRenderButton();
};

export default CalculatorButton;