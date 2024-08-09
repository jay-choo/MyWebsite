// Challenge 2:
// Replace the arguments below according to your preference.

// space, scary, military, romantic, cowboy, fantasy, superhero
favouriteMovieGenre("arial")

// watermelon, tomato, banana, orange, avocado, blueberry
favouriteFruit("#FFFAF0")

// light, dark
favouriteMode("dark")

// sharp, soft, round
favouriteEdgeStyle("soft")



////////////////////////////////////
// IGONE THE CODE BELOW THIS LINE //
////////////////////////////////////

function setProp(prop, value) {
    document.documentElement.style.setProperty(prop, value)
}

function favouriteEdgeStyle(style) {
    setProp("--image", "var(--" + style + ")");
}

function favouriteMovieGenre(font) {
    if (font) {
        setProp("--font", "var(--" + font + ")");    
    }
}

function favouriteMode(mode) {
    if (mode === "light" || !mode) {
        setProp('--background', "var(--light)");
        setProp('--text', "var(--dark)");
    } else if (mode === "dark") {
        setProp('--background', "var(--dark)");
        setProp('--text', "var(--light)");
    }
}

function favouriteFruit(theme) {
    setProp('--light', "#696969")
    setProp('--dark', "#FFFAF0")
}


