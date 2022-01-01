window.addEventListener('keydown', play)

function play(e) {
    // console.log(e.keyCode)
    //Get Audio
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    audio.currentTime = 0
    audio.play()
    // console.log(audio)

    //Color Effect
    const div = document.querySelector(`div[data-key="${e.keyCode}"]`)
    div.classList.add("active")
    // console.log(div)

    //End Transition
    let buttonClicks = document.querySelectorAll('.buttons div')
    // console.log(buttonClicks)

    buttonClicks.forEach(btn => {
        btn.addEventListener('transitionend', removeTrans)
        
    //Remove Transition
    function removeTrans(e) {
        if (e.propertyName == "transform") {
        console.log(e.target.classList.remove("active"))
        // console.log(e.target.classList.remove("active"))
        }
    }
    })
}

//When clicked >> add the following css properties