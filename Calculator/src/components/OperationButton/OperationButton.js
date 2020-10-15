import React from "react";

import { StyledButton, StyledButtonText } from "./Styles";

const OperationButton = ({
    content, operation
}) => {

    return(
        <StyledButton 
            onPress={operation}>
            <StyledButtonText>
                {content}
            </StyledButtonText>
        </StyledButton>
    );
};

export default OperationButton;