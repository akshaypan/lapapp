import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const Viewalllap = () => {
  var[data,changeData]=useState(
    [
      {"Laptopm":"Lenovo Business S340 Laptop","Laptopcom":"Linux","price":600000,"image":"https://images-cdn.ubuy.co.in/63534c8f63231e76f539154b-lenovo-business-s340-laptop-linux-mint.jpg"},
      {"Laptopm":"Asus TUF F-16 Laptop","Laptopcom":"intel core 15","price":800000,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8s1APYSSMZJDceq9bgKoI62SlhcW36aEp1g&s"},
      {"Laptopm":"REDMIBOOK 15pro Laptop","Laptopcom":"REDMI","price":105000,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnMEWNReT2a6u9E4uvF2-ZsiI7oMigRLHP-Q&s"},
      {"Laptopm":"Asus ROG Stinx Laptop","Laptopcom":"Acer","price":156000,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYNzbHNsz0zmyfA6KY7SZCK-PB4BkxKmdW1w&s"},
      {"Laptopm":"Lenovo Business Laptop","Laptopcom":"Linux","price":790000,"image":"https://images-cdn.ubuy.co.in/63534c8f63231e76f539154b-lenovo-business-s340-laptop-linux-mint.jpg"},
      {"Laptopm":"Lenovo Business S360 Laptop","Laptopcom":"Linux","price":800000,"image":"https://images-cdn.ubuy.co.in/63534c8f63231e76f539154b-lenovo-business-s340-laptop-linux-mint.jpg"},
      {"Laptopm":"Lenovo Business S390Laptop","Laptopcom":"Linux","price":1990000,"image":"https://images-cdn.ubuy.co.in/63534c8f63231e76f539154b-lenovo-business-s340-laptop-linux-mint.jpg"},
      {"Laptopm":"Lenovo Business S340 Laptop","Laptopcom":"Linux","price":170000,"image":"https://images-cdn.ubuy.co.in/63534c8f63231e76f539154b-lenovo-business-s340-laptop-linux-mint.jpg"}
    ]
  )
  var [data1,changeData]=useState(
    [
      {"SI":1,"Laptop":"Pro 14 Laptop","Brand":"Redmi","price":10000},
      {"SI":2,"Laptop":"HP 15 Intel Core i3 7th Gen i3-7020U","Brand":"HP","price":70000},
      {"SI":3,"Laptop":"Del latitude 3400","Brand":"Ubuntu","price":10900}
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
                           
                            {data1.map(
                              (val,ind)=>{
                               return <tr>
                                <th scope="row">{val.SI}</th>
                                <td>{val.Laptop}</td>
                                <td>{val.Brand}</td>
                                <td>Rs.{val.price}</td>
                                </tr>
                              }
                            )}

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