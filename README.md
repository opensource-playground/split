
# Splits


without this package:
```typescript
const str = "opensource.is.awesome"

const arr = str.split('.') // 👉 typeof `arr` is `string[]` 🤔

```

after you install it:

```typescript
const str = "opensource.is.awesome"

const arr = str.splits<typeof str, '.'>('.') // 👉 typeof `arr` is `["opensource", "is", "awesome"]`  🥳🎉

```
