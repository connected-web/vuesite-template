# Components

This project comes with a set of custom components included to help with rapid prototyping.

The intent is for developers to create and integrate components to suit the needs of the documentation tool.

To hide this section from your website; just delete this file.

To remove the other component preview pages from the search; delete their corresponding `markdown.md` files.

## Card component

Wrap up some content in a box with a title.

```html
<formatting-Card title="Card Title">
  <p><Icon icon="warehouse" /> Card contents</p>
</formatting-Card>
```

<formatting-Card title="Card Title">
  <p><Icon icon="warehouse" /> Card contents</p>
</formatting-Card>

## Collapsed component

Hide content away in a collapsed component.
```
<formatting-Collapsed title="Hidden section">
  <p><Icon icon="ambulance" /> Hidden card contents</p>
</formatting-Collapsed>
```

<formatting-Collapsed title="Section title">
  <p><Icon icon="ambulance" /> Hidden card contents</p>
</formatting-Collapsed>

## Icon component

Need an icon? Search here, then use `<Icon icon="name">` where you want the icon to show up. <Icon icon="laptop-code" />

<icons-Browser />

## TODO component

An example of basic formatting using `<formatting-Todo>Do the thing</formatting-Todo>`

<formatting-Todo>Add the rest of the component previews to this page.</formatting-Todo>
<formatting-Todo>Remember to take the rubbish out <Icon icon="house-user" /><Icon icon="trash" />.</formatting-Todo>
