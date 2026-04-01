#  React Calculator - CI/CD Project

[![CI/CD Pipeline](https://github.com/ThePoroh/react-calculator/actions/workflows/ci-cd.yml/badge.svg?branch=main)](https://github.com/ThePoroh/react-calculator/actions/workflows/ci-cd.yml)
![Vercel Deploy](https://img.shields.io/badge/deploy-vercel-black?logo=vercel)

Це навчальний проєкт калькулятора на **React + Vite**.

---

##  Опис CI/CD пайплайну (Quality Gate)
Проєкт налаштований на автоматичну перевірку та розгортання:
1. **Linting**: Перевірка стилю коду за допомогою ESLint.
2. **Unit Testing**: Автоматичний запуск 7 тестів логіки калькулятора через **Vitest**.
3. **Build**: Збірка продуктової версії додатка.
4. **Artifacts**: Збереження папки `dist` у GitHub Actions.
5. **Continuous Deployment**: Автоматичне оновлення сайту на **Vercel** після успішного проходження всіх тестів у гілці `main`.

---

##  Захист гілки (Branch Protection)
Для гілки `main` налаштовано **Branch Protection Rule**:
- Заборонено прямий пуш без проходження статус-чеків.
- Обов'язкове успішне виконання завдання **Build and Test** для злиття коду.

---

##  Посилання
- **Live Demo:** [https://react-calculator-navy-alpha.vercel.app/]
- **GitHub Actions:** [Переглянути статус пайплайнів](https://github.com/ThePoroh/react-calculator/actions)

---

## 🛠 Технологічний стек
- **Frontend:** React 18, Vite
- **Тестування:** Vitest, jsdom
- **Автоматизація:** GitHub Actions
- **Хостинг:** Vercel