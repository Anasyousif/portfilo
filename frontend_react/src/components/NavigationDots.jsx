import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app_ navigation">
      {["home", "about", "work", "skills","testimonials","contact"].map((item , index) => (
          <a href={`#${item}`}
          key={item + index}
          className="app_navigation-dot" 
          style={active === item ? {backgroundColor: '#313BAC'} : {}}
          />
          
      ))}
    </div>
  );
};

export default NavigationDots;
