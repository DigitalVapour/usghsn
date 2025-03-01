'use server'

import User from "@/models/user";
import connectDb from "./mongodb";
import axios from "axios";

export async function placeDemand(formData) {
  const sisterName = formData.get('sisterName');
  const date = formData.get('date');
  const shift = formData.get('shift');

  const user = {
    name: sisterName,
    email: date,
    password: shift
  }
  console.log(user);
  const response = await axios.post("/api/user/new", user);
  console.log(response.data);
  console.log("created")
}