import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageProps } from "@/login/types";
import { useState } from "react";

const LoginPage = (props: PageProps<"login.ftl">) => {
    const [loading, setLoading] = useState(false);
    const { kcContext } = props;
    const { url, message, login } = kcContext;
    return (
        <div
            id="kc-login"
            className="grid grid-cols-2 p-4  max-w-screen min-h-screen bg-white"
        >
            <div className="p-7">
                <div className="flex flex-col justify-center  w-11/12 p-4 h-full">
                    <div className="mb-8">
                        <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12">
                            <img
                                src="https://elitery.com/wp-content/uploads/2023/07/ELITERY-LOGO-Black-2022.png"
                                alt="Logo"
                                className="w-full h-auto mb-4 object-contain"
                            />
                        </div>
                        <h1 className="text-3xl  mb-4">
                            Welcome to{" "}
                            <span className="font-bold text-[#1f7330]"> Elicloud</span>
                        </h1>
                        <p className="text-gray-600 mb-6">
                            Please enter your credentials to continue.
                        </p>
                    </div>
                    <div>
                        {message?.type && (
                            <div
                                className={`alert alert-${message.type} mb-4`}
                                role="alert"
                            >
                                {message.summary}
                            </div>
                        )}
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
                                    defaultValue={login.username ? login.username : ""}
                                    id="username"
                                />
                            </div>
                            <div className="">
                                <Input
                                    type="password"
                                    className="w-full p-6 rounded-md"
                                    placeholder="Password"
                                    defaultValue={login.password ? login.password : ""}
                                    name="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="remember-me" />
                                    <label
                                        htmlFor="remember-me"
                                        className="text-gray-600"
                                    >
                                        Remember me
                                    </label>
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
                className="w-full p-6 bg-gray-200 rounded-[20px] bg-cover bg-center bg-no-repeat"
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
    );
};
export default LoginPage;
