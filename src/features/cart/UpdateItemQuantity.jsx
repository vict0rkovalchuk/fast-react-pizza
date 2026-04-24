import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";
import AnimatedCounter from "../../ui/AnimatedCounter";

export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  function handleIncreaseQuantity() {
    dispatch(increaseItemQuantity(pizzaId));
  }

  function handleDecreaseQuantity() {
    dispatch(decreaseItemQuantity(pizzaId));
  }

  return (
    <div className="flex gap-2 items-center md:gap-3">
      <Button type='round' onClick={handleDecreaseQuantity}>-</Button>
      <AnimatedCounter 
        value={currentQuantity} 
        className='inline-block text-sm font-medium'
      />
      <Button type='round' onClick={handleIncreaseQuantity}>+</Button>
    </div>
  )
}
