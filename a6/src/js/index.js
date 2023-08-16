function toggleField(id1, id2) {
    const checkedField = document.getElementById(id);
    const revealedField = document.getElementById(id2);
    
    if (checkedField.checked) {
        revealedField.style.display = "block";
    } else {
        revealedField.style.display = "none";
    }
}