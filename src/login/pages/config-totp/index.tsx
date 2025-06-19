import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { PageProps } from "@/login/types";
import { ScanLine } from "lucide-react";
const ConfigTotpPage = (props: PageProps<"login-config-totp.ftl">) => {
    const { kcContext, i18n, Template } = props;

    const { totp, url, messagesPerField, mode } = kcContext;
    const { msg } = i18n;
    const steps = [msg("loginTotpStep1"), msg("loginTotpStep2"), msg("loginTotpStep3")];
    console.log(messagesPerField);
    return (
        <Template kcContext={kcContext} i18n={i18n}>
            <div className="min-h-screen grid grid-cols-1 md:grid-cols-4 p-4 ">
                <div className="col-span-1 md:col-span-1 px-8 py-12  bg-[#f4f7f9] rounded-[20px] ">
                    <div className="w-4/12 md:w-4/12 mb-10">
                        <img
                            src="https://elitery.com/wp-content/uploads/2023/07/ELITERY-LOGO-Black-2022.png"
                            alt="Logo"
                            className="w-full h-auto mb-4 object-contain"
                        />
                    </div>

                    <div>
                        {steps.map((step, index) => (
                            <div key={index} className="mb-4">
                                <p className="text-gray-700 text-sm">
                                    {index + 1}. {step}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-1 md:col-span-3 p-4 flex flex-col items-center justify-center">
                    <div className="w-10 h-10 bg-[#f4f7f9] flex justify-center items-center rounded-lg mb-4">
                        <ScanLine />
                    </div>
                    <div className="w-full text-center">
                        <h6 className="text-2xl font-bold">Scan the QR code</h6>
                        <p className="text-gray-600 text-sm mb-4  text-center">
                            Use your authenticator app to scan the QR code below and set
                            up two-factor authentication.
                        </p>
                    </div>
                    <div className="w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                        <img
                            id="kc-totp-secret-qr-code"
                            src={`data:image/png;base64, ${totp.totpSecretQrCode}`}
                            alt="Figure: Barcode"
                        />
                        <br />
                    </div>
                    <form
                        action={`${url.loginAction}`}
                        id="kc-totp-settings-form"
                        method="post"
                        className="w-full max-w-md mt-4"
                    >
                        <div>
                            <Input
                                type="text"
                                id="totp"
                                name="totp"
                                autoComplete="off"
                                className="mt-2 w-full  p-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1f7330]"
                                placeholder="One-time code*"
                            />
                            {messagesPerField.existsError("totp") && (
                                <span className="text-red-600 text-sm">
                                    {messagesPerField.get("totp")}
                                </span>
                            )}
                        </div>
                        <Input
                            type="hidden"
                            id="totpSecret"
                            name="totpSecret"
                            value={`${totp.totpSecret}`}
                        />
                        {mode && (
                            <input
                                type="hidden"
                                id="mode"
                                name="mode"
                                value={`${mode}`}
                            />
                        )}
                        <Input
                            type="text"
                            id="userLabel"
                            name="userLabel"
                            autoComplete="off"
                            className="mt-2 w-full  p-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1f7330]"
                            placeholder="Device Name"
                        />
                        {/* <div className="flex items-center mt-4">
                            <Checkbox className="  border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#1f7330]" />
                            <label className="text-gray-600 text-sm ml-2">
                                Sign out from other devices
                            </label>
                        </div> */}
                        <Button
                            type="submit"
                            className="mt-4 w-full bg-[#1f7330] text-white py-2 px-4 rounded-lg hover:bg-[#14521f] transition-colors"
                            id="saveTOTPBtn"
                            value={`msg("doSubmit")`}
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </Template>
    );
};

export default ConfigTotpPage;
