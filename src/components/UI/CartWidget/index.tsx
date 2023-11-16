type Props = {
  quantity?: number
}

const CartWidget = ({quantity}: Props) => {
  return (
      <button className="relative hover:opacity-50">
        {/*
        Tentei usar a lógica {quantity && <div></div>}, mas no caso da quantity ser zero ele sempre outputava só o zero, sem o div. Por isso acabei usando o ternário.
        */}
        {(quantity) ?
          <div className="t-0 absolute left-6">
            <p className="flex h-2 w-2 items-center justify-center rounded-full bg-gray-100 p-3 text-xs text-gray-950">{quantity}</p>
          </div>
          :
          <div>
          </div>
        }
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="file: mt-0 h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      </button>
  );
};

export default CartWidget;
