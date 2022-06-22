import './App.css';
import React from 'react';
import { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchForm from './components/SearchForm';
import 'antd/dist/antd.css';
import { Row, Divider, Button, Card } from 'antd';

function App() {
  const [foodData, setFoodData] = useState(foods);
  const addFood = newFood => {
    setFoodData([...foods, newFood]);
  };
  function deleteFood(food) {
    setFoodData(foodData.filter(x => x !== food));
  }
  //Bug: can not filter the new added food
  function searchFood(query) {
    const foundFoods = foods.filter(food => food.name.match(query));

    setFoodData(foundFoods);
  }

  return (
    <div className="App">
      <AddFoodForm addFood={addFood} />
      <SearchForm searchFood={searchFood} />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodData.map(food => (
          <div>
            <FoodBox props={food} deleteFood={deleteFood} />
          </div>
        ))}
      </Row>
    </div>
  );
}
export default App;
