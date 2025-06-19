import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageProps } from "@/login/types";
import { Eye, EyeOff, X } from "lucide-react";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const LoginPage = (props: PageProps<"login.ftl">) => {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const { kcContext, i18n, Template } = props;
    const { url, message, login } = kcContext;

    const handleVisibilityToggle = () => {
        setShowPassword(!showPassword);
        const passwordInput = document.getElementById("password") as HTMLInputElement;
        passwordInput.type = showPassword ? "password" : "text";
    };
    return (
        <Template kcContext={kcContext} i18n={i18n}>
            <div
                id="kc-login"
                className=" min-h-screen grid grid-cols-1   md:grid-cols-2 p-4 "
            >
                <div className=" md:p-7 ">
                    <div className="flex flex-col justify-center w-full md:w-11/12 p-4 h-full">
                        <div className="mb-8">
                            <div className="w-4/12 sm:w-3/12 md:w-4/12 lg:w-3/12">
                                <img
                                    src="https://elitery.com/wp-content/uploads/2023/07/ELITERY-LOGO-Black-2022.png"
                                    alt="Logo"
                                    className="w-full h-auto mb-4 object-contain"
                                />
                            </div>
                            <h1 className="text-3xl  mb-4">
                                Welcome to{" "}
                                <span className="font-bold text-[#1f7330]">
                                    {" "}
                                    Elicloud
                                </span>
                            </h1>
                            <p className="text-gray-600 mb-6">
                                Please enter your credentials to continue.
                            </p>
                        </div>
                        {message?.type === "error" && (
                            <Alert
                                className="mb-4 border-[#FF3F33]"
                                variant="destructive"
                                role="alert"
                            >
                                <X className="h-4 w-4" />
                                <AlertTitle>{message.summary}</AlertTitle>
                            </Alert>
                        )}
                        <div>
                            <form
                                action={url.loginAction}
                                onSubmit={() => setLoading(true)}
                                id="kc-form-login"
                                className="flex flex-col gap-5"
                                method="post"
                            >
                                <div className="">
                                    <Input
                                        type="text"
                                        className="w-full p-6 rounded-md"
                                        placeholder="Username"
                                        name="username"
                                        defaultValue={
                                            login.username ? login.username : ""
                                        }
                                        id="username"
                                    />
                                </div>
                                <div className="">
                                    <div className="flex items-center relative">
                                        <Input
                                            type="password"
                                            className="w-full p-6 rounded-md"
                                            placeholder="Password"
                                            defaultValue={
                                                login.password ? login.password : ""
                                            }
                                            name="password"
                                            id="password"
                                            autoComplete="current-password"
                                        />
                                        <button
                                            type="button"
                                            onClick={handleVisibilityToggle}
                                            className="absolute bg-transparent right-4 top-1/2 p-0 cursor-pointer  transform -translate-y-1/2"
                                        >
                                            {showPassword ? (
                                                <Eye className="text-gray-500 w-4 h-4" />
                                            ) : (
                                                <EyeOff className="text-gray-500  w-4 h-4" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full p-6 bg-[#1f7330] text-white rounded-md  flex items-center"
                                >
                                    Login
                                    {loading && <span className="loader"></span>}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
                <div
                    className="hidden md:block w-full p-6  bg-gray-200 rounded-[20px] bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1639066648921-82d4500abf1a?q=80&w=2624&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}
                >
                    <div className="flex flex-col justify-end h-full">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Your Elite
                            <br />
                            <span className="text-[#1f7330]">Managed Cloud</span> <br />
                            Partner
                        </h2>
                        <p className="text-lg text-white mb-6">
                            Empower your business with cloud technology
                        </p>
                    </div>
                </div>
                {/* Add login form or components here */}
            </div>
        </Template>
    );
};
export default LoginPage;
