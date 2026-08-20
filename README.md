# Library

This is a library.

## `SetRequired`

Makes a selected subset of an object's properties required and non-undefined,
while leaving its other properties unchanged.

```ts
import type { SetRequired } from '@mrzli-jslib/generic-types';

type Options = {
  id?: string;
  name: string | undefined;
  description?: string;
};

type IdentifiedOptions = SetRequired<Options, 'id' | 'name'>;
// Equivalent to:
// {
//   id: string;
//   name: string;
//   description?: string;
// }
```
