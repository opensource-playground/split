
# Splits


without this package:
```typescript
const str = "opensource.is.awesome"

const arr = str.split('.') // 👉 typeof `arr` is `string[]` 🤔

```

after you install it:

```typescript
import { split } from '@oss-playground/split'
const str = "opensource.is.awesome"

const arr = split<typeof str, '.'>(str, '.') // 👉 typeof `arr` is `["opensource", "is", "awesome"]`  🥳🎉
```
