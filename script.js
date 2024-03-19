    function sim(){
        alert("Boraaa, aqui é até de madrugada! ")
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
