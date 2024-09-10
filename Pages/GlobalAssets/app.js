const navBTNS = document.querySelectorAll(".navContainer>div");
const navBTN = document.getElementById("navLoad");

navBTNS.forEach(btn =>
{
    btn.addEventListener("click",function()
    {
        const url = this.getAttribute("data-href");
        if(url)
        {
            console.log(url);
            window.location.href = url;
        }
    })
});

navBTN.addEventListener('click', () =>
{
    const navElement = document.getElementById("container");
    navElement.classList.toggle("active");
})