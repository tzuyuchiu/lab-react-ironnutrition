import React, { useState } from 'react';
import { Divider, Input } from 'antd';

const AddFoodForm = ({ addFood }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.imgur.com/VBwfWPa.jpeg');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    // submission of form all happens here
    const newFood = { name, image, calories, servings };
    addFood(newFood);
  };

  const [showForm, setShowForm] = useState(true);
  return (
    <>
      <button onClick={() => setShowForm(false)}> Hide </button>
      <Divider>Add Food Entry</Divider>
      {showForm ? (
        <form action="#" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="e.g. Kiwi"
              value={name}
              onChange={event => {
                setName(event.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="image">Image URL</label>
            <input
              type="text"
              name="image"
              id="image"
              value={image}
              onChange={event => setImage(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="calories">Calories</label>
            <input
              type="number"
              name="calories"
              id="calories"
              value={calories}
              onChange={event => {
                setCalories(event.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="servings">Servings</label>
            <input
              type="number"
              name="servings"
              id="servings"
              value={servings}
              onChange={event => {
                setServings(event.target.value);
              }}
            />
          </div>
          <button className="btn-create" type="submit">
            Create
          </button>
        </form>
      ) : (
        <button onClick={() => setShowForm(true)}> Add New Food </button>
      )}
    </>
  );
};

export default AddFoodForm;
