$().ready(() => {
	console.log('habibi')
  $("#inputDepartement").change(() => {
    var selectedDepartment = $("#inputDepartement").children("option:selected").val();
    if (selectedDepartment) {
      $.getJSON(`/api/departement/${selectedDepartment}`, function (
        data,
        textStatus,
        jqXHR
      ) {
        clearSelect('#inputFiliere', 'Choix du filiere');

        data.filieres.forEach(filiere => {
          appendToSelect('#inputFiliere', filiere.idFiliere, filiere.nom);

        });
        $("#inputFiliere").change(() => {
          var selectedFiliere = $("#inputFiliere").children("option:selected").val();
		
          let filiere = data.filieres.filter((filiere) => {
            return filiere.idFiliere == selectedFiliere
          })[0]
          clearSelect('#inputPromo', 'Choix du promo');
          console.log(filiere)
          filiere.promos.forEach((promo) => {
          console.log(promo);
            appendToSelect('#inputPromo', promo.id, generatePromo(promo.dat_ent, promo.dat_srt))
          })


        })
      });
    } else {
      clearSelect('#inputFiliere', 'Choix du filiere');
    }
  });
});

function appendToSelect(idSelect, idOption, textOption) {
  $(idSelect).append($('<option>', {
    value: idOption,
    text: textOption
  }));
}

function clearSelect(idSelect, textDefault) {
  $(idSelect).empty().append('<option value="0">' + textDefault + '</option>')
}

function generatePromo(firstDate, lastDate) {
  return firstDate.substring(0, 4) + '-' + lastDate.substring(0, 4)
}