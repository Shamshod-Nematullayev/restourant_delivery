import { Stack } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { constants, globalColors } from "../../constants";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import "./header.css";
import { Container, IconButton } from "@mui/material";
import {
  Favorite,
  HeartBrokenRounded,
  Person,
  ShoppingCart,
} from "@mui/icons-material";

export default function Header() {
  const [phone, setPhone] = useState("+998 (93) 887 00 00");
  return (
    <Stack sx={{ background: globalColors.color_accent }}>
      <Container>
        <Stack
          direction={"row"}
          className="header"
          justifyContent={"space-between"}
          alignItems="center"
        >
          <Stack
            direction={"row"}
            className="nav-container"
            alignItems={"center"}
          >
            <div id="logo">
              <Link to={"/"}>
                <img alt="logo" id="logo-img" src={constants.logoImgUrl} />
              </Link>
            </div>
            <Stack direction={"row"}>
              <li>
                <Link to={"/"}>Главная</Link>
              </li>
              <li>
                <Link to={"/menu-restourant"}>Меню ресторана</Link>
              </li>
              <li>
                <Link to={"/our-history"}>О нас</Link>
              </li>
              <li>
                <Link to={"/contact-us"}>Контакты</Link>
              </li>
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            className="header-right"
          >
            <DeliveryDiningIcon className="scooter-icon" />
            <Stack>
              <h3 className="elementor-icon-box-title">
                Звоните и заказывайте
              </h3>
              <h3 className="elementor-icon-box-description">{phone}</h3>
            </Stack>
            <IconButton>
              <Person />
            </IconButton>
            <IconButton>
              <Favorite />
            </IconButton>
            <IconButton>
              <ShoppingCart />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
