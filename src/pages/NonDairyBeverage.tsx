import { Fragment, createContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import React from 'react';

export function NonDairyBeverage() {
  const [energy, setEnergy] = useState(0);
  const [sugar, setSugar] = useState(0);
  const [fvnl, setFvnl] = useState(0);

  return (
    <Fragment>
        <TextField id="energy" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} label="Energy (kJ/100mL)" variant="outlined" onChange={(e) => setEnergy(+e.target.value)}/>
        <TextField id="sugar" label="Total sugars (g/100mL)" variant="outlined" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} onChange={(e) => setSugar(+e.target.value)}/>
        <TextField id="fvnl" label="FVNL (%)" variant="outlined" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} onChange={(e) => setFvnl(+e.target.value)}/>
        <p>fruits, vegetables, nuts and legumes Defined in Schedule 5 of the Code and includes coconut, spices, herbs, fungi, seeds and algae.</p>
        <p>{starsCalc(energyCalc(energy) + sugarCalc(sugar) - fvnlCalc(fvnl))}</p>
    </Fragment>
  );
}

function starsCalc(hsr:number) {
  switch(true) {
    case hsr <= 0:
      return 4;
    case hsr === 1:
      return 3.5;
    case hsr < 3:
      return 3;
    case hsr < 5:
      return 2.5;
    case hsr < 7:
      return 2;
    case hsr < 9:
      return 1.5;
    case hsr < 11:
      return 1;
    default:
      return 0.5;
  }
}

function energyCalc(energy:number) {
  switch(true) {
    case energy < 31:
      return 1;
    case energy < 61:
      return 2;
    case energy < 91:
      return 3;
    case energy < 121:
      return 4;
    case energy < 151:
      return 5;
    case energy < 181:
      return 6;
    case energy < 211:
      return 7;
    case energy < 241:
      return 8;
    case energy < 271:
      return 9;
    default:
      return 10;
  }
}

function sugarCalc(sugar:number) {
  switch(true) {
    case sugar < 0.1:
      return 0;
    case sugar < 1.6:
      return 1;
    case sugar < 3.1:
      return 2;
    case sugar < 4.6:
      return 3;
    case sugar < 6.1:
      return 4;
    case sugar < 7.6:
      return 5;
    case sugar < 9.1:
      return 6;
    case sugar < 10.6:
      return 7;
    case sugar < 12.1:
      return 8;
    case sugar < 13.6:
      return 9;
    default:
      return 10;
  }
}

function fvnlCalc(fvnl:number) {
  switch(true) {
    case fvnl < 25:
      return 0;
    case fvnl < 33:
      return 1;
    case fvnl < 41:
      return 2;
    case fvnl < 49:
      return 3;
    case fvnl < 57:
      return 4;
    case fvnl < 65:
      return 5;
    case fvnl < 73:
      return 6;
    case fvnl < 81:
      return 7;
    case fvnl < 89:
      return 8;
    case fvnl < 96:
      return 9;
    default:
      return 10;
  }
}
