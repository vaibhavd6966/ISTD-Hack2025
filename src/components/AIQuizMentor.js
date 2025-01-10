import React, { useEffect } from "react";

const AIQuizMentor = () => {
    useEffect(() => {
        const injectScript = (src) => {
            const script = document.createElement("script");
            script.src = src;
            script.async = true;
            document.body.appendChild(script);
        };

        injectScript("https://cdn.botpress.cloud/webchat/v2.2/inject.js");
        injectScript("https://files.bpcontent.cloud/2025/01/10/10/20250110103039-IPTA6TZ6.js");


        return () => {
            document.body
                .querySelectorAll('script[src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"], script[src="https://files.bpcontent.cloud/2025/01/10/10/20250110103039-IPTA6TZ6.js"]')
                .forEach((script) => script.remove());
        };
    }, []);

    return (
        <div style={styles.container}>
            <iframe
                title="AIQuizMentor Chatbot"
                src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/01/10/10/20250110103039-GCA7MTMN.json"
                style={styles.iframe}
                frameBorder="0"
                allow="fullscreen"
            ></iframe>
        </div>
    );
};

const styles = {
    container: {
        width: "83%",
        height: "100vh",
        marginLeft: "17%",
        backgroundColor: "#000",
        overflow: "hidden",
    },
    iframe: {
        width: "100%",
        height: "100%",
        border: "none",
    },
};

export default AIQuizMentor;
