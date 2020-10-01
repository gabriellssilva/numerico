import React, { useState } from 'react';
import './App.css';


function Sinal(props){
    if(props.n>=0){
      return ("+")
    }else{
      return ("")
    }
}

function Resultado (props) {

  if(props.type==="linear"){
    let a, b;
    let f=props.x1;
    let res;
    let equa;
    let sinal;
    
    if(props.x0!==0 && props.x2!==0){

      a = (props.y2-props.y0)/(props.x2-props.x0);
      b = ((props.y0*props.x2)-(props.y2*props.x0))/(props.x2-props.x0);

      if(b>=0){
        sinal="+";
      }else{
        sinal="";
      }
      res= a*props.x1+b;
      equa = a+"x "+sinal+b;

      return (
      <div className={"return"}>
        <text>a {a.toFixed(2)}</text>
        <text>b {b.toFixed(2)}</text>
        <text>F(x)= {equa}</text>
        <text>F({f})={res}</text>
      </div>
      );

      }else{
        return 0;
    }
    
  }

  if(props.type==="newton"){

    let d0, d1, d2;
    let d10, d11;
    let sinal_b;
    let sinal_c;
    let a, b, c;
        
    d10 = (props.y1 - props.y0)/(props.x1-props.x0);
    d11 = (props.y2 - props.y1)/(props.x2-props.x1);
    
    d0 = props.y0;
    d1 = d10;
    d2 = (d11-d10)/(props.x2-props.x0);

    c=(d0-(d1*props.x0)+(d2*props.x0*props.x1));
    b=(d1-(d2*props.x1)-(d2*props.x0));
    a=(d2);

    if(b>=0){
      sinal_b="+";
    }else{
      sinal_b="";
    }

    if(c>=0){
      sinal_c="+";
    }else{
      sinal_c="";
    }
    

    return(
      <div className={"return"}>
        <text>INTERPOLAÇÃO METODO NEWTON</text>
        <text>d0= {d0} </text>
        <text>d1= {d1.toFixed(2)} </text>
        <text>d2= {d2.toFixed(2)} </text>
        <text>F(x) = {a.toFixed(2)}x^2 {sinal_b} {b.toFixed(2)}x {sinal_c} {c.toFixed(2)}</text>
      </div>
    )
  }

  if(props.type==="lagrange"){

    let n0, n1, n2;
    let y0_n0, y1_n1, y2_n2;
    let a, b, c;

    let bL0, cL0;
    let bL1, cL1;
    let bL2, cL2;

    let sinal_b, sinal_c;

    n0 = ((props.x0-props.x1)*(props.x0-props.x2));
    n1 = ((props.x1-props.x0)*(props.x1-props.x2));
    n2 = ((props.x2-props.x0)*(props.x2-props.x1));

    y0_n0 = (props.y0/n0);
    y1_n1 = (props.y1/n1);
    y2_n2 = (props.y2/n2);

    a= (y0_n0+y1_n1+y2_n2);
    b= ((y0_n0*(-props.x2-props.x1)) + (y1_n1*(-props.x2-props.x0)) + (y2_n2*(-props.x1-props.x0)));
    c= ((y0_n0*props.x1*props.x2) + (y1_n1*props.x0*props.x2) + (y2_n2*props.x1*props.x0))

    bL0 = (-props.x2-props.x1);
    cL0 = (props.x1*props.x2);

    bL1 = (-props.x2-props.x0);
    cL1 = (props.x0*props.x2);

    bL2 = (-props.x1-props.x0);
    cL2 = (props.x1*props.x0);

    if(b>=0){
      sinal_b="+";
    }else{
      sinal_b="";
    }

    if(c>=0){
      sinal_c="+";
    }else{
      sinal_c="";
    }

    return(
      <div className={"return"}>
        <text>INTERPOLAÇÃO METODO LAGRANGE</text>
        <text>L0(x) = (x^2 <Sinal n={bL0}/> {bL0}x <Sinal n={cL0}/> {cL0} )/ {n0} </text>
        <text>L1(x) = (x^2 <Sinal n={bL1}/> {bL1}x <Sinal n={cL1}/> {cL1} )/ {n1} </text>
        <text>L2(x) = (x^2 <Sinal n={bL2}/> {bL2}x <Sinal n={cL2}/> {cL2} )/ {n2} </text>      
        <text>F(x) = {a.toFixed(2)}x^2 {sinal_b} {b.toFixed(2)}x {sinal_c} {c.toFixed(2)}</text>
      </div>
    )
  }
  else{
    return <text>invalido</text>
  }

}

function App() {

  const [type, setType] = useState("newton");

  const [x0, setX0] = useState(0);
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(0);

  const [y0, setY0] = useState(0);
  const [y1, setY1] = useState(0);
  const [y2, setY2] = useState(0);

  const [valx0, valsetX0] = useState(0);
  const [valx1, valsetX1] = useState(0);
  const [valx2, valsetX2] = useState(0);

  const [valy0, valsetY0] = useState(0);
  const [valy1, valsetY1] = useState(0);
  const [valy2, valsetY2] = useState(0);

  const [valType, setValType] = useState("");


  

  return (
    <div className="App">
      <header className="App-header">
        <text>Selecione o tipo</text>

        <div className="type">
          <select value={type} onChange={ event =>{setType(event.target.value)}}>
            <option value="newton">Newton</option>
            <option value="lagrange">Lagrange</option>
            <option value="linear">Linear</option>
          </select>
        </div>
          
        <div className="table">        
        <div className="colum">
            <text> </text>
            <text>X </text>
            <text>Y </text>
          </div>

          <div className="colum">
            <text>X0</text>
            <input onChange={event => setX0(event.target.value)}></input>
            <input onChange={event => setY0(event.target.value)}></input>
          </div>

          <div className="colum">
            <text>X1</text>
            <input onChange={event => setX1(event.target.value)}></input>
            <input onChange={event => setY1(event.target.value)}></input>
          </div>

          <div className="colum">
            <text>X2</text>
            <input onChange={event => setX2(event.target.value)}></input>
            <input onChange={event => setY2(event.target.value)}></input>
          </div>
          
        </div>
        <button
        onClick={()=>{
          valsetX0(x0)
          valsetX1(x1)
          valsetX2(x2)

          valsetY0(y0)
          valsetY1(y1)
          valsetY2(y2)

          setValType(type)
          }}
        
        >
          OK
        </button>

        <div className="result">
          <Resultado type={valType} x0={valx0} x1={valx1} x2={valx2} y0={valy0} y1={valy1} y2={valy2}/>

        </div>
      </header>
    </div>
  );
}

export default App;
