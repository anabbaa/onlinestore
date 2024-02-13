import React, { useState, useContext, useEffect } from "react";
import ProductItems from "./ProductItems";
import LookUp from "./Lookup";
import { StoreContext } from "../context";

const ProductList = () => {
  const contextObj = useContext(StoreContext);
  const [totalBill, setTotalBill] = useState(0);
  const [arr, setArr] = useState(contextObj.store.data);
  useEffect(() => {
    setArr(
      contextObj.store.filteredData.length
        ? contextObj.store.filteredData //filtered to will be data accrding to userinput
        : contextObj.store.data
    );
  }, [contextObj.store.filteredData, contextObj.store.data]);
  // console.log(contextObj.store);
  const items = arr.map((item, i) => (
    <ProductItems key={i} info={item} contextObj={contextObj} filteredDataArr={arr} />
  ));

  return (
    <React.Fragment>
      <div className="ulFather">
        <LookUp />
        <button className="bill" onClick={() => setTotalBill(contextObj.store.bill())}>
          Total bill
        </button>
        <h6 className="total">{totalBill}€</h6>
      
      <ul className="ul-store">
      {items}</ul>
      </div>
    </React.Fragment>
  );
};
export default ProductList;