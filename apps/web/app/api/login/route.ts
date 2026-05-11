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
      email,
      password,
    } = body;



    /*
      FIND USER
    */

    const user =
      await User.findOne({
        email,
      });



    if (!user) {

      return NextResponse.json({
        success: false,
        message:
          "User not found",
      });

    }



    /*
      PASSWORD CHECK
    */

    if (
      user.password !== password
    ) {

      return NextResponse.json({
        success: false,
        message:
          "Invalid password",
      });

    }



    return NextResponse.json({
      success: true,
      message:
        "Login successful",

      user,
    });

  } catch (error) {

    return NextResponse.json({
      success: false,
      error,
    });

  }

}