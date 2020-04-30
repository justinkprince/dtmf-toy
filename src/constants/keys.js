import frequencies from "./frequencies";

const generateKeys = () => {
  const labels = [
    ["1", "2", "3", "A"],
    ["4", "5", "6", "B"],
    ["7", "8", "9", "C"],
    ["*", "0", "#", "D"]
  ];

  let keys = [];

  for (let row = 0; row < labels.length; row++) {
    for (let column = 0; column < labels[row].length; column++) {
      const label = labels[row][column];
      keys.push({
        id: `key-${row}-${column}`,
        label,
        frequencies: {
          high: frequencies.high[column],
          low: frequencies.low[row]
        }
      });
    }
  }

  return keys;
};

const keys = generateKeys();

export default keys;
