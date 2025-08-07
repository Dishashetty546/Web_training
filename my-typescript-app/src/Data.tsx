import type { JSX } from "react";

type Employee = {
  name: string;
  city: string;
  id: number;
};

function Data(): JSX.Element {
  const userName = 'Disha';
  const age = 20;
  const isActive = true;

  const emp1: Employee = {
    id: 1323,
    name: 'Adi',
    city: 'Udupi',
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userName}</p>
      <p>Age: {age}</p>
      <p>Is Active: {isActive ? 'YES' : 'NO'}</p>

      <h2>Employee Details</h2>
      <p>ID: {emp1.id}</p>
      <p>Name: {emp1.name}</p>
      <p>City: {emp1.city}</p>
    </div>
  );
}

export default Data;
