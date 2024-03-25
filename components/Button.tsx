import React from 'react';

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    variant:string;
}

const Button = ({type, title,variant}: ButtonProps) => {
  return (
    <button className={`flex justify-center items-center gap-3 p-4 rounded-[5px]  ${variant}`}    type={type}>
        <label className="bold-16 whitepace-nowrap">{title}</label>
    </button>
  )
}

export default Button