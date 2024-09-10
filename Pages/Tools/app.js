window.onload = function()
{
    const imgs = document.querySelectorAll(".container>a");
    imgs.forEach((img, index) =>
    {
        img.classList.add("loaded");
    })
}