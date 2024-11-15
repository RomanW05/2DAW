
const all_searches = new Array();
const alta_carta = "https://static-00.iconduck.com/assets.00/high-priority-icon-1024x1024-ryazhwgn.png";
const media_carta = "https://static-00.iconduck.com/assets.00/medium-priority-icon-512x512-kpm2vacr.png";
const baja_carta = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4tANuBJoViapolNoVPmOHlaaFityDbdvSyyhUVpIL_MvB2K3IS6DNmUXkAtzhOPbbHRc&usqp=CAU";


function show_all(){
    document.getElementById('searched_params').innerHTML = '';
    document.getElementById('display_cards').innerHTML = '';
    all_searches.forEach((elem, index) => {
        // Search
        var parsed_search = document.createElement('div');
        parsed_search.innerHTML = elem.get('nombre');
        document.getElementById('searched_params').appendChild(parsed_search);

        //  Cards
        createElementFromHTML(elem.get('nombre'), elem.get('description'), elem.get('prioridad'), index);
    });
}


function get_form(){
    new_search = new FormData(document.getElementById("form"));

    all_searches.push(new_search);
    show_all()
};


function filter(){
    var filter_type = document.getElementById("prioridad_search").value;
    console.log(filter_type);
    document.getElementById('searched_params').innerHTML = '';
    all_searches.forEach(elem => {
        if(filter_type == 'none'){
            var parsed_search = document.createElement('div');
            parsed_search.innerHTML = elem.get('nombre');
            document.getElementById('searched_params').appendChild(parsed_search);
        }
        else if(elem.get('prioridad') == filter_type){
            var parsed_search = document.createElement('div');
            parsed_search.innerHTML = elem.get('nombre');
            document.getElementById('searched_params').appendChild(parsed_search);
        }
    });

}


function delete_card(id){
    console.log(id)
    console.log(all_searches.length, 'old lenght');
    all_searches.splice(id, 1);
    console.log(all_searches.length, 'new lenght');
    show_all()
}


function createElementFromHTML(nombre, description, prioridad, index) {
    var image = '';
    let temp = document.getElementsByTagName("template")[0];
    let clon = temp.content.cloneNode(true);
    clon.getElementById('nombre').innerHTML = nombre;
    clon.getElementById('description').innerHTML = description;
    clon.getElementById('prioridad').innerHTML = prioridad;
    clon.getElementById('card_function').setAttribute( "onClick", "javascript: delete_card(" + index + ");" )

    if (prioridad=='alta'){
        image = alta_carta;
    }
    else if(prioridad=='media'){
        image = media_carta;
    }
    else{
        image = baja_carta;
    }
    clon.getElementById('imagen').src = image;

    document.getElementById('display_cards').appendChild(clon);

  }

// function seed(){
//     const formData = new FormData();
//     formData.append("nombre", "tarea_baja");
//     formData.append("description", "description_baja");
//     formData.append("fecha", new Date("2022-03-25"));
//     formData.append("prioritatia", "checked");
//     formData.append("prioridad", "baja");
//     all_searches.push(formData);

//     const formData1 = new FormData();
//     formData1.append("nombre", "tarea_media1");
//     formData1.append("description", "description_media1");
//     formData1.append("fecha", new Date("2022-03-25"));
//     formData1.append("prioritatia", "checked");
//     formData1.append("prioridad", "media");
//     all_searches.push(formData1);

//     const formData2 = new FormData();
//     formData2.append("nombre", "tarea_media2");
//     formData2.append("description", "description_media2");
//     formData2.append("fecha", new Date("2022-03-25"));
//     formData2.append("prioritatia", "checked");
//     formData2.append("prioridad", "media");
//     all_searches.push(formData2);

//     const formData3 = new FormData();
//     formData3.append("nombre", "tarea_alta1");
//     formData3.append("description", "description_alta1");
//     formData3.append("fecha", new Date("2022-03-25"));
//     formData3.append("prioritatia", "checked");
//     formData3.append("prioridad", "alta");
//     all_searches.push(formData3);

//     const formData4 = new FormData();
//     formData4.append("nombre", "tarea_alta2");
//     formData4.append("description", "description_alta2");
//     formData4.append("fecha", new Date("2022-03-25"));
//     formData4.append("prioritatia", "checked");
//     formData4.append("prioridad", "alta");
//     all_searches.push(formData4);

// }

// onload = seed();