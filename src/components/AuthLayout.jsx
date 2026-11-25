
import { ShieldCheck, Layers } from "lucide-react"

function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">

      {/* Header */}
      <header className="h-20 px-6 md:px-16 flex items-center border-b bg-white">
        <div className="flex items-center gap-3">
          <div className="bg-[#142B50] p-2 rounded-lg">
            <Layers className="text-white" size={24} />
          </div>

          <div>
            <h1 className="font-bold text-xl text-[#142B50]">
              PulseWorks AI
            </h1>
            <p className="text-xs text-slate-500">
              Secure Enterprise Workspace
            </p>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {children}

          <div className="flex items-center justify-center gap-2 mt-8 text-xs text-slate-400">
            <ShieldCheck size={15} />
            Secure authentication powered by PulseWorks AI
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-slate-400 py-5">
        © 2026 PulseWorks AI. All rights reserved.
      </footer>

    </div>
  )
}

export default AuthLayout
