import { motion } from "motion/react";

import { formatCurrency } from "../../utils/helpers";

import DeleteItem from "./DeleteItem";

function CartItem({ item, index }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <motion.li
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ 
        duration: 0.3,
        delay: index * 0.05 
      }}
      className="py-3 md:flex sm:items-center sm:justify-between"
    >
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <DeleteItem pizzaId={pizzaId}/>
      </div>
    </motion.li>
  );
}

export default CartItem;
