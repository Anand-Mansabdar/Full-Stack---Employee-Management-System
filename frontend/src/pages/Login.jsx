import React from "react";
import LoginLanding from "../components/LoginLanding";
import { ArrowRight, ShieldIcon, UserIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const portalOptions = [
    {
      to: "/login/admin",
      title: "Admin Portal",
      description:
        "Manage employees, departments, payroll, and system configurations",
      icon: ShieldIcon,
    },
    {
      to: "/login/employee",
      title: "Employee Portal",
      description:
        "View your profile, track attendance, request time off, and access payslips.",
      icon: UserIcon,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LoginLanding />

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto min-h-screen">
        <div className="w-full max-w-md animate-fade-in relative z-10">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-medium text-neutral-900 tracking-tight mb-3">
              Welcome Back
            </h2>
            <p className="text-neutral-500">
              Select your portal to securely access the system.
            </p>
          </div>

          {/* Portal List */}
          <div className="space-y-4">
            {portalOptions.map((portal) => (
              <Link
                key={portal.to}
                to={portal.to}
                className="group block bg-neutral-50 border border-neutral-200 rounded-lg p-5 sm:p-6 transition-all duration-300 hover:border-indigo-400 hover:bg-indigo-50 "
              >
                <div className="relative z-10 flex items-center justify-between gap-4 sm:gap-5">
                  <h3 className="text-lg text-neutral-800 group-hover:text-indigo-600 mb-1 transition-colors">
                    {portal.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </Link>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-12 text-center md:text-left text-md text-neutral-400">
            <p>{new Date().getFullYear()} - Anand Mansabdar.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
