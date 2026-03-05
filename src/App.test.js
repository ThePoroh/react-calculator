import { describe, it, expect } from 'vitest';
// 1. Імпортуємо функцію з оригінального файлу App.jsx
import { calculate } from './App'; 

describe('Calculator Business Logic (Unit Tests)', () => {
  // 1. Тест додавання
  it('має коректно додавати цілі числа (2 + 3 = 5)', () => {
    expect(calculate(2, 3, 'add')).toBe(5);
  });

  // 2. Тест віднімання
  it('має коректно віднімати числа (10 - 4 = 6)', () => {
    expect(calculate(10, 4, 'subtract')).toBe(6);
  });

  // 3. Тест множення
  it('має коректно множити числа (5 * 5 = 25)', () => {
    expect(calculate(5, 5, 'multiply')).toBe(25);
  });

  // 4. Тест ділення
  it('має коректно ділити числа (10 / 2 = 5)', () => {
    expect(calculate(10, 2, 'divide')).toBe(5);
  });

  // 5. Тест ділення на нуль (Edge case)
  it('має повертати Error при діленні на нуль', () => {
    expect(calculate(10, 0, 'divide')).toBe('Error');
  });

  // 6. Тест роботи з від'ємними числами
  it('має коректно працювати з від’ємними значеннями (-5 + 10 = 5)', () => {
    expect(calculate(-5, 10, 'add')).toBe(5);
  });

  // 7. Тест обробки рядків (валідація типів)
  it('має конвертувати рядки в числа перед обчисленням ("10" + "20" = 30)', () => {
    expect(calculate("10", "20", "add")).toBe(30);
  });
});