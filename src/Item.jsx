import { useMotionValue, Reorder, useDragControls } from "framer-motion";
import { ReorderIcon } from "./icon";

export const Item = ({ item }) => {
  const y = useMotionValue(0);
  const dragControls = useDragControls();
 
  return (
    <Reorder.Item value={item} id={item}>
      <img className="itemImg" src={item} alt="img"></img>
      <ReorderIcon dragControls={dragControls} />
    </Reorder.Item>
  );
};
