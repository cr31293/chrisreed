import React, { useState } from 'react';
import './styles.css';
import Slide from '@material-ui/core/Slide';

export default function Divider() {
const [checked, setChecked] = useState(true);
  return (
    <>
    <Slide direction="right" in={checked} timeout={3000}>
      <div className="div-divider">

      </div>
    </Slide>
    </>
  )
}