import React from 'react';

interface MyProps {
  name: string;
  id:number;
  diabled?:boolean;
}

// const PropComp: React.FC<MyProps> = ({ name }) => {
const PropComp=(props:MyProps)=>{
  return (
    <div>
      <h2>PropComp is TypeScript</h2>
      <p>Name: {props.name}</p>
      <p>   ID: {props.id}</p>
    </div>
  );
};

export default PropComp;
