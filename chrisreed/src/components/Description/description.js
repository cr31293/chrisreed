import React, { useState } from 'react';
import { useTrail, a } from 'react-spring';
import './styles.css';


export default function Description({ children, ...props }) {
  const items = React.Children.toArray(children)
  const [open, set] = useState(true);

  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 500 },
    delay: 1500,
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 85 : 0,
    from: { opacity: 0, x: 20, height: 0 },
    

    
  });

  return (
    <>
      <div className="trails-main" open={open} {...props}>
        <div>
          {trail.map(({ x, height, ...rest }, index) => (
            <a.div
              key={items[index]}
              className="trails-text"
              style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
                <a.div style={{ height, }}>{items[index]}</a.div>
              </a.div>
          ))}
        </div>
      </div>
    </>
  )
}
