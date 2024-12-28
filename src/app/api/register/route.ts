import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client'; // Sanity client
import { v4 as uuidv4 } from 'uuid'; // To generate unique IDs for users
import nodemailer from 'nodemailer'; // To send emails
import bcrypt from 'bcrypt';

// Define the request body type
interface RegistrationRequestBody {
  email: string;
}

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const { email }: RegistrationRequestBody = await req.json();

    // Validate email
    const emailRegex = /\S+@\S+\.\S+/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ message: 'Invalid email address.' }, { status: 400 });
    }

    // Check if the user already exists in Sanity
    const existingUser = await client.fetch(`*[_type == "user" && email == $email][0]`, { email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists.' }, { status: 400 });
    }

    // Generate a temporary password
    const tempPassword = Math.random().toString(36).slice(-8); // Temporary password
    const hashedPassword = await bcrypt.hash(tempPassword, 10);

    // Create a new user document in Sanity
    const newUser = {
      _type: 'user',
      _id: uuidv4(),
      email,
      password: hashedPassword, 
    };
    await client.create(newUser);

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Replace with a secure service for production
      auth: {
        user: process.env.EMAIL_USER, // Environment variable for your email address
        pass: process.env.EMAIL_PASS, // Environment variable for your email password
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to my E-COM STORE !',
      text: `Your temporary password is: ${tempPassword}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Registration successful. Please check your email.' }, { status: 200 });
  } catch (error) {
    console.error('Error in registration:', error);
    return NextResponse.json({ message: 'Internal Server Error.' }, { status: 500 });
  }
}
