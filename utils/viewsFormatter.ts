const formatViews = (number: number, breakPoint: number, unit: string) => {
  return `${(Math.floor((number / breakPoint) * 10) / 10).toFixed(1)}${unit}`;
};

const viewsFormatter = (number: number) => {
  if (number < 1_000) return number;

  if (number >= 1_000 && number < 10_000) {
    return formatViews(number, 1_000, '천');
  }

  if (number >= 10_000 && number < 100_000_000) {
    return formatViews(number, 10_000, '만');
  }

  if (number >= 100_000_000) {
    return formatViews(number, 100_000_000, '억');
  }
};

export default viewsFormatter;
