import React from "react";

import ItemList from "./ItemList";

function Content({ items, setItems, handleCheck, handleDelete }) {
  return (
    <main>
      {items.length ? (
        <ItemList
         items={items}
          setItems={setItems}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>no items</p>
      )}
    </main>
  );
}

export default Content;
