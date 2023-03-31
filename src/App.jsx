import "./styles.css";
import { useState } from "react";
import { Reorder } from "framer-motion";
import { Item } from "./Item";
import { SubmBtn } from "./SubmBtn";
import { useLocation } from "react-router-dom";
import browserSignature from 'browser-signature';

 
export const App = () => {

    const signature = browserSignature();

    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    
    const imgUrl = [
      searchParams.get("pathOne"), 
      searchParams.get("pathTwo"), 
      searchParams.get("pathThree"),
      searchParams.get("pathFour"), 
      searchParams.get("pathFive")
    ]
    
    const topLabel = searchParams.get("topLabel");
    const botLabel = searchParams.get("botLabel");

    const [items, setItems] = useState(imgUrl);
    return (
      <div className="wrapper">
          <div className="card_label">
            {String(topLabel)}
          </div>

          <div className="card_dragList">
            <Reorder.Group axis="y" onReorder={setItems} values={items}>
              {items.map((item) => (
                <Item key={item} item={item} />
              ))}        
            </Reorder.Group> 
          </div>
          
    
          <div className="card_label">
            {String(botLabel)}
          </div>

          <SubmBtn currentArrState={items} topLabel={topLabel} botLabel={botLabel} browserSignature={signature}/>
      </div>
    );}