import React, { useState } from "react";
import "./index.scss";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo.webp";
import image2 from "../../assets/images/apmenuitem_ihtml_5.webp";

const Header = () => {
  const [activeBox, setActiveBox] = useState("");
  return (
    <div className="container" id="header">
      <div className="row align-items-center">
        <div className="col-3">
          <Link to={"/"}>
            <h1>
              <img alt="logo" src={logo} />
            </h1>
          </Link>
        </div>
        <div className="col-6">
          <ul className="header-list">
            <li
              onMouseLeave={() => setActiveBox("")}
              onMouseEnter={() => setActiveBox("home")}
              className="header-item"
            >
              <NavLink  to={"/home"}>
                HOME
              </NavLink>
              <div
                className={`col-4 dropdown-menu home-dropdown ${
                  activeBox === "home" && "active-dropdown"
                }`}
                style={{ height: "600px", width: "900px", left: "-200px" }}
              >
                <div className="row">
                  <div className="col-4 image-box">
                    
                    <a href="#">Home 1</a>
                  </div>
                  <div className="col-4 image-box">
                    
                    <a href="#">Home 2</a>
                  </div>
                  <div className="col-4 image-box">
                    <a href="#">Home 3</a>
                  </div>
                  <div className="col-4 image-box">
                    <a href="#">Home 4</a>
                  </div>
                  <div className="col-4 image-box">
                    <a href="#">Home 5</a>
                  </div>
                 
                </div>
              </div>
            </li>
            <li className="header-item" onMouseLeave={() => setActiveBox("")}>
              <NavLink onMouseEnter={() => setActiveBox("shop")} to={"/shop"}>
                SHOP
              </NavLink>
              <div
                style={{ height: "600px", width: "97.5rem", left: "-40rem" }}
                className={`col-4 dropdown-menu shop-dropdown ${
                  activeBox === "shop" && "active-dropdown"
                }`}
              >
                <div className="row">
                  <div className="col-2">
                    <a href="#">Shop Layouts</a>
                    <ul>
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                      <li>Item 4</li>
                      <li>Item 5</li>
                      <li>Item 6</li>
                    </ul>
                  </div>
                  <div className="col-2">
                    <a href="#">Shop Layouts</a>
                    <ul>
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                      <li>Item 4</li>
                      <li>Item 5</li>
                      <li>Item 6</li>
                    </ul>
                  </div>
                  <div className="col-2">
                    <a href="#">Shop Layouts</a>
                    <ul>
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                      <li>Item 4</li>
                      <li>Item 5</li>
                      <li>Item 6</li>
                    </ul>
                  </div>
                  <div className="col-2">
                    <a href="#">Shop Layouts</a>
                    <ul>
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                      <li>Item 4</li>
                      <li>Item 5</li>
                      <li>Item 6</li>
                    </ul>
                  </div>
                  <div className="col-2">
                    <a href="#">Shop Layouts</a>
                    <ul>
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                      <li>Item 4</li>
                      <li>Item 5</li>
                      <li>Item 6</li>
                    </ul>
                  </div>
                  <div className="col-2">
                    <a href="#">Shop Layouts</a>
                    <ul>
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                      <li>Item 4</li>
                      <li>Item 5</li>
                      <li>Item 6</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="header-item" onMouseLeave={() => setActiveBox("")}>
              <NavLink
                onMouseEnter={() => setActiveBox("featured")}
                to={"/featured"}
              >
                FEATURED
              </NavLink>
              <div
                style={{ height: "700px", width: "45rem", left: "-200px" }}
                className={`col-4 dropdown-menu featured-dropdown ${
                  activeBox === "featured" && "active-dropdown"
                }`}
              >
                <div className="row">
                  <div className="col-4">
                    <a href="#">Shop Layouts</a>
                    <ul>
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                      <li>Item 4</li>
                      <li>Item 5</li>
                    </ul>
                  </div>
                  <div className="col-4">
                    <a href="#">Shop Layouts</a>
                    <ul>
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                      <li>Item 4</li>
                      <li>Item 5</li>
                    </ul>
                  </div>
                  <div className="col-4">
                    <a href="#">Shop Layouts</a>
                    <ul>
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                      <li>Item 4</li>
                      <li>Item 5</li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <div className="image-box">
                      <img alt="page-img" src={image2} />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="header-item" onMouseLeave={() => setActiveBox("")}>
              <NavLink onMouseEnter={() => setActiveBox("pages")} to={"/pages"}>
                PAGES
              </NavLink>
              <div
                style={{ height: "450px", width: "50rem", left: "-200px" }}
                className={`col-4 dropdown-menu pages-dropdown ${
                  activeBox === "pages" && "active-dropdown"
                }`}
              >
                <div className="row">
                  <div className="col-4">
                    <a href="#">Item Layouts</a>
                    <ul>
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                      <li>Item 4</li>
                      <li>Item 5</li>
                      <li>Item 6</li>
                    </ul>
                  </div>
                  <div className="col-4">
                    <a href="#">Item Layouts</a>
                    <ul>
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                      <li>Item 4</li>
                      <li>Item 5</li>
                      <li>Item 6</li>
                    </ul>
                  </div>
                  <div className="col-4">
                    <a href="#">Item Layouts</a>
                    <ul>
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                      <li>Item 4</li>
                      <li>Item 5</li>
                      <li>Item 6</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="header-item" onMouseLeave={() => setActiveBox("")}>
              <NavLink onMouseEnter={() => setActiveBox("blogs")} to={"/blogs"}>
                BLOGS
              </NavLink>
              <div
                style={{ height: "450px", width: "50rem", left: "-300px" }}
                className={`col-4 dropdown-menu blogs-dropdown ${
                  activeBox === "blogs" && "active-dropdown"
                }`}
              >
                <div className="row">
                  <div className="col-3">
                    <a href="#">Item Layouts</a>
                    <ul>
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                      <li>Item 4</li>
                      <li>Item 5</li>
                      <li>Item 6</li>
                    </ul>
                  </div>
                  <div className="col-3">
                    <a href="#">Item Layouts</a>
                    <ul>
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                      <li>Item 4</li>
                      <li>Item 5</li>
                      <li>Item 6</li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <a href="#">Item Layouts</a>
                    <ul>
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                      <li>Item 4</li>
                      <li>Item 5</li>
                      <li>Item 6</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default Header;
