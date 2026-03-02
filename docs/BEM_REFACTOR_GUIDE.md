# BEM style refactor guide

This project uses **BEM** (Block Element Modifier) for CSS class names. Use this guide to refactor remaining files.

## Convention

- **Block:** One per component/page, kebab-case (e.g. `cases`, `login`, `action-button`).
- **Element:** `block__element-name` (e.g. `cases__title`, `login__card`).
- **Modifier:** `block__element--modifier` or `block--modifier` (e.g. `cases__row--charts`).
- Use **kebab-case** for all class names.
- Prefer **semantic names** (e.g. `login__submit` instead of `submitBtn`).

## Already refactored

| File | Block | Notes |
|------|--------|------|
| `pages/Cases/Cases.tsx` + `.css` | `cases` | cases__title, cases__header, cases__content, cases__chart-wrap |
| `pages/Cases/component/Comparison/` | `comparison` | Full BEM (see Comparison.css) |
| `pages/Cases/component/Service/` | `service` | service__main-card, service__stats, service__table-section |
| `components/ActionButton/` | `action-button` | action-button__label, action-button__content, action-button__dropdown |
| `components/CardLayout/` | `card-layout` | card-layout__header (contentStyle still passed from parent) |
| `pages/Login/` | `login` | login__card, login__field, login__submit, login__terms |
| `pages/Home/` | `home` | home__header, home__greeting, home__card, home__dropdown |
| `pages/Cases/component/BubbleChart/` | `bubble-chart` | Already BEM-like |

## Remaining (suggested block names)

- **Database** → `database` (database__header, database__table-section, …)
- **Government** → `government`
- **Tasks** → `tasks` (tasks__content, tasksContentItem → tasks__content-item)
- **CheckListPage** → `check-lists` (checkListsRoot → check-lists, checkListsTitle → check-lists__title)
- **Investigation** → `investigation`
- **NRDS** → `nrds`
- **Networks** → `networks`
- **Reports** → `reports`
- **WebAnalysisItems** → `web-analysis`
- **ModalLayout** → `modal-layout`
- **CustomizeTable** → `customize-table`
- **FilterDropdown, SearchInput, etc.** → `filter-dropdown`, `search-input` (match component name in kebab-case)

## Steps per file

1. In the component TSX: replace every `className="..."` with the new BEM class(es).
2. In the CSS: replace old selectors with the new class names; flatten long chains where possible (e.g. `.block__element` instead of `.block .blockChild`).
3. Add a comment at the top of the CSS: `/* Block: block-name (BEM) */`.
4. Use `"Helvetica", sans-serif` (or the correct font) consistently in font-family.

## CardLayout usage

CardLayout renders: `className={card-layout ${className}}` and `className={card-layout__header ${headerStyle}}`. So parent-specific header/content styles are still passed as `headerStyle` and `contentStyle` (e.g. `comparison__tag-over-time-header`, `service__main-card-body`). Keep passing those; only the base layout uses `card-layout` / `card-layout__header`.

## ActionButton dropdown

ActionButton dropdown has class `action-button__dropdown ${dropRootStyle}`. Pages that style the dropdown (e.g. Home) pass `dropRootStyle="home__dropdown"` and use `.home__dropdown` in their CSS.
