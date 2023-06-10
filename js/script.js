const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh_btn");

const maxPaletteBoxes = 32;

const generatePalette = () => {
    container.innerHTML = ""; // clearing the container
    for (let i = 0; i < maxPaletteBoxes; i++) {
        // Generating a random hex color code
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, 0)}`;

        // Creating a new "li" element and inserting it to the container
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect_box" style="background: ${randomHex}"></div>
        <span class="hex_value">${randomHex}</span>`;
        //Adding click event to current li element to copy the color
        color.addEventListener("click", () => copyColor(color, randomHex));

        container.appendChild(color);
    }

}
generatePalette();
const copyColor =(elem, hexVal) => {
    const colorElement =elem.querySelector(".hex_value");
    //copying the hex value, updating the text to copy
    // and changing the text back to orginal hex value after 1 secound
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerText = "copied";
        setTimeout(() => colorElement.innerText = hexVal, 1000);
    }).catch(() => alert("failed to copy the color code!")); // showing alert if can't be copied
}
refreshBtn.addEventListener("click", generatePalette);