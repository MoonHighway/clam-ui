import React, { useState, useRef } from "react";
import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import { useInput } from "../../hooks";
import defaultPhoto from "../../assets/default.png";
import { Header, Loading } from "../ui";
import { useLocation } from "react-router-dom";

const ME = gql`
  query Me {
    me {
      name
      email
      photo 
      cabin {
        animal
      }
    }
  }
`;

export function Account() {
  const [nameProps] = useInput("");
  const [emailProps] = useInput("");
  const uploadFile = useRef();
  const [preview, setPreview] = useState();
  const { data, loading } = useQuery(ME);
  const location = useLocation();
  if (loading) return <Loading />;

  function selectPhoto() {
    if (uploadFile.current.files && uploadFile.current.files.length) {
      let reader = new FileReader();
      reader.onload = e => {
        setPreview(e.target.result);
      };
      reader.readAsDataURL(uploadFile.current.files[0]);
    }
  }
  const photoFile = location.state && location.state.photoToUpload
  const photoSrc = location.state && location.state.photoSrc

  return (
    <Container>
      <Header />
      <div className="photo-upload">
        <h1>Update Camper Details</h1>
        <img src={preview ? preview : data.me.photo ? data.me.photo : defaultPhoto} width={200} alt="user" />
        <input type="file" ref={uploadFile} onChange={selectPhoto} />
      </div>
      <form>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          {...nameProps}
          id="name"
          placeholder={data.me.name}
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          {...emailProps}
          id="email"
          placeholder={data.me.email}
        />
        <h4>{data.me.cabin.animal.toUpperCase()} CABIN</h4>
        <button type="submit">Update Profile</button>
      </form>
    </Container>
  );
}

const Container = styled.section`
  display: grid;
  header {
    grid-area: 1 / 1 / 2 / 5;
  }
  grid-template-rows: 100px 500px;
  grid-template-columns: 0.5fr 0.8fr 1.2fr 0.5fr;
  .photo-upload {
    grid-area: 2 / 2 / 3 / 2;
    a {
      font-size: 12px;
    }
  }
  form {
    grid-area: 2 / 3 / 3 / 4;
    align-self: center;
  }
  label,
  input {
    margin: 5px;
  }
  input {
    font-size: 1.5em;
    border: 0;
    border-bottom: 1px solid #ccc;
    border-radius: 0;
    padding: 0;
    cursor: text;
    height: 1.75em;
    width: 80%;
  }
  input:focus {
    outline: 0;
    border-bottom: 1px solid #666;
  }

  label {
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  button {
    background-color: #03a9f4;
    border: none;
    width: 100%;
    text-align: center;
    height: 45px;

    border-radius: 4px;
    color: white;
    margin-top: 20px;
    font-size: 1em;
  }
  .githubButton {
    background-color: rgba(36, 41, 44, 0.9);
  }
`;
