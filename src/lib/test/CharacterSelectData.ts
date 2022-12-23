import description from './description.txt?raw';
import playerData from './PlayerData';
const data : CharacterSelectData = {
    campaign_code: "abc",
    name: "Robot Lobotomy",
    description,
    characters: [playerData]
}

export default data;