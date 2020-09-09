function getPath(el) {
    let searchElement = el;
    let sel = '';
    do {
        let parSelector = '';
        let id = searchElement.id;
        let classes = searchElement.classList;
        let tag = searchElement.tagName;
        if (id){
            parSelector = `#${id}`;
        }
        else if (classes.length) {
            parSelector = `.${classes[0]}`;
        }
        else {
            parSelector = tag;
        }
        if (document.querySelectorAll( `${parSelector} ${sel}`).length > 1) {
            let fam = document.querySelectorAll(parSelector);
            if (fam.length > 1){
                let parent = searchElement.parentElement;                
                let  = 0;
                let count = 0;
                for (let member of fam) {
                    if (member.parentElement === searchElement.parentElement) {
                        count++;
                        if (member === searchElement) position = count;
                    }
                }
                if (count > 1) parSelector += `:nth-child(${position}`;
            }
        }
        sel = parSelector.toLowerCase() + (sel !== '' ? ' > ' : '') + sel;
        if (document.querySelectorAll(sel).length === 1) return sel;
        searchElement = searchElement.parentElement;
    } while(searchElement !== null && searchElement.tagName !== "HTML");
    return sel;
}