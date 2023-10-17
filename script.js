    function sim(){
        alert("Hoje é até ganhar ein, bb! <3 ")
    }

    function desvia(t){
        // var btn = document.getElementById("btn");
        var btn = t;
        btn.style.position = 'absolute';
        btn.style.top = geraPosicao(10,90);
        btn.style.left = geraPosicao(10,90);
        console.log("errooooou");
    }

    function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
    }