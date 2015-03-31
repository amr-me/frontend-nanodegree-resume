//$("#main").append("Amr");
var formattedName = HTMLheaderName.replace("%data%", "Amr M. Elsayed");
var formattedRole = HTMLheaderRole.replace("%data%", "Front-End Eveloper");
$("#header").prepend(formattedName);
$("#header").append(formattedRole);
