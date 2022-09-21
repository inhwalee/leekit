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
        {media === "pc" ? "데스크탑" : "모바일"}
      </div>
    </div>
  );
}
```

### Arguments

| Argument |          Example           | Required |    Default value    |
| :------: | :------------------------: | :------: | :-----------------: |
| minWidth | { minWidth: 'your value' } |    -     | { minWidth: '720' } |
