import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 
 
function Header() {
  return (
    // <section class="navbar-dark bg-dark header">
    //    <div class="container">
    //       <div class="row">
    //        <div class="col-sm-12"> 
    //         <nav class="navbar navbar-expand-lg ">
    //           <a class="navbar-brand text-white" href="#">Hearty Tours</a>
    //           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //             <span class="navbar-toggler-icon"></span>
    //           </button>
 
    //           <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //             <ul class="navbar-nav mr-auto">
    //               <li class="nav-item ">
    //                 <a class="nav-link " href="#about">About</a>
    //               </li>
    //               <li class="nav-item">
    //                 <a class="nav-link" href="#destinations">Destinations</a>
    //               </li>
    //               <li class="nav-item dropdown">
    //               <a class="nav-link" href="#places">Places</a>
    //               </li>
    //               <li class="nav-item">
    //                 <a class="nav-link " href="#tourist">Tourists Detail</a>
    //               </li>
    //             </ul>
                 
    //           </div>
    //          </nav>
    //         </div>
    //       </div>
    //     </div>
    // </section> 
    
    // <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 border-bottom fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">HEARTY <span class="text-primary">Tours </span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#destinations">Destinations</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#places">Places</a>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="#tourist">Tourists Detail</a>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="#contact us">Contact Us</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  );
}

export default Header;