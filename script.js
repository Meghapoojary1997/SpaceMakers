function showFeatures(furniture) {
    const features = {
        sofa: {
            title: "Comfortable Sofa",
            description: "This sofa is made with high-quality fabric, has a wooden frame, and comes with soft cushions."
        },
        table: {
            title: "Modern Table",
            description: "A stylish wooden table with a polished finish, suitable for dining or office use."
        },
        chair: {
            title: "Ergonomic Chair",
            description: "Designed for comfort with adjustable height and back support. Ideal for home and office use."
        }
    };

    const featureBox = document.getElementById("features");

    // Smoothly fade out previous content before showing new
    featureBox.style.opacity = "0";
    setTimeout(() => {
        document.getElementById("title").innerText = features[furniture].title;
        document.getElementById("description").innerText = features[furniture].description;
        featureBox.style.display = "block";
        featureBox.style.opacity = "1";
    }, 300);
}
