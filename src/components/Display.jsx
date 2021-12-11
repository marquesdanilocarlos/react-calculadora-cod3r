import { StyledDisplay } from "./styles";

export function Display(props) {
    return <StyledDisplay className="display">{props.value}</StyledDisplay>;
}
