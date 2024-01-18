export const priceRangeResult = (products, min, max) => {
  const result = products.filter((product) => {
    const productPrice = parseFloat(product.price.slice(1), 10);
    return productPrice >= min && productPrice <= max;
  }).length;
  return result;
};

export const inStockResult = (state, products) => {
  return state.inStock
    ? products.filter((product) => product.inStock > 0).length
    : null;
};

export const itemsResult = (state, products, key, instance) => {
  return state[key].length > 0
    ? products.filter((product) => state[key].includes(product[instance]))
        .length
    : undefined;
};

export const ratingResult = (state) => {
  return state.rating;
};

export const instanceList = (products, instance) => {
  return Array.from(new Set(products.map((product) => product[instance])));
};

export const renderCategoryFilter = (category, onCategoryChange, isChecked) => (
  <label
    key={category}
    htmlFor={category}
    className={`flex justify-start mx-4 mt-4  cursor-pointer transition-color text-black n ${
      isChecked(category) ? "font-bold" : "font-thin"
    }`}
  >
    <input
      type="checkbox"
      id={category}
      name={category}
      onChange={() => onCategoryChange(category)}
      checked={isChecked(category)}
      className="hidden"
    />
    {category}
  </label>
);

export const renderColorFilter = (
  color,
  onColorChange,
  isChecked,
  getHexValue,
) => (
  <label
    key={color}
    htmlFor={color}
    style={{ backgroundColor: getHexValue(color) }}
    className={`relative h-10 w-10 rounded-full flex justify-center items-center border cursor-pointer transition-all duration-75  ${
      isChecked(color) ? "border-2 border-black " : " "
    }
    }`}
  >
    <input
      type="checkbox"
      id={color}
      name={color}
      onChange={() => onColorChange(color)}
      checked={isChecked(color)}
      className="hidden"
    />
    <span
      className="absolute whitespace-nowrap  font-bold -bottom-4 translate-y-1/2 cursor-pointer"
      style={{ fontSize: "12px" }}
    >
      {color}
    </span>
  </label>
);

export const getHexValue = (color) => {
  // if color matches key it returns the hexadecimal value
  const colorHexidecimal = {
    "classic black": "#000000",
    "electric blue": "#7DF9FF",
    "forest green": "#228B22",
    "slate grey": "#708090",
    "sunrise pink": "#FFCBA4",
    "crisp white": "#FFFFFF",
    "bold black": "#000000",
    "vibrant violet": "#9400D3",
    "emerald green": "#50C878",
    "sunset orange": "#FF7F50",
    "aqua blue": "#00FFFF",
    "lime green": "#32CD32",
    "soft pink": "#FFB6C1",
    "jet black": "#343434",
    "metallic silver": "#C0C0C0",
    "sky blue": "#87CEEB",
    "granite grey": "#676767",
    "sandy beige": "#F5F5DC",
    "sunrise orange": "#FFDAB9",
    "icy white": "#E0FFFF",
    "crimson red": "#DC143C",
    "midnight black": "#2C3E50",
    "neon yellow": "#FFFF00",
    "flame red": "#FF4500",
    "snow white": "#FFFAFA",
    "royal blue": "#4169E1",
    "vivid purple": "#800080",
    "coral pink": "#F88379",
    "granite gray": "#615D6C",
    "deep navy": "#000080",
    "bright orange": "#FFA500",
    "powder blue": "#B0E0E6",
    "graphite gray": "#474A51",
    "laser lime": "#BFFF00",
    "blazing red": "#FF2400",
    "teal blue": "#008080",
    "silver shine": "#BFC1C2",
    "moss green": "#8A9A5B",
  };

  const parsedHexidecimal = Object.fromEntries(
    Object.entries(colorHexidecimal).map(([key, value]) => [
      key.replace(/\s+/g, "").toLowerCase(),
      value,
    ]),
  );

  return parsedHexidecimal[color.replace(/\s+/g, "").toLowerCase()] || null;
  // it returns null if no match
};

export const min = 0;
export const max = 500;
