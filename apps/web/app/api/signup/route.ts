import { NextResponse } from "next/server";

import { connectDB }
from "../../../lib/mongodb";

import User
from "../../../models/User";



export async function POST(req: Request) {

  try {

    await connectDB();

    const body =
      await req.json();

    const {
      name,
      email,
      password,
    } = body;



    /*
      CHECK EXISTING USER
    */

    const existingUser =
      await User.findOne({
        email,
      });



    if (existingUser) {

      return NextResponse.json({
        success: false,
        message:
          "User already exists",
      });

    }



    /*
      CREATE USER
    */

    await User.create({
      name,
      email,
      password,
    });



    return NextResponse.json({
      success: true,
      message:
        "Signup successful",
    });

  } catch (error) {

    return NextResponse.json({
      success: false,
      error,
    });

  }

}