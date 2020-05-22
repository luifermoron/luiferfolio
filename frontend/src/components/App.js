import React, { useEffect, useState } from "react";
import { render } from "react-dom";

import CircleLoader from "react-spinners/CircleLoader";
import ParticlesBg from 'particles-bg';


const mainContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    backgroundColor: "transparent",
};

const about = {
    fontSize: "24px",
    whiteSpace: "pre-line",
};

const comment = {
    color: "#ccc",
};

const imgStyle = {
    borderRadius: "50%",
};

const iconContainer = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
};

const icon = {
    width: "60px",
    height: "60px",
};

const TIME_OUT = 1000;

const App = () => {
    const [presentation, setPresentation] = useState({ loading: true, });

    const componentDidMount = () => {
        setTimeout(function () {
            fetch("api/presentations")
                .then(response => {
                    if (response.status > 400) {
                        return this.setState(() => {
                            return { placeholder: "Something went wrong!" };
                        });
                    }
                    return response.json();
                })
                .then(data => {
                    setPresentation({
                        loading: false,
                        ...data[0]
                    });
                    console.log(data[0]);
                });
        }, TIME_OUT);
    }

    const renderLoading = () => {
        return (
            <div style={mainContainer}>
                <div className="sweet-loading">
                    <CircleLoader
                        size={100}
                        color={"#123abc"}
                        loading={true}
                    />
                </div>
            </div>
        );
    }

    const renderPresentation = () => {
        const body = presentation.body.split("\\n").join("\n");
        return (
            <div style={mainContainer}>
                <img style={imgStyle} src="/static/frontend/me.jpg" />

                <h1>{presentation.title}</h1>
                <p style={about}>
                    {body}
                </p>
                <div style={iconContainer}>
                    {
                        presentation.images.map((image) => (
                            <a href={image.link} target="__blank">
                                <img style={icon} src={image.image} />
                            </a>
                        ))
                    }
                </div>
            </div>

        );
    }

    useEffect(componentDidMount, []);
    return (
        <div>
            {presentation.loading ? renderLoading() : renderPresentation()}
            <ParticlesBg color="#005b96" type="cobweb" bg={true} />
        </div>
    );
}

export default App;

const container = document.getElementById("app");
render(<App />, container);