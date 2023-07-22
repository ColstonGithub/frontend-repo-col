import React from "react";

const SiteMapPage = ({ siteMapData }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <h1>Site Map Details</h1>
      <ul>
        {siteMapData.map((item, index) => (
          <li key={index}>
            <strong>URL:</strong> {item.url}
            <br />
            <strong>Change Frequency:</strong> {item.changefreq}
            <br />
            <strong>Priority:</strong> {item.priority}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SiteMapPage;
