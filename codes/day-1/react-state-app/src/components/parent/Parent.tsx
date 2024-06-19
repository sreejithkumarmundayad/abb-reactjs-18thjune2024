import { useState } from "react"
import Nested from "../nested/Nested"

const Parent = () => {
    console.log('parent rendered');

    const [number1, setNumber1] = useState<number>(0);
    const [number2, setNumber2] = useState<number>(0);
    const [operation, setOperation] = useState<string>('add');
    const [result, setResult] = useState<number>(0);
    const calculate = () =>{
        switch(operation){
            case 'add':
                setResult(number1 + number2);
            break;
            case 'subtract':
                setResult(number1 - number2);
            break;
            case 'multiply':
                setResult(number1 * number2);
            break;
            case 'divide':
                setResult(number1 / number2);
            break;
        }
    }
    return (
        <div>
            <form id="calculatorForm">
                <input type="radio" id="add" name="operation" value="add" onChange={() => setOperation('add')} />
                <label htmlFor="add">Add</label><br/>
                <input type="radio" id="subtract" name="operation" value="subtract" onChange={() => setOperation('subtract')} />
                <label htmlFor="subtract">Subtract</label><br/>
                <input type="radio" id="divide" name="operation" value="divide" onChange={() => setOperation('divide')} />
                <label htmlFor="divide">Divide</label><br/>
                <input type="radio" id="multiply" name="operation" value="multiply" onChange={() => setOperation('multiply')} />
                <label htmlFor="multiply">Multiply</label><br/>

                <input type="number" id="number1" name="number1" 
                value={number1}
                placeholder="Number 1" 
                onChange={(e) => {
                    const value = e.target.value; 
                    setNumber1(parseInt(value));
                }} />
                <input type="number" id="number2" name="number2" placeholder="Number 2"
                value={number2}
                onChange={(e) => {
                    const value = e.target.value; 
                    setNumber2(parseInt(value));
                }} 
                />
                <button type="button" onClick={(e) => {
                    e.preventDefault(); 
                    calculate();
                }}>Submit</button>
            </form>

            <div id="result">{result}</div>

        </div>
    )
}
export default Parent