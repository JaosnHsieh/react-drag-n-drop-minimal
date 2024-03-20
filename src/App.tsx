import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [dragging, setDragging] = React.useState<'X' | 'Y' | 'legend' | ''>('');
  const [hovering, setHovering] = React.useState<'X' | 'Y' | 'legend' | ''>('');
  const droppableBorder = '2px solid black';
  const waitingForDropBorder = '2px dotted black';
  const normalBorder = '2px solid red';
  const style = { width: 200, height: 200 };
  const [itemsX, setItemsX] = React.useState<string[]>(['test1']);
  const [itemsY, setItemsY] = React.useState<string[]>(['test2']);
  const [itemsLegend, setItemsLegend] = React.useState<string[]>([
    'test3-1',
    'test3-2',
  ]);
  return (
    <div className="App">
      <div
        onDrop={(e) => {
          console.log('on drop x');
          const item = e.dataTransfer.getData('item');
          if (itemsX.includes(item) === false) {
            setItemsX([...itemsX, item]);
          }
          setItemsY(itemsY.filter((i) => i !== item));
          setItemsLegend(itemsLegend.filter((i) => i !== item));

          setDragging('');
          setHovering('');
        }}
        onDragOver={(e) => {
          e.preventDefault();

          setHovering('X');
        }}
        onDragLeave={() => {
          setHovering('');
        }}
        style={{
          ...style,
          border:
            dragging === ''
              ? normalBorder
              : hovering === 'X'
              ? droppableBorder
              : waitingForDropBorder,
        }}
      >
        {itemsX.map((item) => {
          return (
            <span
              style={{ display: 'block' }}
              key={item}
              draggable
              onDragStart={(e) => {
                e.dataTransfer.setData('item', item);
                setDragging('X');
              }}
              onDragEnd={() => {
                setDragging('');
              }}
            >
              {item}
            </span>
          );
        })}
      </div>

      <div
        onDrop={(e) => {
          console.log('on drop y ');
          const item = e.dataTransfer.getData('item');
          if (itemsY.includes(item) === false) {
            setItemsY([...itemsY, item]);
          }
          setItemsX(itemsX.filter((i) => i !== item));
          setItemsLegend(itemsLegend.filter((i) => i !== item));
          setDragging('');
          setHovering('');
        }}
        onDragOver={(e) => {
          e.preventDefault();

          setHovering('Y');
        }}
        onDragLeave={() => {
          setHovering('');
        }}
        style={{
          ...style,
          border:
            dragging === ''
              ? normalBorder
              : hovering === 'Y'
              ? droppableBorder
              : waitingForDropBorder,
        }}
      >
        {itemsY.map((item) => {
          return (
            <span
              style={{ display: 'block' }}
              key={item}
              draggable
              onDragStart={(e) => {
                e.dataTransfer.setData('item', item);
                setDragging('Y');
              }}
              onDragEnd={() => {
                setDragging('');
              }}
            >
              {item}
            </span>
          );
        })}
      </div>

      <div
        onDrop={(e) => {
          console.log('on drop legend ');
          const item = e.dataTransfer.getData('item');
          if (itemsLegend.includes(item) === false) {
            setItemsLegend([...itemsLegend, item]);
          }
          setItemsX(itemsX.filter((i) => i !== item));
          setItemsY(itemsY.filter((i) => i !== item));

          setDragging('');
          setHovering('');
        }}
        onDragOver={(e) => {
          e.preventDefault();

          setHovering('legend');
        }}
        onDragLeave={() => {
          setHovering('');
        }}
        style={{
          ...style,
          border:
            dragging === ''
              ? normalBorder
              : hovering === 'legend'
              ? droppableBorder
              : waitingForDropBorder,
        }}
      >
        {itemsLegend.map((item) => {
          return (
            <span
              style={{ display: 'block' }}
              key={item}
              draggable
              onDragStart={(e) => {
                e.dataTransfer.setData('item', item);
                setDragging('legend');
              }}
              onDragEnd={() => {
                setDragging('');
              }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default App;
