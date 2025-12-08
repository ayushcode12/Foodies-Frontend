import React, { useState } from 'react';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import "./ExploreFood.css";

const ExploreFood = () => {
  const [category, setCategory] = useState('All');
  const [searchText, setSearchText] = useState('');
  return (
    <>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="input-group mb-5">
                <select className="form-select fancy-select" style={{'maxWidth': '150px'}} onChange={(e) => setCategory(e.target.value)}>
                  <option value="All">All</option>
                  <option value="Biryani">Biryani</option>
                  <option value="Cake">Cake</option>
                  <option value="Burger">Burger</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Wraps">Wraps</option>
                  <option value="Salad">Salad</option>
                  <option value="Ice cream">Ice cream</option>
                </select>
                <input type='text' className='form-control fancy-input' placeholder='Search your favorite dish...'
                onChange={(e) => setSearchText(e.target.value)} value={searchText}/>
                <button className="btn btn-primary fancy-btn" type='submit'>
                  <i className='bi bi-search'></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FoodDisplay category={category} searchText={searchText} />
    </>
  )
}

export default ExploreFood;