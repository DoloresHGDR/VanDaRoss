import React from 'react'
import { Link } from 'react-router-dom'


const header = () => {
  return (
    <div className='header'>
            <nav class="navbar navbar-expand-lg header">
                <div class="container">
                    <a class="navbar-brand" href="#">Planetary Van Da Ross</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item active">
                        <Link class="nav-link" to='/home'>Home</Link>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to='/register'>Register</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to='/login'>Login</Link>
                        </li>
                    </ul>
                    </div>
                    <div class="container">
                      <input type="text" name="text" class="input" required="" placeholder="Type to search..."/>
                      <div class="icon">
                          <svg>
                              <title>Search</title>
                              <path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path>
                              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"></path>
                          </svg>
                      </div>
                  </div>
                </div>
            </nav>

    </div>

  )
}

export default header
