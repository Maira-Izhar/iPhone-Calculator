import React, {useState} from 'react';
import './Calculator.css'; 

const Calculator = () => {
  const [currVal, setcv] = useState('0');
  const [prevVal, setpv] = useState(null);
  const [operator, Setop] = useState(null);
  const [display, setdisplay] = useState('0');
  const [arr, setarr] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [activeOp, setActiveOp] = useState(null); 

  const handleNumberClick = (number) => {
    setActiveOp(null);
    if(operator === null){
      setcv(prevVal =>{
        return prevVal === '0' ? String(number) : prevVal + String(number);
      })
      setdisplay(prevVal =>{
        return prevVal === '0' ? String(number) : prevVal + String(number);
      })
    }
    else {
      
      setcv(currValVal =>{
        return currVal === '0' ? String(number) : currVal + String(number);
      })
      setdisplay(currValVal =>{
        return currVal === '0' ? String(number) : currVal + String(number);
      })
    }
      
  }

 
  const handleopClick = (op) => {
    setpv(currVal);
    setcv('0');
    Setop(op);
    setActiveOp(op);
  }


  const isFloat = (num) => num % 1 !== 0;

  const handleEqualClick = () => {
    if(operator && prevVal !== null){
        const prev = parseFloat(prevVal);
        const curr = parseFloat(currVal);
        let result;
        switch (operator){
          case '+': 
                   result = prev + curr;
                   break;
          case '-': 
                    result = prev - curr;
                    break;
          case '÷': 
                    result = curr === 0? 'Error' : prev / curr;
                    break;
          case '×': 
                    result = prev * curr;  
                    break;        
          default: return;
        }

        if (result !== 'Error' && isFloat(result)) {
          result = result.toFixed(5);
        }

        const newCalculation = { prevVal, currVal, result, operator };
        setarr(prevArr => {
          const updatedArr = [...prevArr, newCalculation];
          return updatedArr.length > 3 ? updatedArr.slice(-3) : updatedArr;
        });
        setcv(String(result));
        setdisplay(String(result));
        setpv(null);
        Setop(null);
        setActiveOp(null);
        
    }
    
  }
  const handleClearClick = () => {
    setcv('0');
    setdisplay('0');
    setpv(null);
    Setop(null);
    setActiveOp(null);
  }
  const handleToggleSignClick = () => {
    setcv(prevVal => String(parseFloat(prevVal) * -1));
    setdisplay(prevVal => String(parseFloat(prevVal) * -1));
  }

  const handlePercentageClick = () => {
    let perc = parseFloat(currVal);
    perc = parseFloat(perc/100);
    setcv(String(perc));
    setdisplay(String(perc));

  }

  const handleDecimalClick = () => {
    if (!currVal.includes('.')) {
      setcv(prevVal => prevVal + '.');
      setdisplay(prevVal => prevVal + '.');

    }
  }

  const History = ({ calculations }) => (
    <div className="history">
      {calculations.map((calc, index) => (
        <div key={index} className='history-item'>
          {calc.prevVal} {calc.operator} {calc.currVal} = {calc.result}
        </div>
      ))}
    </div>
  );

  return (
    <>
    <div className='heading'> <h1>IPhone Calculator</h1></div>
    <div class="background">
  <button class="menu__icon" onClick={() => setShowHistory(!showHistory)}>
    <span></span>
    <span></span>
    <span></span>
  </button>

      {showHistory && <History calculations={arr} />}
</div>
    <div className="container">
        <div className="screen">{display}</div>
      <div className="lower">
            <div className="row1">
                <button class="Btn" onClick={handleClearClick}>AC</button>
                <button class="Btn" onClick={handleToggleSignClick}>+/-</button>
                <button class="Btn" onClick={handlePercentageClick}>%</button>
                <button class="Btnsign" className={`Btnsign ${activeOp === '÷' ? 'active' : ''}`} onClick={() => handleopClick('÷')}>÷</button>
            </div>
            <div className="row2">
                <button class="Btn" onClick={() => handleNumberClick(7)}>7</button>
                <button class="Btn" onClick={() => handleNumberClick(8)}>8</button>
                <button class="Btn" onClick={() => handleNumberClick(9)}>9</button>
                <button  className={`Btnsign ${activeOp === '×' ? 'active' : ''}`} onClick={() => handleopClick('×')}>×</button>
            </div>
            <div className="row3">
                <button class="Btn" onClick={() => handleNumberClick(4)}>4</button>
                <button class="Btn" onClick={() => handleNumberClick(5)}>5</button>
                <button class="Btn" onClick={() => handleNumberClick(6)}>6</button>
                <button class="Btnsign"  className={`Btnsign ${activeOp === '-' ? 'active' : ''}`} onClick={() => handleopClick('-')}>-</button>
            </div>
            <div className="row4">
                <button class="Btn" onClick={() => handleNumberClick(1)}>1</button>
                <button class="Btn" onClick={() => handleNumberClick(2)}>2</button>
                <button class="Btn" onClick={() => handleNumberClick(3)}>3</button>
                <button class="Btnsign"  className={`Btnsign ${activeOp === '+' ? 'active' : ''}`} onClick={() => handleopClick('+')}>+</button>
            </div>
            <div className="row5">
                <button class="Btn0" onClick={() => handleNumberClick(0)}>0</button>
                <button class="Btn" onClick={handleDecimalClick}>.</button>
                <button class="Btnsign" onClick={handleEqualClick}>=</button>
            </div>
      </div>
    </div>
    <div className="footer">This is designed by <a href="https://github.com/Maira-Izhar" target="_blank">Maira Izhar</a> <br></br>You can contact me at <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox' target="_blank">mairaizhar2004@gmail.com</a></div>

    </>
  );
};

export default Calculator; 