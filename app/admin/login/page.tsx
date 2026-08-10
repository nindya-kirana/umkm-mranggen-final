"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

import { login } from "@/services/auth";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();

    try {

      setLoading(true);

      await login({

        email,

        password,

      });

      router.replace("/admin/dashboard");

      router.refresh();

    } catch (err: any) {

      alert(err.message ?? "Login gagal.");

    } finally {

      setLoading(false);

    }

  }

  return (

    <main className="flex min-h-screen items-center justify-center bg-[#F7F5F2] p-6">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl"
      >

        <div className="mb-10 text-center">

          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2D2926] text-3xl text-white">

            🏪

          </div>

          <h1 className="text-3xl font-black text-[#2D2926]">

            Admin Dashboard

          </h1>

          <p className="mt-2 text-gray-500">

            Website UMKM Desa Mranggen

          </p>

        </div>

        <div className="space-y-5">

          <div>

            <label className="mb-2 block font-semibold">

              Email

            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="admin@mranggen.id"
              className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-[#2D2926]"
            />

          </div>

          <div>

            <label className="mb-2 block font-semibold">

              Password

            </label>

            <div className="relative">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                required
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="********"
                className="w-full rounded-xl border border-gray-300 p-4 pr-12 outline-none transition focus:border-[#2D2926]"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >

                {showPassword ? (

                  <EyeOff size={20} />

                ) : (

                  <Eye size={20} />

                )}

              </button>

            </div>

          </div>

        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-8 w-full rounded-xl bg-[#2D2926] py-4 font-bold text-white transition hover:bg-[#443C36] disabled:opacity-60"
        >

          {loading
            ? "Memproses..."
            : "Masuk"}

        </button>

      </form>

    </main>

  );

}