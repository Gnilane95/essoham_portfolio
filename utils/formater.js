function formatDate(inputDate) {
  // Convertir la date en objet Date
  const dateArray = inputDate.split("-");
  const formattedDate = new Date(
    `-${dateArray[1]}-${dateArray[0]}`
  );

  // Options de formatage pour la date
  const options = { year: "numeric", month: "long", day: "numeric" };

  // Formater la date selon les options spécifiées
  return formattedDate.toLocaleDateString("en-US", options);
}

function formatMonthYear(inputDate) {
  const dateArray = inputDate.split("-");
  const formattedDate = new Date(`${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`);

  const options = { year: "numeric", month: "long" };

  return formattedDate.toLocaleDateString("en-US", options);
}

module.exports = {
  formatDate,
  formatMonthYear,
};
