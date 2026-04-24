import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { getTotalCartPizzas } from "./cartSlice";
import { getTotalCartPrice } from "./cartSlice";
import { AnimatePresence, motion } from "motion/react";
import AnimatedCounter from "../../ui/AnimatedCounter";

function CartOverview() {
  const totalCartPizzas = useSelector(getTotalCartPizzas);
  const totalCartPrice = useSelector(getTotalCartPrice);
  
  return (
    <AnimatePresence>
      {totalCartPizzas > 0 && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          className="bg-stone-800 text-stone-200 uppercase px-4 py-4 sm:px-6 text-sm md:text-base flex items-center justify-between"
        >
          <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
            <AnimatedCounter 
              value={totalCartPizzas} 
              className='inline-block'
            />
            &nbsp;pizzas
            <span>{formatCurrency(totalCartPrice)}</span>
          </p>
          <Link to='/cart' >Open cart &rarr;</Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CartOverview;
