import './styles/reset.scss'
import './styles/base.scss'
import './styles/input.scss'
import './styles/header.scss'
import './styles/output.scss'
import './styles/footer.scss'

document.getElementById('submit').addEventListener('click', performAction);
//when generate is clicked, execute performAction function below

function performAction(e){
    let destinationID = document.getElementById('destination').value;
    let inputType = document.querySelector('input[name="search-type"]:checked').value;
    let departingDate = document.getElementById('depart').value;
    console.log(destinationID);
    console.log(inputType);
    console.log(departingDate);
}
