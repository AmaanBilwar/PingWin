import React from 'react'




function Events(){
    return(
        <div>
            <h1>
                Welcome to Events!!
            </h1>
            <div className='Events-container'>
                <section className='Input'>
                    <input type='text' placeholder='Title @ Location' className='Input-Title' >
                    </input>
                    <input type='text' placeholder='Describe your event' className='Description-Title' >
                    </input>
                    <input type='text' placeholder='Expected Capacity' className='Expected-Capacity-Title' >
                    </input>
                </section>
                <section className='Buttons-Title'>
                    <button className='Cancel-Button'>
                        Cancel
                    </button>
                    <button className='Confirm-Button'>
                        Confirm
                    </button>
                </section>
            </div>
        </div>
    )

}

export default Events;