import React from 'react'
import CardItem from '../CardItem'
import '../Cards.css'


function Cards() {
    return (
        <div className="cards">
          <div className="cards__container">
              <div className="cards__wrapper">
              <h1>Gallery</h1>
                  <ul className="card__items">
                  <CardItem
                      src='images/img-9.jpg'
                      
              
                      // label='Adventure'
                      path='/cardone'
                   />
                  <CardItem
                      src='images/img-2.jpg'
              
                        // label='Luxury'
                      path='/cardtwo'
                    />

                  <CardItem
                      src='images/img-5.jpg'
              
                        // label='Luxury'
                      path='/services'
                    />

                  <CardItem
                      src='images/img-7.jpg'
              
                        // label='Luxury'
                      path='/services'
                    />

                  <CardItem
                      src='images/img-9.jpg'
              
                        // label='Luxury'
                      path='/services'
                    />

                  <CardItem
                      src='images/img-2.jpg'
              
                        // label='Luxury'
                      path='/services'
                    />

                  <CardItem
                      src='images/img-11.jpg'
              
                        // label='Luxury'
                      path='/services'
                    />

                  <CardItem
                      src='images/img-12.jpg'
                      text="Akosua and Nicholas, August 21, 2021 Bristol Manor Golf Club"
              
                        // label='Luxury'
                      path='/services'
                    />

                    

                  </ul>

              </div>


          </div>
            
        </div>
    )
}

export default Cards
