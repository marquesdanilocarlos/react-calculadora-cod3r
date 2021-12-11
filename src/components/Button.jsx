import "./styles";
import { StyledButton } from "./styles";
export function Button(props) {
    let classes = "button ";
    classes += props.operation ? "operation " : "";
    classes += props.double ? "double " : "";
    classes += props.triple ? "triple " : "";

    return (
        <StyledButton onClick={(e) => props.click && props.click(props.label)} className={classes}>
            {props.label}
        </StyledButton>
    );
}
