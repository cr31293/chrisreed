import React, { useState, useRef, useMemo, useEffect } from 'react';
import { useTransition, a } from 'react-spring';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import useMeasure from './useMeasure';
import useMedia from './useMedia';
import data from './backgrounds.js';
import './styles.css';

export default function Contact() {
  // tie media queries to number of columns
  const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 650px)'], [2, 2, 2], 1);
  // measure width of the container element
  const [bind, { width }] = useMeasure()
  // hold items
  const [items, set] = useState(data);
  // form grid
  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0)
    let gridItems = items.map((child, i) => {
      const column = heights.indexOf(Math.min(...heights))
      const xy = [(width / columns) * column, (heights[column] += child.height / 2) - child.height / 2]
      return { ...child, xy, width: width / columns, height: child.height / 2 }
    })
    return [heights, gridItems]
}, [columns, items, width])
  // icon array
const transitions = useTransition(gridItems, (item) => item.css, {
  from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
  enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
  update: ({ xy, width, height }) => ({ xy, width, height }),
  leave: { height: 0, opacity: 0 },
  config: { mass: 5, tension: 500, friction: 100 },
  trail: 25
})
  return (
    <> 
      <div {...bind} class="list" style={{ height: Math.max(...heights)}}>
      {transitions.map(({ item, props: { xy, ...rest }, key }) => (
        <a.div key={key} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`), ...rest }}>
          <div style={{ backgroundImage: item.css }}>
            <Button>
              <Link
                href={item.contact}
                target="_blank"
                rel="noopener"
              >
                {item.icon}
                {item.print}
              </Link>
            </Button>
              
            
          </div>
        </a.div>
      ))}
    </div>
    </>
  )
}

