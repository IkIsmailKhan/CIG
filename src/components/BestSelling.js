import React from 'react';
import bestSelling from '../assets/background.jpg';

const BestSelling = () => {
    return (
        <>
            <div className='section-background'>
                <div className='container pt-5 pb-4'>
                    <div className="row ">
                        <div className="col-12">
                            <h1 className="text-center ">
                                Best Selling</h1>
                            <p className="text-center">Frequently Asked Questions</p>
                        </div>
                    </div>

                    <div className="best-selling-container">
                        <div className='best-selling-section'>
                            <div className='best-selling-card'>
                                <div>
                                    <img src={bestSelling} alt='best-selling-1' height='125px' width='225px' />
                                </div>
                                <div>
                                    <div className='best-selling-card-heading'>
                                        Product 1
                                    </div>
                                    <div className='best-selling-card-price'>
                                        1000 AED
                                    </div>
                                    <div className='best-selling-card-discount'>
                                        600 AED
                                    </div>
                                </div>
                                <button className='best-selling-card-btn'>Buy Now</button>

                            </div>
                        </div>

                        <div className='best-selling-section'>
                            <div className='best-selling-card'>
                                <div>
                                <img src={bestSelling} alt='best-selling-2' height='125px' width='225px' />
                                </div>
                                <div>
                                    <div className='best-selling-card-heading'>
                                        Product 2
                                    </div>
                                    <div className='best-selling-card-price'>
                                        3000 AED
                                    </div>
                                    <div className='best-selling-card-discount'>
                                        100 AED
                                    </div>
                                </div>
                                <button className='best-selling-card-btn'>Buy Now</button>

                            </div>
                        </div>

                        <div className='best-selling-section'>
                            <div className='best-selling-card'>
                                <div>
                                <img src={bestSelling} alt='best-selling-3' height='125px' width='225px' />
                                </div>
                                <div>
                                    <div className='best-selling-card-heading'>
                                        Product 3
                                    </div>
                                    <div className='best-selling-card-price'>
                                        5000 AED
                                    </div>
                                    <div className='best-selling-card-discount'>
                                        400 AED
                                    </div>
                                </div>
                                <button className='best-selling-card-btn'>Buy Now</button>

                            </div>
                        </div>

                        <div className='best-selling-section'>
                            <div className='best-selling-card'>
                                <div>
                                <img src={bestSelling} alt='best-selling-4' height='125px' width='225px' />
                                </div>
                                <div>
                                    <div className='best-selling-card-heading'>
                                        Product 4
                                    </div>
                                    <div className='best-selling-card-price'>
                                        2000 AED
                                    </div>
                                    <div className='best-selling-card-discount'>
                                        300 AED
                                    </div>
                                </div>
                                <button className='best-selling-card-btn'>Buy Now</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BestSelling;
