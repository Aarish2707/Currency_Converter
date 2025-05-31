import { useState } from 'react'
import {InputBox} from './components/index'
import {useCurrencyInfo} from './components/index'


function App() {
  const [amount, setAmount] = useState(0)
  //line changed
  const [from, setFrom] = useState("inr")
  //line changed
  const [to, setTo] = useState("usd")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
  setConvertedAmount(amount * currencyInfo[to])

  }

  return (
  <div
    className="flex flex-wrap items-center justify-center w-full h-screen bg-no-repeat bg-cover"
     style={{ backgroundImage: `url('https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=600')`, }}
  >
    <div className='w-full'>
      <div className='w-full max-w-md p-5 mx-auto border rounded-lg border-gray-60 backdrop-blur-sm bg-white/30'>
        <form onSubmit={(e) => {
          e.preventDefault();
        }}
        >
          <div className="w-full mb-1">
            <InputBox 
              label="From"
              amount={amount}
              currencyOptions={options}
              //line changes
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => {
                setAmount(amount)
              }}
              selectCurrency={from}
            />
          </div>
          <div className="relative w-full h-0.5">
            <button
              type="submit"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              onClick={swap}
            >
              Swap
            </button>
          </div>
          <div className='w-full mt-1 mb-4'>
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 text-white bg-blue-600 rounded-lg"
            onClick={convert}
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}
export default App
