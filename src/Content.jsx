import { useState } from 'react'

import ProductCard from './ProductCard'
import ok from './assets/ok.png'
import ok1 from './assets/ok1.png'
import ok2 from './assets/ok2.png'
import ok3 from './assets/ok3.png'



function Content(props) {
    const [imageIndex, setImageIndex] = useState(0)

    const [productList, setProductList] = useState([
        {
            name: 'Product 1',
            price: 100,
        },
        {
            name: 'Product 2',
            price: 200,
        },
        {
            name: 'Product 3',
            price: 300,
        },
        {
            name: 'Product 4',
            price: 400,
        },
    ])

    const renderProductCard = productList.map((item, index) => {
        return <ProductCard key={index} name={item.name} price={item.price} />
    })

    const images = [
        ok,
        ok1,
        ok2,
        ok3
    ]

    const handleNext = () => {
        if (imageIndex < images.length - 1) {
            setImageIndex(imageIndex + 1)
        } else {
            setImageIndex(0)
        }
    }

    const handlePrev = () => {
        if (imageIndex >= 1) {
            setImageIndex(imageIndex - 1)
        } else {
            setImageIndex(images.length - 1)
        }
    }

    const [newProduct, setNewProduct] = useState({ name: '', price: '' })

    const handleAddProduct = () => {
        if (!newProduct.name || !newProduct.price) return
        setProductList([...productList, { name: newProduct.name, price: Number(newProduct.price) }])
        setNewProduct({ name: '', price: '' })
    }

    return (
        <div className="content">
            <div>
                <button onClick={() => props.setIsOpenSidebar((isOpen) => !isOpen)}>
                    {props.isOpenSidebar ? 'Close' : 'Open'}
                </button>
                <img src={images[imageIndex]} alt="" />
                <button onClick={() => handlePrev()}>Prev</button>
                <button onClick={() => handleNext()}>Next</button>
            </div>
            <div style={{ marginTop: '50px', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>{renderProductCard}</div>
            <input type="text" placeholder="Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
            <input type="text" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
            <button onClick={() => handleAddProduct()}>Add product</button>

        </div>
    )
}

export default Content
