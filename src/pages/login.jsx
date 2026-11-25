
import { useState } from "react"
import { Eye, EyeOff, LockKeyhole } from "lucide-react"

import AuthLayout from "../components/AuthLayout"
import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"

function Login() {
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()

    alert("Login submitted! Backend integration is pending.")
  }

  return (
    <AuthLayout>

      <div className="text-center mb-8">
        <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <LockKeyhole className="text-[#142B50]" size={23} />
        </div>

        <h2 className="text-3xl font-bold text-[#142B50]">
          Welcome back
        </h2>

        <p className="text-slate-500 mt-2">
          Sign in to access your workspace.
        </p>
      </div>

      <Card className="border-slate-200 shadow-sm">

        <CardHeader>
          <CardTitle className="text-xl text-[#142B50]">
            Sign in to your account
          </CardTitle>

          <CardDescription>
            Enter your work credentials below.
          </CardDescription>
        </CardHeader>

        <CardContent>

          <form onSubmit={handleLogin} className="space-y-5">

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Work Email</Label>

              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">

              <div className="flex justify-between">
                <Label htmlFor="password">Password</Label>

                <button
                  type="button"
                  className="text-sm text-[#294B7A] hover:underline"
                  onClick={() =>
                    alert("Forgot password feature will be added later.")
                  }
                >
                  Forgot password?
                </button>
              </div>

              <div className="relative">

                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  className="pr-11"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword
                    ? <EyeOff size={18} />
                    : <Eye size={18} />
                  }
                </button>

              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-2">
              <input
                id="remember"
                type="checkbox"
                className="accent-[#142B50]"
              />

              <Label
                htmlFor="remember"
                className="text-sm font-normal"
              >
                Remember me
              </Label>
            </div>

            {/* Login button */}
            <Button
              type="submit"
              className="w-full bg-[#142B50] hover:bg-[#203F6B] text-white"
            >
              Sign In
            </Button>

          </form>

        </CardContent>
      </Card>

    </AuthLayout>
  )
}

export default Login
