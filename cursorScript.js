// For cursor style
document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".custom-cursor");
    cursor.style.transform = `translate(${e.pageX - 10}px, ${e.pageY - 10}px)`;
});
