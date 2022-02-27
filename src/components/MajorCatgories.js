import React from 'react';

const MajorCatgories = () => {
    return (
        <>
            <div className='container pt-5 pb-4'>
                <div className="row ">
                    <div className="col-12">
                        <h1 className="text-center ">
                            Major Categories</h1>
                        <p className="text-center">Frequently Asked Questions</p>
                    </div>
                </div>

                <div className="major-catogory-container">
                    <div className='major-catogory-section'>
                        <div className='major-catogory-card'>
                            LICENSING
                        </div>
                    </div>

                    <div className='major-catogory-section'>
                        <div className='major-catogory-card'>
                            ACTIVITY
                        </div>
                    </div>

                    <div className='major-catogory-section'>
                        <div className='major-catogory-card'>
                            VISA
                        </div>
                    </div>

                    <div className='major-catogory-section'>
                        <div className='major-catogory-card'>
                            APPROVAL
                        </div>
                    </div>

                    <div className='major-catogory-section'>
                        <div className='major-catogory-card'>
                            VAT
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MajorCatgories;
