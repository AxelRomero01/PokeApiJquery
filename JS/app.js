$(document).ready(function(){
    //alert("la libreria se cargó correctamente");

    const url = "https://pokeapi.co/api/v2/pokemon/"
    //llamado a api
    $.get(url, function(data){
        let json = data;
        const jsonPokemons = JSON.stringify(data);
        console.log(json);
        const res = data.result;

        $("article").attr("list", function(){
            $("#buttomVer").click(function(){
                $("#listaPokemons").append(jsonPokemons);
            })
        });

        $("#buttomBuscar").click(async function(){
            let busqueda = $("#buscar").val().toLowerCase();

            //CODIGO PARA BUSQUEDA GLOBAL DE POKEMONS
            
            let url = `https://pokeapi.co/api/v2/pokemon/${busqueda}`;
            //console.log(url);
            $.get(url, function(data){
                //console.log(data);
                
                $("#sectionPokemon").append(`<img src="${data.sprites.front_default}"></img>`);
                
                for(let i = 0; i < data.abilities.length; i++){
                    let titulo = $(`<h5></h5>`).text(`Habilidad ${data.name}:`);
                    let texto = $(`<span></span>`).append(`${data.abilities[i].ability.name}`);
                            
                    $("#abilityPokemons").append(titulo,texto);
                }
            })

            //CODIGO DE BUSQUEDA PARA LOS PRIMEROS 20 POKEMONS
            // for(let i = 0; i < json.results.length; i++){
            //     //console.log(json.results[i]);

            //     try {
            //         if(busqueda === json.results[i].name){
            //             let resultado = await fetch(json.results[i].url),
            //             pokemon = await resultado.json();

            //             //console.log(resultado, pokemon);

            //             $("#sectionPokemon").append(`<img src="${pokemon.sprites.front_default}"></img>`);
                        
            //             for(let i = 0; i < pokemon.abilities.length; i++){
            //                 //console.log(pokemon.abilities[i]);

            //                 let titulo = $(`<h5></h5>`).text(`Habilidad ${pokemon.name}:`);
            //                 let texto = $(`<span></span>`).append(`${pokemon.abilities[i].ability.name}`);
                            
            //                 $("#abilityPokemons").append(titulo,texto);
            //             }   
            //         }
            //     } catch (err) {
            //         alert("Ocurrio un error");
            //     }
            // }
        })
    })

    
})