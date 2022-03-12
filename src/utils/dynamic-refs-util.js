import React from "react";

class DynamicRefsUtil {
  constructor() {
    this.refsMap = new Map();
  }

  getRef(key) {
    console.log(this.refsMap);
    return this.refsMap.get(key);
  }

  setRef(key) {
    const refForKey = React.createRef();
    this.refsMap.set(key, refForKey);
    return refForKey;
  }
}

export default new DynamicRefsUtil();
