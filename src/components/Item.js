import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import ITEM_TYPE from "../data/Types";

const Item = ({ item, index, status }) => {
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    type: ITEM_TYPE,
    item: { ...item, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    // Called when an item is hovered over the component
    hover(item, monitor) {
      if (ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }
    },
  });

  drag(drop(ref));

  return (
    <>
      <div ref={ref} style={{ opacity: isDragging ? 0 : 1 }} className={"item"}>
        <div
          className={"color-bar"}
          style={{ backgroundColor: status.color }}
        />
        <p className={"item-title"}>{item.content}</p>
        <p className={"item-status"}>{item.icon}</p>
      </div>
    </>
  );
};

export default Item;
