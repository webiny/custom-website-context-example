import React from "react";
import { PbRenderElementPlugin } from "@webiny/app-page-builder/types";
import { useSecurity } from "@webiny/app-security";

const IdentityElement = () => {
    const { identity } = useSecurity();

    return identity ? (
        <p>Authenticated user: {identity.displayName}</p>
    ) : (
        <p>User is not authenticated</p>
    );
};

export const identityElementPlugin: PbRenderElementPlugin = {
    name: `pb-render-page-element-identity`,
    type: "pb-render-page-element",
    elementType: "identity",
    render() {
        return <IdentityElement />;
    }
};
