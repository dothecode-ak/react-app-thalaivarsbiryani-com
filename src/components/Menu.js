import React, { useEffect } from "react";
import MenuTxt from "./MenuTxt";
const Menu = (props) => {
  const title = props.title;
  useEffect(() => {
    document.title = title;
  });
  const [finalMenuTxt,finalStarterText,finalGraviesText,finalExtraText] = [MenuTxt.main_menu, MenuTxt.startes,MenuTxt.gravies_bread,MenuTxt.extras_menu];


  const display_prop = props.display;
  return (<>
    <div className="menu">
      <img id="TBWLogo" src="./assets/Logo.png" alt="" style={{ display: display_prop }} />
      <div className="menutext">
        <p className="menuTextHead">THALAIVARS BIRYANIS</p>
        {
          finalMenuTxt.map((product, index) =>
            <div className='menu_subText' key={index}>
              <p>{product.product_name} {product.dot} {product.price}</p>
            </div>
          )
        }
      </div>
      <div className="StarterText">
        <p className="menuTextHead">STARTERS</p>
        {
          finalStarterText.map((product, index) =>
            <div className='menu_subText' key={index}>
              <p>{product.product_name} {product.dot} {product.price}</p>
            </div>
          )
        }
      </div>
      <div className="GraviesText">
        <p className="menuTextHead">GRAVIES & BREAD</p>
        {
          finalGraviesText.map((product, index) =>
            <div className='menu_subText' key={index}>
              <p>{product.product_name} {product.dot} {product.price}</p>
            </div>
          )
        }
      </div>

      <div className="ExtramenuText">
        <p className="menuTextHead">EXTRAS</p>
        {
          finalExtraText.map((product, index) =>
            <div className='menu_subText' key={index}>
              <p>{product.product_name} {product.dot} {product.price}</p>
            </div>
          )
        }
      </div>
     
    </div>

  </>);
}

export default Menu;