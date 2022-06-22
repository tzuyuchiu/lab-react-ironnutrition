// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Card, Col, Button } from 'antd';
import React from 'react';

// Iteration 2
const FoodBox = ({ props, deleteFood }) => {
  const { name, calories, image, servings } = props;
  return (
    <Col>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <Button
          onClick={() => {
            deleteFood(props);
          }}
          type="primary"
        >
          {' '}
          Delete{' '}
        </Button>
      </Card>
    </Col>
  );
};

export default FoodBox;
