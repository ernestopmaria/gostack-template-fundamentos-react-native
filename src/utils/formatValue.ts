const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'AOA' ,
  }).format(value);

export default formatValue;
