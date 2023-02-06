import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import styles from '../../styles/Home.module.css'
import useAssets from '../../hooks/useAssets'
import { useRouter } from 'next/router'
import { fetchPrice } from '../api/price'
import Image from 'next/image'

export default function AssetDetails() {
  //grab data from context through our custom hook 
  const { asset, updateAssetInfo, grabAsset } = useAssets();

  //use router to navigate to pages and pass in data if needed since small/simple application
  const router = useRouter()
  const { id } = router.query;
  const categoryOptions = ["payment", "financial", "infrastructure"]

  useEffect(() => {
      getPrice()
      memoHook
  }, [asset]);

  //***fetch current price of asset from api***
  const getPrice = async () => {
    let response = await fetchPrice()
    setCurrentPriceBitcoin(response.data[0].metrics.market_data.price_usd)
    setCurrentPriceEth(response.data[1].metrics.market_data.price_usd)
  }

  //state values from context to compare and update if needed 
  const [currentPriceBitcoin, setCurrentPriceBitcoin] = useState("Loading Current Price")
  const [currentPriceEth, setCurrentPriceEth] = useState("Loading Current Price")
  const [title, setTitle] = useState(asset[`${id}`].title);
  const [symbol, setSymbol] = useState(asset[`${id}`].symbol);
  const [description, setDescription] = useState(asset[`${id}`].description);
  const [price, setPrice] = useState(id == 0 ? currentPriceBitcoin : currentPriceEth)
  const [category, setCategory] = useState(asset[`${id}`].category)

  //memoize information to ensure minimal re-renders 
  const memoHook = useMemo(function handleSubmit() {
    return title, symbol, description, price, category;
  }, [title, symbol, description, price, category])

  // Handle the submit event on form submit.
  const handleSubmit = async (event) => {
    let titleVerified;
    let symbolVerified;
    let descriptionVerified;

    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Cast the event target to an html form
    const form = event.target;

    //****Check length of title, symbol and description values.****
    //****If doesn't pass validation, show error message, stay on asset details page, and try again****
    if (form.title.value.length <= 255 && form.title.value.length >= 3) {
      titleVerified = form.title.value;
    } else if (form.symbol.value.length <= 8 && form.symbol.value.length >= 2) {
      symbolVerified = form.symbol.value;
    } else if (form.description.value.length <= 200) {
      descriptionVerified = form.description.value;
    }

    // Get updated data from the form.
    const data = {
      title: !titleVerified ? form.title.value : titleVerified,
      symbol: !symbolVerified ? form.symbol.value : symbolVerified,
      price: asset[`${id}`].price,
      description: !descriptionVerified ? form.description.value : descriptionVerified,
      category: form.category.value,
    }

    // Send the form data to our form API
    const response = await fetch('/api/form', {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    // Get the response data from server as JSON.
    // If server returns the information submitted, that means the form works.
    const result = await response.json()

    if (result.id == 0) {
      updateAssetInfo(data)
    } else {
      updateAssetInfo(data)
      router.push("/")
      grabAsset();
    }
    alert(`Asset Submission: ${result.data}`)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Mini Blockworks
      </h1>
      <Image
        priority
        src="/images/blockworksGIF.webp"
        height={100}
        width={800}
      />
      <p className={styles.description}>
        {`${asset[`${id}`].title} Current Information`}
      </p>
      <div className={styles.inputs}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input className={styles.description} value={title} onChange={e => setTitle(e.target.value)} type="text" id="title" name="title" required />
          <label htmlFor="symbol">Symbol</label>
          <input className={styles.description} value={symbol} onChange={e => setSymbol(e.target.value)} type="text" id="symbol" name="symbol" required />
          <label htmlFor="description">Description</label>
          <input className={styles.description} value={description} onChange={e => setDescription(e.target.value)} type="text" id="description" name="description" required />
          <label htmlFor="price">Price</label>
          <input className={styles.description} value={id == 0 ? currentPriceBitcoin : currentPriceEth} type="text" id="price" name="price" required readOnly />
          <label htmlFor="category">Category</label>
          <select className={styles.description} required id="category" name="category" value={category} onChange={e => setCategory(e.target.value)}>
            {categoryOptions.map((item, index) => {
              if (item == asset[`${id}`].category) {
                return <option value={`${item}`} item>{item}</option>
              }
              else {
                return <option value={`${item}`} item>{item}</option>
              }
            })}
          </select>
          <button className={styles.description} type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}