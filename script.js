let frameworkItems = document.querySelectorAll(".framework"); // found each framework (class) element
frameworkItems.forEach(clickOnFrameworkText); //create funct named clickOnFrameworkText that works for each element with class 'framework'
function clickOnFrameworkText(frameworkItem) { // how clickOnFrameworkText works
    frameworkItem.addEventListener('click', function () {
        let dataIcon = frameworkItem.dataset.icon;
        console.log(dataIcon);
        let getClassFrameworkIcon = document.querySelector('.framework-icon');
        let classFrameworkIconLength = getClassFrameworkIcon.classList.length; //довжина масиву (!) з іконками;
        // console.log(classFrameworkIconLength);
        if (classFrameworkIconLength > 1) {
            let currentIcon = getClassFrameworkIcon.classList.item(1);
            // console.log(currentIcon);
            if (currentIcon != dataIcon) {
                getClassFrameworkIcon.classList.replace(currentIcon, dataIcon);
            }
        } else {
            getClassFrameworkIcon.classList.add(dataIcon);
        }
    })
}


//RIGHT VARIANT
// let frameworkItems = document.querySelectorAll(".framework"); // found each framework (class) element
// frameworkItems.forEach(clickOnFrameworkText); //create funct named clickOnFrameworkText that works for each element with class 'framework'
// function clickOnFrameworkText (frameworkItem){ // how clickOnFrameworkText works
//   frameworkItem.addEventListener('click', function(){
//     document.querySelector('.framework-icon').classList.add(frameworkItem.dataset.icon);
//     // console.log(frameworkItem.dataset.icon);
//   })
// }


//WORKS             
// let frameworkItems = document.querySelectorAll(".framework"); // found each framework (class) element
// frameworkItems.forEach(clickOnFrameworkText); //create funct named clickOnFrameworkText that works for each element with class 'framework'
// function clickOnFrameworkText (frameworkItem){ // how clickOnFrameworkText works
//   frameworkItem.addEventListener('click', function(){
//     // document.querySelector('.framework-icon').classList.add(frameworkItem.dataset.icon);
//       let arrOfDataIcons = frameworkItem.dataset.icon;
//       let getClassFrameworkIcon = document.querySelectorAll('.framework-icon');
//       getClassFrameworkIcon[0].classList.add(arrOfDataIcons);  //[0]
//     console.log(getClassFrameworkIcon);
//   })
// }


//ALSO RIGHT VARIANT
// let frameworkItems = document.querySelectorAll(".framework"); // found each framework (class) element
// frameworkItems.forEach(clickOnFrameworkText); //create funct named clickOnFrameworkText that works for each element with class 'framework'. функція у фор іч працює з одним елементом масива по черзі
// function clickOnFrameworkText (frameworkItem){ // how clickOnFrameworkText works
//   frameworkItem.addEventListener('click', function(){
//     // document.querySelector('.framework-icon').classList.add(frameworkItem.dataset.icon);
//       let arrOfDataIcons = frameworkItem.dataset.icon;
//       let getClassFrameworkIcon = document.getElementsByClassName('framework-icon');
//       getClassFrameworkIcon[0].classList.add(arrOfDataIcons); 
    
//       getClassFrameworkIcon = getClassFrameworkIcon.classList.length;
//       // console.log(getClassFrameworkIcon);
//   })
// }