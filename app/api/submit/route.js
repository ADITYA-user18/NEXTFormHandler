import dbConnect from "@/app/lib/mongoose";
import mongoose from "mongoose";

// Define a schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export async function POST(req) {
  await dbConnect();

  const body = await req.json();
  const { name, email, password } = body;

  if (!name || !email || !password) {
    return new Response(
      JSON.stringify({ message: "Missing required fields", success: false }),
      { status: 400 }
    );
  }

  const data = await User.create({ name, email, password });
  console.log("POST hit", body);

  return new Response(
    JSON.stringify({ message: "Data Added Successfully", success: true, data }),
    { status: 201 }
  );
}
