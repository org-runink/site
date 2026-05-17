import re

file_path = "assets/js/main.js"
with open(file_path, "r") as f:
    content = f.read()

content = content.replace("""  const scrollHandler = () => {
    lastScrollY = window.scrollY || 0;
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
    ticking = false;
  };

    const scrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };""", """  const scrollHandler = () => {
    lastScrollY = window.scrollY || 0;
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  };""")

with open(file_path, "w") as f:
    f.write(content)
