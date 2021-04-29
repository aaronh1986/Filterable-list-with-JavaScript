// Get input element
let filterInput = document.getElementById('filterInput');

// Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    // Get value of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    console.log(filterValue);

    // Get names UL
    let ul = document.getElementById('names');
    // Get items, rather than headers...Get lis from ul
    // Using query selector all, we can get elements by classes, tag name etc. as below...
    //We just wan lis with collection-item as a class, will put them into an array
    let li = ul.querySelectorAll('li.collection-item');

    //Loop through collection-item lis
    for(let i = 0; i < li.length; i++) {
        //0 gets the current link
        let a = li[i].getElementsByTagName('a')[0];
        // if matched
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
        }else {
            li[i].style.display = 'none';
        }
    }
}