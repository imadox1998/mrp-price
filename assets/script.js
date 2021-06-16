var nbra = 2;
var nbre = 0;
var nbreg = 0;
var price = parseFloat($( "#price" ).val());
var tax = parseFloat($( "#tax" ).val());
var aprice = price/2;
var eprice = aprice/2;
var total = 0;
function refresh(){
    price = parseFloat($( "#price" ).val());
    tax = parseFloat($( "#tax" ).val());
    aprice = price/2;
    eprice = aprice/2;
    total= (aprice*nbra)+(eprice*nbre)+(tax*nbra);
    $("#d-a").text(+nbra+"x"+aprice);
    $("#d-e").text(+(nbre-nbreg)+"x"+eprice);
    $("#d-t").text(+nbra+"x"+tax);
    $("#tt-a").text(nbra*aprice);
    $("#tt-e").text((nbre-nbreg)*eprice);
    $("#tt-t").text(nbra*tax);
    $("#total").text(total);
     $("#nbra-h1").text(nbra);
     $("#nbre-h1").text(nbre);
     $("#nbreg-h1").text(nbreg);
}
$("#price").change(function(){refresh()});
$("#tax").change(function(){refresh()});

$( document ).ready(function() {
     refresh()
   
    $( "#btn-nbra" ).click(function() {
        nbra += parseInt($( "#nbra" ).val()) ;
        refresh()
       });
       

    $( "#btn-nbra-d" ).click(function() {
        if(nbra > 0){
            nbra -= 1 ;
            refresh()
        }else{
            alert("Nombre d'adultes = 0")
        }
        
    });

    $( "#btn-nbre" ).click(function() {
        nbre += parseInt($( "#nbre" ).val()) ;
        refresh()
       });
       

    $( "#btn-nbre-d" ).click(function() {
        if(nbre > 0){
            nbre -= 1 ;
            refresh()
        }else{
            alert("Nombre d'enfants = 0")
        }
        
    });
    $( "#btn-nbreg" ).click(function() {
        if(nbreg < nbre){
            nbreg += parseInt($( "#nbreg" ).val()) ;
            refresh()
        }else{
            alert("Nombre d'enfants gratuit = Nombre d'enfants")
        }
       });
       

    $( "#btn-nbreg-d" ).click(function() {
        if(nbreg > 0){
            nbreg -= 1 ;
            refresh()
        }else{
            alert("Nombre d'enfants gratuit = Nombre d'enfants")
        }
        
    });

 

    
});
