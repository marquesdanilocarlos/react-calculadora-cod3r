import { CalculatorContainer } from "./styles";
import { Button } from "../components/Button";
import { Display } from "../components/Display";

export function Calculator() {
    function clearMemory() {
        console.log("limpar");
    }

    function setOperation(operation) {
        console.log(operation);
    }

    function addDigit(n) {
        console.log(n);
    }

    return (
        <>
            <h1>Calculadora</h1>
            <CalculatorContainer class="calculator">
                <Display value={100} />
                <Button triple label="AC" click={clearMemory} />
                <Button label="/" click={setOperation} operation />
                <Button label="7" click={addDigit} />
                <Button label="8" click={addDigit} />
                <Button label="9" click={addDigit} />
                <Button label="*" click={setOperation} operation />
                <Button label="4" click={addDigit} />
                <Button label="5" click={addDigit} />
                <Button label="6" click={addDigit} />
                <Button label="-" click={setOperation} operation />
                <Button label="1" click={addDigit} />
                <Button label="2" click={addDigit} />
                <Button label="3" click={addDigit} />
                <Button label="+" click={setOperation} operation />
                <Button double label="0" click={addDigit} />
                <Button label="." click={addDigit} />
                <Button label="=" click={setOperation} operation />
            </CalculatorContainer>
        </>
    );
}