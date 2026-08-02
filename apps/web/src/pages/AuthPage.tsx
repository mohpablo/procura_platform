import {
  Lock,
  Mail,
  ArrowRight,
  ShieldCheck,
  Globe2,
  Zap,
  TrendingUp,
  Sparkles,
  Network,
} from "lucide-react";
import { useSignin } from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { signInSchema, type SignInDto } from "@procura/shared";
import { zodResolver } from "@hookform/resolvers/zod";

export default function AuthPage() {
  const { Signin, isPending } = useSignin();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInDto>({
    resolver: zodResolver(signInSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: SignInDto) => {
    Signin(data);
  };

  return (
    <div className="min-h-screen bg-surface font-sans text-on-surface antialiased flex flex-col relative overflow-hidden">
      {/* Header Bar */}
      <header className="relative z-10 w-full border-b border-outline-variant/60 bg-surface/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-360 items-center justify-between px-4 md:px-8">
          <a href="/" className="flex items-center gap-2.5">
            <span className="relative flex size-8 items-center justify-center rounded-lg bg-primary">
              <Network className="size-4 text-on-primary" strokeWidth={2.2} />
            </span>
            <span className="text-title-md tracking-tight font-semibold">
              Procura
            </span>
          </a>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-outline-variant bg-surface-container-lowest">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full rounded-full bg-secondary animate-pulse-ring" />
                <span className="relative inline-flex size-1.5 rounded-full bg-secondary" />
              </span>
              <span className="text-label-sm uppercase text-on-surface-variant font-medium">
                v1.0 Platform Live
              </span>
            </div>
            <div className="flex items-center gap-2 text-label-sm uppercase text-on-surface-variant font-medium">
              <Globe2 className="size-4 text-outline" />
              <span>EN-US</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 flex items-center justify-center w-full max-w-360 mx-auto px-4 py-12 md:px-8">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Startup Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1.5 w-fit">
              <Sparkles className="size-4 text-secondary" />
              <span className="text-label-sm uppercase text-on-surface-variant font-medium">
                Modern B2B Purchasing Engine
              </span>
            </div>

            <div className="space-y-6 max-w-2xl">
              <h1 className="text-[40px] leading-11.5 font-bold tracking-[-0.02em] md:text-display-lg text-on-surface">
                Automate your Business. Scale your business faster.
              </h1>
              <p className="text-body-lg text-on-surface-variant max-w-xl">
                Replace manual spreadsheets with instant PO generation,
                automated vendor approvals, and real-time spend analytics
                designed for modern teams.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-outline-variant">
              <div className="group rounded-xl border border-outline-variant bg-surface-container-lowest p-6 transition-all duration-300 hover:-translate-y-1 hover:border-outline hover:bg-surface-container-low flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary-container transition-colors duration-300 group-hover:bg-secondary">
                  <Zap
                    className="size-5 text-on-primary-container group-hover:text-on-secondary"
                    strokeWidth={2}
                  />
                </span>
                <div>
                  <h4 className="text-title-md font-bold text-on-surface">
                    Instant Setup
                  </h4>
                  <p className="text-body-md text-on-surface-variant mt-1.5">
                    Connect vendors and issue purchase orders in minutes.
                  </p>
                </div>
              </div>

              <div className="group rounded-xl border border-outline-variant bg-surface-container-lowest p-6 transition-all duration-300 hover:-translate-y-1 hover:border-outline hover:bg-surface-container-low flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary-container transition-colors duration-300">
                  <TrendingUp
                    className="size-5 text-on-secondary-container"
                    strokeWidth={2}
                  />
                </span>
                <div>
                  <h4 className="text-title-md font-bold text-on-surface">
                    Spend Control
                  </h4>
                  <p className="text-body-md text-on-surface-variant mt-1.5">
                    Smart budgets and real-time approval workflows.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <span className="text-label-sm uppercase text-outline font-medium">
                Backed by modern teams at
              </span>
              <div className="flex items-center gap-4 text-label-sm font-bold text-on-surface-variant">
                <span>TECHFLOW</span>
                <span className="text-outline-variant">•</span>
                <span>HYPERLOGIC</span>
                <span className="text-outline-variant">•</span>
                <span>SCALE LABS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Login Panel */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto">
            <div className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest p-6 sm:p-8 shadow-[0_24px_60px_-24px_rgba(19,27,46,0.25)]">
              <div className="space-y-2 border-b border-outline-variant pb-6">
                <h2 className="text-headline-lg font-bold text-on-surface">
                  Log in to Procura
                </h2>
                <p className="text-body-md text-on-surface-variant">
                  Enter your team credentials to access your workspace.
                </p>
              </div>

              {/* Hook up handleSubmit wrapper */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 pt-6">
                {/* Email Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-label-sm uppercase text-on-surface-variant font-medium"
                  >
                    Work Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
                      <Mail className="size-5" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="you@company.com"
                      className="w-full rounded-lg border border-outline-variant bg-surface pl-12 pr-4 py-3.5 text-body-lg text-on-surface placeholder:text-outline transition-colors focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-error mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="block text-label-sm uppercase text-on-surface-variant font-medium"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
                      <Lock className="size-5" />
                    </div>
                    <input
                      id="password"
                      type="password"
                      {...register("password")}
                      placeholder="••••••••••••"
                      className="w-full rounded-lg border border-outline-variant bg-surface pl-12 pr-4 py-3.5 text-body-lg text-on-surface placeholder:text-outline transition-colors focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                    />
                  </div>
                  {errors.password && (
                    <p className="text-xs text-error mt-1">{errors.password.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isPending}
                  className="group mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-body-lg font-semibold text-on-primary transition-transform duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isPending ? "Logging in..." : "Log In to Workspace"}</span>
                  {!isPending && (
                    <ArrowRight className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
                  )}
                </button>
              </form>

              {/* Security Pill */}
              <div className="mt-8 flex items-start gap-3 rounded-lg border border-outline-variant bg-surface-container-low p-4">
                <ShieldCheck className="size-5 shrink-0 text-secondary" />
                <p className="text-body-md text-on-surface-variant">
                  Bank-level SSL encryption protecting your procurement data.
                </p>
              </div>
            </div>

            {/* Context Footer */}
            <p className="mt-6 text-center text-body-md text-on-surface-variant">
              Need an account invite?{" "}
              <a
                href="#"
                className="font-semibold text-on-surface hover:text-secondary transition-colors"
              >
                Contact your manager
              </a>
              .
            </p>
          </div>
        </div>
      </main>

      {/* Footer Bar */}
      <footer className="relative z-10 w-full border-t border-outline-variant/60 bg-surface/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-360 flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:justify-between md:px-8 text-body-md text-on-surface-variant">
          <div className="flex items-center gap-2">
            <span>
              &copy; {new Date().getFullYear()} Procura Technologies, Inc.
            </span>
          </div>
          <div className="flex gap-6 font-medium">
            <a href="#privacy" className="hover:text-on-surface transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-on-surface transition-colors">
              Terms of Service
            </a>
            <a href="#support" className="hover:text-on-surface transition-colors">
              Contact Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}