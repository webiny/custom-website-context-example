import React from "react";
import { PbEditorPageElementPlugin } from "@webiny/app-page-builder/types";
import { createRenderer } from "@webiny/app-page-builder-elements";
import { Element } from "@webiny/app-page-builder-elements/types";

const IdentityElement = createRenderer(() => {
    return <p>This will render identity information on the website.</p>;
});

export const identityElementPlugin: PbEditorPageElementPlugin = {
    name: "pb-editor-page-element-identity",
    type: "pb-editor-page-element",
    elementType: "identity",
    toolbar: {
        title: "Identity Info",
        group: "pb-editor-element-group-basic",
        preview() {
            return <p>Identity</p>;
        }
    },
    render({ element }) {
        return <IdentityElement element={element as Element} />;
    },
    create() {
        return {
            type: this.elementType,
            elements: [],
            data: {}
        };
    }
};
