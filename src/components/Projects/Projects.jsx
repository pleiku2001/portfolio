import React from "react";
import "./projects.css";
import { data } from "../../data";
function Projects() {
  return (
    <div className="project" id="project">
      <h1>Projects</h1>
      <div className="box">
        {/*  */}

        {data.map((e) => {
          return (
            <div className="box_child">
              <div className="iconn">
                <div className="icon_2">
                  <a href={e.link}>
                    <img src={e.logo} alt="" />
                  </a>
                </div>
                <div className="icon_1">
                  <a href={e.github}>
                    <img
                      src="https://img.icons8.com/color/48/000000/github--v3.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="content">{e.content}</div>
            </div>
          );
        })}

        {/* <div className="box_child">
          <div className="iconn">
            <div className="icon_2">
              <img
                src="https://img.icons8.com/color/48/000000/folder-invoices--v2.png"
                alt=""
              />
            </div>
            <div className="icon_1">
              <a href="/">
                <img
                  src="https://img.icons8.com/color/48/000000/github--v3.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim saepe maxime atque quasi nisi architecto libero, voluptatem vitae aspernatur similique!</div>
        </div>
        
        <div className="box_child">
          <div className="iconn">
            <div className="icon_2">
              <img
                src="https://img.icons8.com/color/48/000000/folder-invoices--v2.png"
                alt=""
              />
            </div>
            <div className="icon_1">
              <a href="/">
                <img
                  src="https://img.icons8.com/color/48/000000/github--v3.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim saepe maxime atque quasi nisi architecto libero, voluptatem vitae aspernatur similique!</div>
        </div>
        
        <div className="box_child">
          <div className="iconn">
            <div className="icon_2">
              <img
                src="https://img.icons8.com/color/48/000000/folder-invoices--v2.png"
                alt=""
              />
            </div>
            <div className="icon_1">
              <a href="/">
                <img
                  src="https://img.icons8.com/color/48/000000/github--v3.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim saepe maxime atque quasi nisi architecto libero, voluptatem vitae aspernatur similique!</div>
        </div>
        
        <div className="box_child">
          <div className="iconn">
            <div className="icon_2">
              <img
                src="https://img.icons8.com/color/48/000000/folder-invoices--v2.png"
                alt=""
              />
            </div>
            <div className="icon_1">
              <a href="/">
                <img
                  src="https://img.icons8.com/color/48/000000/github--v3.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim saepe maxime atque quasi nisi architecto libero, voluptatem vitae aspernatur similique!</div>
        </div>
        
        <div className="box_child">
          <div className="iconn">
            <div className="icon_2">
              <img
                src="https://img.icons8.com/color/48/000000/folder-invoices--v2.png"
                alt=""
              />
            </div>
            <div className="icon_1">
              <a href="/">
                <img
                  src="https://img.icons8.com/color/48/000000/github--v3.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim saepe maxime atque quasi nisi architecto libero, voluptatem vitae aspernatur similique!</div>
        </div>
         */}
        {/*  */}
      </div>
    </div>
  );
}

export default Projects;
