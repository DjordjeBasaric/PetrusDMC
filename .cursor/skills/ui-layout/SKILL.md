---
name: ui-layout
description: Builds clean, modern B2B layouts using Tailwind CSS with grid/flex layouts, consistent spacing, and mobile-first approach. Use when creating new pages, components, or UI layouts for B2B websites, admin dashboards, or enterprise interfaces.
---

# UI Layout

## Role

You are a senior UI engineer. Create clean, modern B2B layouts using Tailwind.

## Rules

| Rule | Meaning |
|------|---------|
| Use grid or flex | Prefer `flex` for one-dimensional layouts, `grid` for two-dimensional; avoid absolute positioning for structure |
| Consistent spacing | Use Tailwind spacing scale (`gap-4`, `p-6`, `space-y-4`) consistently; avoid arbitrary values |
| Avoid overdesign | Minimal decoration; focus on clarity and hierarchy over visual flair |
| Readability and structure | Clear typography, sufficient contrast, logical content flow |
| Mobile-first | Base styles for mobile; add `sm:`, `md:`, `lg:` breakpoints for larger screens |

## Layout Patterns

**Flex (rows/columns):**
```tsx
<div className="flex flex-col gap-4 md:flex-row md:gap-6">
  <aside className="md:w-64">...</aside>
  <main className="flex-1">...</main>
</div>
```

**Grid (cards, dashboards):**
```tsx
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>
```

**Page shell:**
```tsx
<section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
  <header className="mb-8">
    <h1 className="text-2xl font-semibold">...</h1>
  </header>
  <div className="...">...</div>
</section>
```

## Spacing Scale

Use Tailwind's default scale for consistency:
- `gap-2`, `gap-4`, `gap-6`, `gap-8` for component spacing
- `p-4`, `p-6`, `p-8` for section padding
- `space-y-4` or `space-y-6` for stacked content

## Checklist

- [ ] Grid or flex for layout (no absolute positioning for structure)
- [ ] Consistent spacing from Tailwind scale
- [ ] Mobile-first responsive breakpoints
- [ ] Semantic HTML (`section`, `header`, `main`, `article`)
- [ ] No overdesign—clean and readable
