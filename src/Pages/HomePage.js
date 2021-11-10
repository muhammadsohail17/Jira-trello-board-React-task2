import React, { useState } from "react";
import Item from "../components/Item";
import DropWrapper from "../components/DropWrapper";
import Columns from "../components/Columns";
import { data, statuses } from "../data/Data";

const Homepage = () => {
  const [items, setItems] = useState(data);

  const onDrop = (item, monitor, status) => {
    const mapping = statuses.find((si) => si.status === status);

    setItems((prevState) => {
      const newItems = prevState
        .filter((i) => i.id !== item.id)
        .concat({ ...item, status, icon: mapping.icon });
      return [...newItems];
    });
  };

  return (
    <div className={"row"}>
      {statuses.map((s) => {
        return (
          <div key={s.status} className={"column-wrapper"}>
            <h2 className={"column-header"}>{s.status.toUpperCase()}</h2>
            <DropWrapper onDrop={onDrop} status={s.status}>
              <Columns>
                {items
                  .filter((i) => i.status === s.status)
                  .map((i) => (
                    <Item key={i.id} item={i} status={s} />
                  ))}
              </Columns>
            </DropWrapper>
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;
