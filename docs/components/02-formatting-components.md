# Formatting components

This page demonstrates formatting components that can be used to present content in a consistent way.

## Card component

Wrap up some content in a box with a title.

<formatting-Card title="Card Title">
  <p><Icon icon="warehouse" /> Card contents</p>
</formatting-Card>

```html
<formatting-Card title="Card Title">
  <p><Icon icon="warehouse" /> Card contents</p>
</formatting-Card>
```

## Collapsed component

Hide content away in a collapsed component.

<formatting-Collapsed title="Section title">
  <p><Icon icon="ambulance" /> Hidden card contents</p>
</formatting-Collapsed>

```html
<formatting-Collapsed title="Hidden section">
  <p><Icon icon="ambulance" /> Hidden card contents</p>
</formatting-Collapsed>
```

## Error Formatter

Text formatting and advice for errors that might occur while using interactive components.

<formatting-ErrorFormatter :error="{ message: 'Network Error' }" />

```html
<formatting-ErrorFormatter :error="{ message: 'Network Error' }" />
```

## Expiry

Format a date as a colour coded time relative to the current browser time.

Similar in function to the `Relative Date` component.

<formatting-Expiry :date="new Date('2021-04-01')" />
<formatting-Expiry :date="new Date('2022-04-01')" />
<formatting-Expiry :date="new Date('2023-04-01')" />
<formatting-Expiry :date="new Date('2024-04-01')" />
<formatting-Expiry :date="new Date('2025-04-01')" />

```html
<formatting-Expiry :date="new Date('2021-04-01')" />
<formatting-Expiry :date="new Date('2022-04-01')" />
<formatting-Expiry :date="new Date('2023-04-01')" />
<formatting-Expiry :date="new Date('2024-04-01')" />
<formatting-Expiry :date="new Date('2025-04-01')" />
```

## Messages

Format a list of items as a series of paragraphs.

<formatting-Messages :messages="['Line 1', 'Line 2', 'Line 3']" />

```html
<formatting-Messages :messages="['Line 1', 'Line 2', 'Line 3']" />
```

## Paginated Items

The paginated items formatter reduces the number of items to the page size, calculates the number of pages, and provides a filter to search for a specific item. It can be used to create a filterable, multi-page view of large datasets using a custom renderer.

<formatting-PaginatedItems :pageSize="5" itemTypePlural="things"
    :items="['Apple', 'Orange', 'Banana', 'Grape', 'Pear', 'Mango', 'Tomato', 'Carrot', 'Peas']">
  <template v-slot="{ paginatedItems }">
    <ul>
      <li v-for="item in paginatedItems" :key="item">{{ item }}</li>
    </ul>
  </template>
</formatting-PaginatedItems>

## Relative Date

Format a date as a colour coded time relative to the the current browser time.

Similar in function to the `Expiry` component.

<formatting-Card>
  <formatting-RelativeDate :date="new Date('2021-04-01')" />
  <formatting-RelativeDate :date="new Date('2022-04-01')" />
  <formatting-RelativeDate :date="new Date('2023-04-01')" />
  <formatting-RelativeDate :date="new Date('2024-04-01')" />
  <formatting-RelativeDate :date="new Date('2025-04-01')" />
</formatting-Card>

```html
<formatting-Card>
  <formatting-RelativeDate :date="new Date('2021-04-01')" />
  <formatting-RelativeDate :date="new Date('2022-04-01')" />
  <formatting-RelativeDate :date="new Date('2023-04-01')" />
  <formatting-RelativeDate :date="new Date('2024-04-01')" />
  <formatting-RelativeDate :date="new Date('2025-04-01')" />
</formatting-Card>
```

## Response Formatter

Format a data object as prettified JSON.

<formatting-ResponseFormatter :response="{ some: 'data' }" />

```html
<formatting-ResponseFormatter :response="{ some: 'data' }" />
```

## Icon component

Display an SVG icon matching the inline font-size.

Search using the [Icon Browser](./01-icon-browser.md); then use `<Icon icon="name">` where you want the icon to show up. 

<h1><Icon icon="laptop-code" /> Icon in Heading</h1>
<p><Icon icon="laptop-code" /> Icon in Paragraph</p>
<ul>
  <li><Icon icon="laptop-code" /> Icon in List item</li>
</ul>

```html
<h1><Icon icon="laptop-code" /> Icon in Heading</h1>
<p><Icon icon="laptop-code" /> Icon in Paragraph</p>
<ul>
  <li><Icon icon="laptop-code" /> Icon in List item</li>
</ul>
```

## Tabulation

Take a list of of objects and display them as an interactive table.

Can be customised with partial columns, and custom render logic on a per-cell basis.

<formatting-Tabulation :items="[
    { name: 'Apple', type: 'Fruit', qty: 30 },
    { name: 'Banana', type: 'Fruit', qty: 12 },
    { name: 'Potato', type: 'Vetagable', qty: 67 },
    { name: 'Carrot', type: 'Vegetable', qty: 134 }]" />

## TODO component

Mark up things still to be done in a standard box.

<formatting-Todo>Item 1</formatting-Todo>
<formatting-Todo>Item 2</formatting-Todo>

```html
<formatting-Todo>Item 1</formatting-Todo>
<formatting-Todo>Item 2</formatting-Todo>
```
