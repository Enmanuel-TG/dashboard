import { CartCounter } from "@/app/shopping-cart";

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
