import React from 'react'
import FilterAccordion from './FilterAccordion';

export default function FilterSection() {

  const subCategories = [
    {title:"ACB", include:false},
    {title:"MCCB", include:false},
    {title:"MCB", include:false},
    {title:"SPD", include:false}
    ]
  const brands = [
    {title:"Seimens", include:false},
    {title:"Schneider Electric", include:false}, 
    {title:"ABB", include:false},
    {title:"C&S", include:false},
    {title:"CHINT", include:false}
  ]
  return (
    <>
      <FilterAccordion subCategories={subCategories} brands={brands}/>
    </>
  );
}


