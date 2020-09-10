import React from "react";
import { useMutation } from "@apollo/client";

export function Register() {
  return (
    <>
      <h2>Register</h2>
      <button>Sign In with GitHub</button>
      <p>or</p>
      <form>
        <label>
          Name
          <input />
        </label>
        <label>
          Email
          <input />
        </label>
        <label>
          Password
          <input />
        </label>
        <button>Create Account</button>
      </form>
    </>
  );
}
