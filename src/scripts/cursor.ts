const cursor = document.getElementById("custom-cursor");

function onMouseMove(e: MouseEvent) {
    if (!cursor) return;
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
}

window.addEventListener("mousemove", onMouseMove);
