import React from 'react'
import { useParams } from 'react-router'
import Babyshoe from './Babyshoe.json'

export default function BabyShoeProduct() {
    const { id } = useParams()

    const shoe = Babyshoe[id]
    console.log(shoe)

    return (
        <div>
            <div className='container-shoe-product'>

                <div>
                    <img src={shoe.Image} />
                </div>

                <div>
                    <div className='container-shoe-product-right'>
                        <div>
                            <h1>Shoe product :</h1>
                        </div>
                        <div>
                            <h1>{shoe.Shoetitle}</h1>
                        </div>
                    </div>
                    <div className='container-shoe-product-right'>
                        <div>
                            <h1>Shoe Price :</h1>
                        </div>
                        <div>
                            <h1>{shoe.shoePrice}</h1>
                        </div>
                    </div>
                    <div className='container-shoe-product-right'>
                        <div>
                            <h1>Shoe Disc  :</h1>
                        </div>
                        <div className='container-shoe-product-right-disc'>
                            <h1>{shoe.shoedisc}</h1>
                        </div>
                    </div>
                    <div className='add-to-card-div'>

                        <button className='add-to-card-btn' onClick={()=> alert('Add to your Favorite List :D')}>  <i class="bi bi-cart-plus"></i>Add To Card</button>
                    </div>
                </div>
            </div>
            <div>
                {/* <div className='product-detail-para'>
                    <p>Product details of {shoe.shoedisc}</p>
                </div> */}

                <div>
                    <div className='product-detail-para'>
                        <p>Product details of {shoe.shoedisc}</p>
                    </div>

                    <div className='product-detail-ul'>
                        <ul>
                            <li>
                                provides comfort and flexibility, along with excellent waterproofing, shock absorption and heat retention properties; adjusts to your foot shape to resist blisters and chafing
                                Stretch-fit Comfort Topline is curved to improve range of motion, and snugs calf to seal in warmth while keeping cold and debris out
                            </li>
                            <li>
                                Breathable Airmesh lining wicks away humidity and perspiration, and allows air to travel throughout the boot; comfort rated from subfreezing to 65 Â°F/18 Â°C
                                High-traction rubber outsole delivers sure footing in mud, slush or rain
                            </li>
                            <li>
                                High-grade extended rubber exterior provides extra toughness and makes for a 100% waterproof garden shoe; easy on-off with pull-on tab
                            </li>
                        </ul>
                    </div>


                </div>


            </div>
        </div>
    )
}
