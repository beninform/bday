document.addEventListener("DOMContentLoaded", function(){
    const envelope = document.getElementById("envelope");
    // const btnOpen = document.getElementById("open");
    // const btnReset = document.getElementById("close");
    const btnRead = document.getElementById("readme");
    const content = document.getElementById("content");

    function openEnvelope(){
        if (envelope.classList.contains('open')) {
            console.log('content to open');
            content.classList.add("open");
            content.classList.remove("close");
            content.style.display = "block";

        } else {
            console.log('envelope to open');
            envelope.classList.add("open");
            envelope.classList.remove("close");            
        }

    }

    // function openContent(){
    //     console.log('content open');
    //     content.classList.add("open");
    //     content.classList.remove("close");
    // }

    // function closeEnvelope(){
    //     envelope.classList.add("close");
    //     envelope.classList.remove("open");
    // }

    envelope.addEventListener("click", openEnvelope);
    // btnRead.addEventListener("click", openContent);
    // btnOpen.addEventListener("click", openEnvelope);
    // btnReset.addEventListener("click", closeEnvelope);
});
