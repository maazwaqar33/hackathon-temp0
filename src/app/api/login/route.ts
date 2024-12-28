import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';
import bcrypt from 'bcrypt';

// Define the request body type
interface LoginRequestBody {
  email: string;
  password: string;
}

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const { email, password }: LoginRequestBody = await req.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required.' }, { status: 400 });
    }

    // Fetch the user from Sanity
    const user = await client.fetch(
      `*[_type == "user" && email == $email][0]`,
      { email }
    );

    // Check if user exists
    if (!user) {
      return NextResponse.json({ message: 'User not found.' }, { status: 404 });
    }

    // Compare the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid credentials.' }, { status: 401 });
    }

    // Respond with success
    return NextResponse.json(
      {
        message: 'Login successful.',
        user: {
          id: user._id,
          email: user.email,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'Internal Server Error.' }, { status: 500 });
  }
}
