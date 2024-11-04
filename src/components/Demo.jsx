import { useEffect, useState } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";
const Demo = () => {
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();  
  return (
    <div>Demo</div>
  )
}

export default Demo