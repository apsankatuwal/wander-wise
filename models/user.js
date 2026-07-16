import { model, Schema } from "mongoose";
import { hash } from "bcrypt";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      },
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

UserSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await hash(this.password, 10);
  }
});

// ensure password
UserSchema.pre("findOneAndUpdate", async function () {
  if ((this, this.getUpdate().password)) {
    this.getUpdate().password = await hash(this.getUpdate().password, 10);
  }
});

const User = model("user", UserSchema);

export default User;
