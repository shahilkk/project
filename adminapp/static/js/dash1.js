$('#graph').click(function(){
    $('#viewgraph').show()
    $('#delreq').hide()
    $('#workpen').hide()
})

$('#delectrequest').click(function(){
    $('#delreq').show()
    $('#workpen').hide()
    $('#viewgraph').hide()

    
})
$('#viewrequest').click(function(){
    $('#workpen').show()
    $('#delreq').hide()
    $('#viewgraph').hide()

    
})



function del(){
document.getElementById('delectrequest').click()
var del = document.getElementById('delectrequest');
var pen = document.getElementById('viewrequest');
var gra = document.getElementById('graph');
  del.classList.add('active');
  del.classList.remove('font-regular');
  pen.classList.remove('active');
  pen.classList.add('font-regular'); 
  gra.classList.add('font-regular');
  gra.classList.remove('active');
     
}
function view(){

document.getElementById('viewrequest').click()
var del = document.getElementById('delectrequest');
var pen = document.getElementById('viewrequest');
var gra = document.getElementById('graph');
pen.classList.add('active');
pen.classList.remove('font-regular');
del.classList.remove('active');
del.classList.add('font-regular');
gra.classList.add('font-regular');
gra.classList.remove('active');

}
function graph(){
document.getElementById('graph').click()
var gra = document.getElementById('graph');
var del = document.getElementById('delectrequest');
var pen = document.getElementById('viewrequest');
pen.classList.remove('active');
pen.classList.add('font-regular');
del.classList.remove('active');
del.classList.add('font-regular');
gra.classList.remove('font-regular');
gra.classList.add('active');
}