function getElementWidth(content, padding, border) {
  // Видаляємо "px" і конвертуємо значення в числа

  const numericContent = parseFloat(content.replace('px', ''));
  const numericPadding = parseFloat(padding.replace('px', ''));
  const numericBorder = parseFloat(border.replace('px', ''));
  // Обчислюємо загальну ширину
  const totalWidth = numericContent + 2 * numericPadding + 2 * numericBorder;

  return totalWidth;
}

// Перевіряємо функцію
console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
