import { useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { getTotalCartPizzas } from "./cartSlice";
import { getTotalCartPrice } from "./cartSlice";
import { AnimatePresence, motion } from "motion/react";

function CartOverview() {
  const totalCartPizzas = useSelector(getTotalCartPizzas);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const prev = useRef(totalCartPizzas);
  const directionRef = useRef("up");
  
  if (totalCartPizzas !== prev.current) {
    directionRef.current = totalCartPizzas > prev.current ? "up" : "down";
    prev.current = totalCartPizzas;
  }

  const direction = directionRef.current;

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
            <span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={totalCartPizzas}
                  className="inline-block"
                  initial={{ 
                    y: direction === "up" ? -5 : 5, 
                    opacity: 0 
                  }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ 
                    y: direction === "up" ? 5 : -5, 
                    opacity: 0 
                  }}
                  transition={{ duration: 0.15 }}
                >
                  {totalCartPizzas}
                </motion.span>
              </AnimatePresence>
              &nbsp;pizzas
            </span>
            <span>{formatCurrency(totalCartPrice)}</span>
          </p>
          <Link to='/cart' >Open cart &rarr;</Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CartOverview;
