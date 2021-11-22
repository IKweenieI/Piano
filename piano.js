const keysArray = document.querySelectorAll(".key");

document.addEventListener('keydown', keyPressedFunction);


function keyPressedFunction(letter)
{
    if (letter.keyCode == "90" || letter.keyCode == "122")
    {
        playAudio(keysArray[0]);
    }
    else if (letter.keyCode == "120" || letter.keyCode == "88")
    {
        playAudio(keysArray[2]);
    }
    else if (letter.keyCode == "99" || letter.keyCode == "67")
    {
        playAudio(keysArray[4]);
    }
    else if (letter.keyCode == "118" || letter.keyCode == "86")
    {
        playAudio(keysArray[6]);
    }
    else if (letter.keyCode == "98" || letter.keyCode == "66")
    {
        playAudio(keysArray[7]);
    }
    else if (letter.keyCode == "110" || letter.keyCode == "78")
    {
        playAudio(keysArray[9]);
    }
    else if (letter.keyCode == "109" || letter.keyCode == "77")
    {
        playAudio(keysArray[11]);
    }
    else if (letter.keyCode == "115" || letter.keyCode == "83")
    {
        playAudio(keysArray[1]);
    }
    else if (letter.keyCode == "100" || letter.keyCode == "68")
    {
        playAudio(keysArray[3]);
    }
    else if (letter.keyCode == "106" || letter.keyCode == "74")
    {
        playAudio(keysArray[10]);
    }
    else if (letter.keyCode == "104" || letter.keyCode == "72")
    {
        playAudio(keysArray[8]);
    }
    else if (letter.keyCode == "102" || letter.keyCode == "70")
    {
        playAudio(keysArray[5]);
    }
}



var index = 0;
function playAudio(key)
{
    const sound = document.getElementById(key.getAttribute("data-note"));
    sound.currentTime = 0;
    sound.play();
    const color = key.classList[1];
    key.classList.add("index-" + index);
    setTimeout(() =>
    {
        key.classList = "key " + color;
    }, 100);
    index += 1;
    if (index == 11)
    {
        index = 0;

    }
}


for (let i = 0; i < 12; i++)
{
    keysArray[i].addEventListener("click", function ()
    {
        playAudio(keysArray[i]);

    });

}