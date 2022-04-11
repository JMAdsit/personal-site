import React from "react";
import MainCard from "../components/MainCard";

/**
 * Defines the "Not Found" page that is displayed for any unmatched route.
 *
 * You will not need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function NotFound() {
  let title = "Page Not Found";
  let body = "";
  
  return (
    <div className="NotFound">
      <MainCard 
        title={title}
        body={body}    
      />
    </div>
  );
}

export default NotFound;