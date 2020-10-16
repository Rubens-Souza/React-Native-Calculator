import React from "react";
import { StyledFormulaText, StyledFormulaOperationSymbolText } from "./Styles";

import StringUitls from "../../../shared/utils/StringUtils";

const OperationDisplay = ({
    formula=StringUitls.Empty
}) => {

    const soroundOperationCharactes = () => {
        let content = new Array(0);
        formula.split('').map((character) => {
            if (character !== StringUitls.Espace && character !== '.' && Number.isNaN(parseInt(character))) {
                content.push(
                    <StyledFormulaOperationSymbolText>
                        {character}
                    </StyledFormulaOperationSymbolText>
                );
            }
            else {
                content.push(character);
            }
        });

        return content;
    };

    return (
        <StyledFormulaText>
            {soroundOperationCharactes()}
        </StyledFormulaText>
    );
};

export default OperationDisplay;