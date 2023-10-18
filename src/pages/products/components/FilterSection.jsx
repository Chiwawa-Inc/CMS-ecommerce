import React from 'react'
import FilterAccordion from './FilterAccordion';

export default function FilterSection() {

  const subCategories = ["ACB", "MCCB", "MCB", "SPD"]
  const brands = ["Seimens", "Schneider Electric", "ABB", "C&S", "CHINT"]
  return (
    <>
      <FilterAccordion subCategories={subCategories} brands={brands}/>
    </>
  );
}


