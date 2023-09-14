import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import {
  FireIcon,
  TvIcon,
  FilmIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Link, useParams, useLocation } from "react-router-dom";
import { nav_links } from "../helpers/data";

export default function NavComp() {
  const params = useLocation();
  const currentPath = params.pathname;

  return (
    <Navbar
      className="navbar"
      expand="lg"
      style={{ position: "sticky", height: "fit-content", top: 0, zIndex: 2 }}
    >
      <Container>
        <Navbar.Brand style={{ color: "white", fontWeight: "bold" }} href="/">
          N<span style={{ color: "red" }}>u</span>tflix
        </Navbar.Brand>

        <Navbar.Toggle
          style={{ background: "white" }}
          aria-controls="navbarScroll"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="w-100 my-2 my-lg-0 d-flex gap-3"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {nav_links.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                style={{
                  color: currentPath === item.href ? "white" : "#afafaf",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: currentPath === item.href ? "bold" : "medium",
                }}
              >
                <item.icon
                  style={{
                    width: 22,
                    height: 22,
                    marginRight: 6,
                  }}
                />
                {item.title}
              </Link>
            ))}

            <Link
            className=" py-2 px-3 rounded-2 d-flex justify-content-center align-items-center ms-lg-auto"
              to={'/login'}
              style={{
                backgroundColor:'red',
                color:  "white" ,
                fontWeight:  "bold" ,
              }}
            >
              Log out              
            </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
