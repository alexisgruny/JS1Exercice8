function testAge(){
  var age = document.getElementById("age").value;
  // test regex
  if (/^[0-9]+$/.test(age) == true){
    // condition si mineur
    if (age < 18){
      alert('Vous etes mineur!');
    }
    // condition si majeur
    else if(age < 120){
      alert('Vous etes majeur!');
    }
    // si autre
    else{
      alert('Vous etes mort!')
    }
    // regex false
    else{
      alert('veuillez entrer un nombre')
    }
  }
}
