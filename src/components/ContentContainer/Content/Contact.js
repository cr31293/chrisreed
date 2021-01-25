import React, { useState, useRef, useMemo } from 'react';
import { render } from 'react-dom';
import { useTransition, a } from 'react-spring';
import useMedia from './useMedia';
import shuffle from 'lodash/shuffle';


export default function Contact () {
  // tie media queries to number of columns
  const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], [5, 4, 3], 2);
  // measure width of the container element
  // const [bind, { width }] = useMeasure()
  return (
    <> 
      
    </>
  )
}