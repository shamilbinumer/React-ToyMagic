import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
     <div className="banner">
      <div className="main-content">
      <h1>Toy Magic</h1>
      <p>
          Welcome to our enchanting online toy emporium, where imagination knows no bounds and playtime is a grand adventure! At [Shop Name], we believe in the magic of childhood and the joy that comes from the perfect toy. Dive into a world where every click opens the door to a realm of whimsy, discovery, and endless smiles.
          </p>
          <Link to='/products' className='explr-btn'>Explore Toys</Link>
      </div>
     </div>
    </div>
  )
}

export default Home
