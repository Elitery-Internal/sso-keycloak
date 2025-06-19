import { Suspense, lazy } from "react";
import type { ClassKey } from "keycloakify/login";
import type { KcContext } from "./KcContext";
import { useI18n } from "./i18n";
import DefaultPage from "keycloakify/login/DefaultPage";
import { Template } from "./Template";
import LoginPage from "./pages/login";
import { Toaster } from "@/components/ui/sonner";
import ConfigTotpPage from "./pages/config-totp";
import OtpFormPage from "./pages/otp-form";
const UserProfileFormFields = lazy(
    () => import("keycloakify/login/UserProfileFormFields")
);

const doMakeUserConfirmPassword = true;

export default function KcPage(props: { kcContext: KcContext }) {
    const { kcContext } = props;

    const { i18n } = useI18n({ kcContext });

    return (
        <>
            <Suspense>
                {(() => {
                    switch (kcContext.pageId) {
                        case "login.ftl":
                            return (
                                <LoginPage
                                    Template={Template}
                                    kcContext={kcContext}
                                    i18n={i18n}
                                />
                            );
                        case "login-config-totp.ftl":
                            return (
                                <ConfigTotpPage
                                    Template={Template as any}
                                    kcContext={kcContext}
                                    i18n={i18n}
                                />
                            );
                        case "login-otp.ftl":
                            return (
                                <OtpFormPage
                                    Template={Template as any}
                                    kcContext={kcContext}
                                    i18n={i18n}
                                />
                            );
                        default:
                            return (
                                <DefaultPage
                                    kcContext={kcContext}
                                    i18n={i18n}
                                    classes={classes}
                                    Template={Template}
                                    doUseDefaultCss={true}
                                    UserProfileFormFields={UserProfileFormFields}
                                    doMakeUserConfirmPassword={doMakeUserConfirmPassword}
                                />
                            );
                    }
                })()}
            </Suspense>
            <Toaster
                position="top-right"
                richColors
                closeButton
                toastOptions={{
                    className: "bg-white text-black",
                    duration: 5000,
                    style: {
                        backgroundColor: "white",
                        color: "black",
                        borderRadius: "8px",
                        padding: "16px"
                    }
                }}
            />
        </>
    );
}

const classes = {} satisfies { [key in ClassKey]?: string };
