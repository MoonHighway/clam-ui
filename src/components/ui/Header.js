import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import { FaCalendar } from "react-icons/fa";
import { HiSparkles, HiOutlineUserGroup } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { CurrentUser } from "./CurrentUser";

export const Header = () => {
  let navigate = useNavigate();
  return (
    <Container>
      <div className="logo">
        <img src={logo} onClick={() => navigate(`/`)} />
      </div>
      <div className="schedule-link">
        <a href="#" onClick={() => navigate(`/schedule`)}>
          <FaCalendar />
          &nbsp;My Schedule
        </a>
      </div>
      <div className="activities-link">
        <a href="#" onClick={() => navigate(`/activities`)}>
          <HiSparkles />
          &nbsp;Activities
        </a>
      </div>
      <div className="counselors-link">
        <a href="#" onClick={() => navigate(`/counselors`)}>
          <HiOutlineUserGroup />
          &nbsp;Counselors
        </a>
      </div>
      <div>
        <CurrentUser />
      </div>
    </Container>
  );
};

const Container = styled.header`
  display: grid;
  grid-template-columns: 1.25fr 0.5fr 0.5fr 0.5fr 1fr;
  grid-gap: 1em;
  align-items: center;
  text-align: center;
  background-color: white;
  a {
    color: gray;
    font-weight: bold;
    text-decoration: none;
    transition: background-color 0.5s;
  }
  a:hover {
    color: #2e4df3;
  }
  .logo {
    grid-column: 1;
    justify-self: start;
    img {
      width: 275px;
    }
  }
  .schedule-link {
    grid-column: 2;
  }
  .activities-link {
    grid-column: 3;
  }
  .counselors-link {
    grid-column: 4;
  }
  .account-link {
    grid-column: 5;
  }
`;
