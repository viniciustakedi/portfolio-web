export const formatDate = (date: Date): string => {
  const dateObject = new Date(date);
  const months = ["Jan.", "Fev.", "Mar.", "Abr.", "Mai", "Jun.", "Jul.", "Ago.", "Set.", "Out.", "Nov.", "Dez."];

  const day = dateObject.getUTCDate();
  const month = months[dateObject.getUTCMonth()];
  const year = dateObject.getUTCFullYear();

  const dataFormatada = `${day} ${month} ${year}`;

  return dataFormatada;
}

export const formatPostDescription = (description: string): string => {
  const descriptionArrayLength = description.length;

  if (descriptionArrayLength > 120) {
    return description.slice(0, 120) + '...';
  }

  return description;
}