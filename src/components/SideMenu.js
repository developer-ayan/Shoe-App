import React, { useEffect, useState } from "react";
import logo from "../assets/logo/webscript.png";

import MenuItem from "./MenuItem";

/**
 * @author
 * @function SideMenu
 **/

// added more menuItems for testing
export const menuItems = [
  {
    name: "Home",
    exact: true,
    to: "/",
    iconClassName: "bi bi-house-fill",
  },
  {
    name: "About",
    exact: true,
    to: `/about`,
    iconClassName: "bi bi-journal-text",
  },
  {
    name: "Boy Shoes",
    exact: true,
    to: `/boyshoe`,
    iconClassName: "bi bi-gender-male",
  },
  {
    name: "Girls Shoes",
    exact: true,
    to: `/Girlshoes`,
    iconClassName: "bi bi-gender-female",
  },
  {
    name: "Baby Shoes",
    exact: true,
    to: `/BabyShoe`,
    iconClassName: "bi bi-emoji-smile",
  }

];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="webscript" />
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      <div className="search-controller">
        <button className="search-btn">
          <i class="bi bi-search"></i>
        </button>

        <input type="text" placeholder="search" />
      </div>

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}

        </ul>
      </div>

      <div className="side-menu-footer">
        <div className="avatar">
          <img src='https://scontent.fkhi23-1.fna.fbcdn.net/v/t1.6435-9/131090009_1289231064768237_8958990229085761314_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=IhpBZXG4ylsAX_c50Fa&_nc_ht=scontent.fkhi23-1.fna&oh=5bfd0b993908edd761d0973b86916e06&oe=61D4A67A'
           alt="user" />
        </div>
        <div className="user-info">
          <h5>Ayan Ahmed</h5>
          <p>Ayan.ahmed25508@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
