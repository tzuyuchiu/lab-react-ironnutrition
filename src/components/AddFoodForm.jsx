import React, { useState } from 'react';
import { Divider, Input, Button } from 'antd';

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
      <Button onClick={() => setShowForm(false)}> Hide </Button>
      <Divider>Add Food Entry</Divider>
      {showForm ? (
        <form action="#" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <Input
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
            <Input
              type="text"
              name="image"
              id="image"
              value={image}
              onChange={event => setImage(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="calories">Calories</label>
            <Input
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
            <Input
              type="number"
              name="servings"
              id="servings"
              value={servings}
              onChange={event => {
                setServings(event.target.value);
              }}
            />
          </div>
          {/* <Button className="btn-create" type="submit">
            Create
          </Button> */}
          <button className="btn-create" type="submit">
            Create
          </button>
        </form>
      ) : (
        <Button onClick={() => setShowForm(true)}> Add New Food </Button>
      )}
    </>
  );
};

export default AddFoodForm;
