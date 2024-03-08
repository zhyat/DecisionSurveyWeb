import React from "react";
import "./index.css"
import { IPanelProps } from "./interface.js";




export function Panel(props: IPanelProps) {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}