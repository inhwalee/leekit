## @leekit/use-media-query

React Hook for responsive design

## Installation

```bash
npm i @leekit/use-mediq-query
```

## Usage

```jsx
import React from "react";
import useFadeIn from "@leekit/use-media-query";

function App() {
  const media = useMediaQuery({ minWidth: "761" });

  return (
    <div className="App">
      <div className={media}>
        {media === "pc" ? "PC screen" : "Mobile screen"}
      </div>
    </div>
  );
}
```

### Arguments

| Argument |     return  | Required |    Default Argument    |
| :------: | :------: | :------: | :-----------------: |
|  { minWidth: 'your value' } |'pc' \| 'mobile'  |    -     | { minWidth: '721' } |
