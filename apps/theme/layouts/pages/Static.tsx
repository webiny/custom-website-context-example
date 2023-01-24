import React from "react";
import { Header } from "./Static/Header";
import { Footer } from "./Static/Footer";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";
import { SecurityProvider, useSecurity } from "@webiny/app-security";

const globalStyles = css`
    html {
        scroll-behavior: smooth;
    }

    @media screen and (prefers-reduced-motion: reduce) {
        html {
            scroll-behavior: smooth;
        }
    }
`;

const Layout = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    footer {
        margin-top: auto;
    }
`;

const PageContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { identity, setIdentity } = useSecurity();

    // Simulate user login
    const login = () => {
        setIdentity({
            id: "123",
            displayName: "Demo User",
            type: "user",
            logout() {
                setIdentity(null);
            }
        });
    };

    return (
        <Layout>
            <Global styles={globalStyles} />
            <Header />
            <strong>User: {identity ? identity.displayName : "anonymous"}</strong>

            {identity ? (
                <button onClick={identity.logout}>Logout</button>
            ) : (
                <button onClick={login}>Login</button>
            )}

            {identity ? (
                <main>{children}</main>
            ) : (
                <main>You&apos;re not authorized to view this content!</main>
            )}
            <Footer />
        </Layout>
    );
};

const Static: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <SecurityProvider>
            <PageContent>{children}</PageContent>
        </SecurityProvider>
    );
};

export default Static;
