import { CustomTemplateProps } from "./types";

const Template = (props: CustomTemplateProps<"login.ftl">) => {
    const { children, kcContext, i18n } = props;
    const { realm } = kcContext;
    const { internationalizationEnabled } = realm;
    const { enabledLanguages } = i18n;
    return <div className="max-w-screen min-h-screen  bg-white">{children}</div>;
};

export { Template };
