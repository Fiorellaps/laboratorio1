import "./style.css";
import * as DataBusiness from "./data-business";
import * as Util from "./util";

DataBusiness.getClients().then(datos => {
    for (let character of datos) {
        const node = Util.createCharacterRow(character);
        node.onclick = function() {
            console.log(character.char_id)
            DataBusiness.getClientsById(character.char_id).then(dato => Util.showCharacter(dato[0]));
        };
        document.getElementById("root").append(node);
        for (const season of character.appearance) {
            var span = document.createElement('span');
            span.innerHTML = "Season: <strong>" + season + " </strong>  --> nº deaths: " + DataBusiness.getSeasonDeaths(season) + " ";
            console.log(span);
            document.getElementById("root").appendChild(span);
        }
    }
});