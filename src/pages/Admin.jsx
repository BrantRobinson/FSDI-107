import { useState } from 'react'
import './Admin.css'

function Admin() {
    // Coupon State
    const[couponCode, setCouponCode] = useState("")
    const[couponDiscount, setCouponDiscount] = useState(0)
    const[coupons, setCoupons] = useState([])
    const newCoupon = {
        code: couponCode, 
        discount: couponDiscount
        }

    //Product State
    const[productTitle, setProductTitle] = useState("")
    const[productCategory, setProductCategory] = useState("")
    const[productImage, setProductImage] = useState("")
    const[productPrice, setProductPrice] = useState(0.00)
    const[products, setProducts] = useState([])

    const newProduct = {
        title: productTitle,
        category: productCategory,
        image: productImage,
        price: productPrice*100
    }

    function saveCoupon() {
        setCoupons([...coupons, newCoupon])
        setCouponCode("")
        setCouponDiscount(0)
    }

    function saveProduct() {
        setProducts([...products, newProduct])
        setProductTitle("")
        setProductCategory("")
        setProductImage("")
        setProductPrice(0)
    }

    return (
        <div className="container">
            <h1 className='text-center my-4'>Store Administrator</h1>
            <div className='d-flex gap-4'>

                <section className='w-50'>
                    <h2>Add Products</h2>
                    <div className="card">
                        <div className="card-body">
                            <div>
                                <label className='form-label'>Title</label>
                                <input 
                                    type="text" 
                                    className='form-control' 
                                    value={productTitle}
                                    onChange={(e) => setProductTitle(e.target.value)}/>
                            </div>
                            <div>
                                <label className='form-label'>Category</label>
                                <input 
                                    type="text" 
                                    className='form-control' 
                                    value={productCategory}
                                    onChange={(e) => setProductCategory(e.target.value)}/>
                            </div>
                            <div>
                                <label className='form-label'>Image</label>
                                <input 
                                    type="text" 
                                    className='form-control' 
                                    value={productImage}
                                    onChange={(e) => setProductImage(e.target.value)}/>
                            </div>
                            <div>
                                <label className='form-label'>Price</label>
                                <input 
                                    type="text" 
                                    className='form-control' 
                                    value={productPrice}
                                    onChange={(e) => setProductPrice(e.target.value)}/>
                            </div>
                            <div>
                                <button 
                                    className='btn btn-dark mt-3'
                                    onClick={saveProduct}>Save Product
                                </button>
                            </div>
                        </div>
                    </div>
                    {products.map((product, index) => (
                        <p key={index}>
                            {product.title} - {product.category} - {product.image} - {product.price}
                        </p>   
                    ))}
                </section>

                <section className='w-50'>
                    <h2>Add Coupons</h2>

                    <div className="card">
                        <div className="card-body">
                            <div>
                                <label className='form-label'>Code</label>
                                <input 
                                    type="text" 
                                    className='form-control' 
                                    value={couponCode} 
                                    onChange={(e) => setCouponCode(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className='form-label'>Discount</label>
                                <input 
                                    type='number' 
                                    className='form-control' 
                                    value={couponDiscount} 
                                    onChange={(e) => setCouponDiscount(e.target.value)}
                                />
                            </div>
                            <div>
                                <button 
                                    className='btn btn-dark mt-3'
                                    onClick={saveCoupon}>
                                    Save Coupon
                                </button>
                            </div>
                        </div>
                    </div>
                    <h4>Coupon List:</h4>
                    {coupons.map((coupon, index) => (
                        <p key={index}>{coupon.code} - {coupon.discount}</p>
                        ))}
                </section>

            </div>
        </div>
  )
}

export default Admin