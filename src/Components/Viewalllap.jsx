import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const Viewalllap = () => {
  var[data,changeData]=useState(
    [
      {"Laptopm":"Lenovo Business S340 Laptop","Laptopcom":"Linux","price":600000,"image":"https://images-cdn.ubuy.co.in/63534c8f63231e76f539154b-lenovo-business-s340-laptop-linux-mint.jpg"},
      {"Laptopm":"Asus TUF F-16 Laptop","Laptopcom":"intel core 15","price":800000,"image":"https://images-cdn.ubuy.co.in/63534c8f63231e76f539154b-lenovo-business-s340-laptop-linux-mint.jpg"},
      {"Laptopm":"REDMIBOOK 15pro Laptop","Laptopcom":"REDMI","price":105000,"image":"https://images-cdn.ubuy.co.in/63534c8f63231e76f539154b-lenovo-business-s340-laptop-linux-mint.jpg"},
      {"Laptopm":"Asus ROG Stinx Laptop","Laptopcom":"Acer","price":156000,"image":"https://images-cdn.ubuy.co.in/63534c8f63231e76f539154b-lenovo-business-s340-laptop-linux-mint.jpg"},
      {"Laptopm":"Lenovo Business Laptop","Laptopcom":"Linux","price":790000,"image":"https://images-cdn.ubuy.co.in/63534c8f63231e76f539154b-lenovo-business-s340-laptop-linux-mint.jpg"},
      {"Laptopm":"Lenovo Business S360 Laptop","Laptopcom":"Linux","price":800000,"image":"https://images-cdn.ubuy.co.in/63534c8f63231e76f539154b-lenovo-business-s340-laptop-linux-mint.jpg"},
      {"Laptopm":"Lenovo Business S390Laptop","Laptopcom":"Linux","price":1990000,"image":"https://images-cdn.ubuy.co.in/63534c8f63231e76f539154b-lenovo-business-s340-laptop-linux-mint.jpg"},
      {"Laptopm":"Lenovo Business S340 Laptop","Laptopcom":"Linux","price":170000,"image":"https://images-cdn.ubuy.co.in/63534c8f63231e76f539154b-lenovo-business-s340-laptop-linux-mint.jpg"}
    ]
  )
  return (
    <div>

<NavigationBar/>
<div className="container">
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row g-3">
             
            {data.map(
              (value,index)=>{
                return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

           <div class="card">
              <img src={value.image} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">{value.Laptopm}</h5>
                <p class="card-text">{value.Laptopcom}</p>
                <p class="card-text">Rs.{value.price}</p>
                <a href="#" class="btn btn-primary">Buy now</a>
              </div>
            </div>

          </div>
              }
            )}



           
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">SI No.</th>
                            <th scope="col">Laptop</th>
                            <th scope="col">Laptop company</th>
                            <th scope="col">Laptop price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Pro 14 Laptop</td>
                            <td>Redmi</td>
                            <td>10000</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>HP 15 Intel Core i3 7th Gen i3-7020U</td>
                            <td>HP</td>
                            <td>70000</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Del latitude 3400</td>
                            <td>Ubuntu</td>
                            <td>645748</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
          </div>
        </div>
      </div>
     </div> 

    </div>
  )
}

export default Viewalllap