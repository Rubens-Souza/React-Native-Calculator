import Colors from "../../../shared/constants/Colors";
import styled from "styled-components/native";

export const StyledResultText = styled.Text`
    color: ${Colors.SoftBlack};
    font-weight: bold;
    font-size: 50px;
`;

export const StyledEqualsSign = styled.Text`
    color: ${Colors.LightBlue};
    font-weight: bold;
    font-size: 50px;
`;

export const StyledResultGroup = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom-width: 2px;
    border-bottom-color: ${Colors.LightGray};
    padding-bottom: 12px;
    margin-bottom: 21px;
`;