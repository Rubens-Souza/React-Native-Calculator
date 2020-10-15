import Colors from "../../shered/constants/Colors";
import styled from "styled-components/native";

export const StyledButton = styled.TouchableOpacity`
    background-color: ${Colors.LightBlue};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    height: 51px;
    width: 51px;
    margin: 10px 10px;
`;

export const StyledButtonText = styled.Text`
    color: ${Colors.White};
    font-size: 27px;
    text-align: center;
    font-weight: bold;
`;