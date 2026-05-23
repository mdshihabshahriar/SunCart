"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FiUser, FiImage } from "react-icons/fi";
import { toast } from "react-toastify";
import profileBg from "../../../assets/login-bg.png";
import avatar from "../../../assets/avatar.png"

const UpdateProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: user?.name || "",
      image: user?.image || "",
    },
  });

  const handleUpdate = async (data) => {
    const { error } = await authClient.updateUser({
      name: data.name,
      image: data.image,
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Profile updated successfully!");
      setTimeout(() => {
        router.push("/profile");
      }, 1000);
    }
  };

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center px-4">

        <Image
          src={profileBg}
          alt="background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 z-0" />

        <div className="relative z-10 w-full max-w-md">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8">

            {/* Header */}
            <div className="flex flex-col items-center mb-8">
              <Image
                src={user?.image || avatar}
                alt="avatar"
                width={80}
                height={80}
                className="rounded-full border-4 border-orange-400 object-cover w-20 h-20"
              />
              <h2 className="text-2xl font-bold text-slate-900 mt-3">
                Update Information
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Change your name or photo
              </p>
            </div>

            <form onSubmit={handleSubmit(handleUpdate)} className="space-y-4">

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-slate-700 font-medium">
                  Full Name
                </legend>
                <label className="input input-bordered flex items-center gap-3 rounded-xl bg-white w-full">
                  <FiUser className="text-slate-400 text-lg shrink-0" />
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="grow"
                    {...register("name", { required: "Name is required" })}
                  />
                </label>
                {errors.name && (
                  <span className="text-red-500 text-sm">{errors.name.message}</span>
                )}
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-slate-700 font-medium">
                  Photo URL
                </legend>
                <label className="input input-bordered flex items-center gap-3 rounded-xl bg-white w-full">
                  <FiImage className="text-slate-400 text-lg shrink-0" />
                  <input
                    type="url"
                    placeholder="Enter photo URL"
                    className="grow"
                    {...register("image")}
                  />
                </label>
              </fieldset>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn w-full bg-orange-500 hover:bg-orange-600 border-none text-white rounded-xl text-lg mt-2"
              >
                {isSubmitting ? "Updating..." : "Update Information"}
              </button>

              <button
                type="button"
                onClick={() => router.push("/profile")}
                className="btn w-full btn-outline border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white rounded-xl text-lg"
              >
                Cancel
              </button>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfilePage;