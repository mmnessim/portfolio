import React from "react";
import { FirstPost } from "./posts/firstPost";
import { BlogNav } from "./blogNav";

export function BlogContainer() {
    return(
        <div className="container row">
            <BlogNav />
            <FirstPost /> 
        </div>
    )
}