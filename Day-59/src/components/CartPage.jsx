import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

const CartPage = () => {

    const cartItems = [
        {
            "id": 10,
            "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
            "price": 109,
            "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
            "rating": {
                "rate": 2.9,
                "count": 470
            }
        },
        {
            "id": 11,
            "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
            "price": 109,
            "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
            "rating": {
                "rate": 4.8,
                "count": 319
            }
        },
        {
            "id": 12,
            "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
            "price": 114,
            "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
            "rating": {
                "rate": 4.8,
                "count": 400
            }
        },
        {
            "id": 13,
            "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
            "price": 599,
            "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
            "rating": {
                "rate": 2.9,
                "count": 250
            }
        },
        {
            "id": 14,
            "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
            "price": 999.99,
            "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
            "rating": {
                "rate": 2.2,
                "count": 140
            }
        },
        {
            "id": 15,
            "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
            "price": 56.99,
            "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
            "category": "women's clothing",
            "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
            "rating": {
                "rate": 2.6,
                "count": 235
            }
        },
    ]


    const carts = useSelector((state)=>state.carts);

    console.log(carts)

    return (
        <div className='w-full px-4'>
            <h1 className='text-center text-2xl font-semibold py-4'>
                Items on Your Cart
            </h1>

            {/* Header */}
            <div className='grid grid-cols-4 px-2 border-b-2 py-2 font-semibold'>
                <p>Item</p> 
                <p className='text-center'>Price</p>
                <p className='text-center'>Quantity</p>
                <p className='text-center'>Total</p>
            </div>

            {/* Items */}
            {
                cartItems.map(({ id, title, price, image }) => (
                    <CartItem key={id} id={id} title={title} price={price} image={image} />
                ))
            }
        </div>
    )
}

export default CartPage