function testAge(){
  var age = document.getElementById("age").value;
  if (/^[0-9]+$/.test(age) == true){
    if (age < 18){
      alert('Vous etes mineur!');
    }
    else if(age < 120){
      alert('Vous etes majeur!');
    }
    else{
      alert('Vous etes mort!')
    }
  }
}
