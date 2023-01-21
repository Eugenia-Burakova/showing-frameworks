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