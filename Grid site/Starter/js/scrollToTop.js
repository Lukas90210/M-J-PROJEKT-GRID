(function()
{
    let //pobieranie danych
        body = document.querySelector('body')
    button = createButton();

    //1
    function createButton()
    {
        let button = document.createElement("button"); //tworzenie przycisku

        button.classList.add("backToTop", "hidden");    //tworzenie klas
        button.textContent = "Scroll Up";  //tworzenie tekstu
        body.appendChild(button); //wstawianie na stronę

        return button;
    }

    function getBodyPositionTop()
    {
        return Math.abs(body.getBoundingClientRect().top);
    }
    //4
    //przejście do góry
    function animateScroll()
    {
        if(getBodyPositionTop() > 0) { //sprawdzanie czy scroll top jest większy od 0.
            window.scrollBy(0, -20);//przesuwanie to top o 5px.
            setTimeout(animateScroll, 1); //wykonywanie animacji co 10msc.
        }
    }



    //3
    //zdarzenie kliknięcia
    button.addEventListener("click", function(e)
    {
        e.stopPropagation(); //zapobieganie wywoływaniu innych zdarzń podczas tego
        animateScroll(); //wywołanie funkcji animateScroll.
    }, false);

    //2
    //zdarzenie scroll
    window.addEventListener("scroll", function(e)
    {
        let position = getBodyPositionTop();
        //jeśli przycisk jest powyżej 100px to pojawia się przycisk. Usuwanie klasy hidden
        if (position >= 100) {
            button.classList.remove("hidden");
        } else {
            button.classList.add("hidden");
        }
    }, false);
})();