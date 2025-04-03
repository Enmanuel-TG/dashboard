import { CartCounter } from "@/shopping-cart/components/CartCounter";


export const metadata = {
 title: 'Shopping ',
description: 'Counter'
};


const Page = () => {
  return <div>
    <CartCounter />
  </div>;
};

export default Page;
