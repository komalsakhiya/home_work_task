// const chipSetEl = new mdc.chipSetEl.MDCChipSet.attachTo(document.querySelector('.mdc-chip-set'));
// const chipSet = new MDCChipSet(chipSetEl);
// const chipSet1 = new MDCChipSet(chipSetEl);
// const chipSet2 = new MDCChipSet(chipSetEl);
// const chipSet3 = new MDCChipSet(chipSetEl);
// const chipSet4= new MDCChipSet(chipSetEl);

const menu = new mdc.menu.MDCMenu.attachTo(document.querySelector('.mdc-menu'));
// menu.open = true;
$('#menubtn').on('click',function(evt){
	menu.open = true;
	// menu.open();
	evt.preventDefault();
	console.log("accepted");

});


const snackbar1 = new mdc.snackbar.MDCSnackbar.attachTo(document.querySelector('.mdc-snackbar--stacked'));
$('#snackbar1').on('click',function(evt){
	snackbar1.open();
	evt.preventDefault();
	console.log("accepted");

});
const snackbar2 = new mdc.snackbar.MDCSnackbar.attachTo(document.querySelector('.mdc-snackbar--leading'));
$('#snackbar2').on('click',function(evt){
	snackbar2.open();
	evt.preventDefault();
	console.log("accepted");

});
const snackbar3 = new mdc.snackbar.MDCSnackbar.attachTo(document.querySelector('.leading'));
$('#snackbar3').on('click',function(evt){
	snackbar3.open();
	evt.preventDefault();
	console.log("accepted");

});
