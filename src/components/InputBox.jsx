import React, {useId} from 'react'

function InputBox({

    label, 
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className="",
}){

    const amountInputId = useId()

  return (
    <div className={`bg-white flex p-3 rounded-lg text-sm ${className}`}>
        <div className="w-1/2">
            <label htmlFor={amountInputId} className="inline-block mb-2 text-black/40">
                {label} 
            </label>
            <input 
            id={amountInputId}
            type="number"
            className="outline-none w-full bg-transparent py-1.5"
            placeholder='Amount'
            disabled={amountDisable}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
             />
        </div>
        <div className='flex justify-end w-1/2 text-right fles-wrap'>
            <p className="w-full mb-2 text-black-40">Currency Type</p>
            <select
             className="px-1 h-10 py-1 mt-5 mr-3 bg-gray-200 rounded-lg outline-none cursor-pointer"
             value={selectCurrency}
             onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
             disabled={currencyDisable}
             >
                {currencyOptions.map((Currency) => (
                    <option key={Currency} 
                    value={Currency}>
                    {Currency}
                </option>
                ))}
             </select>
        </div>
    </div>
  );
}

export default InputBox;