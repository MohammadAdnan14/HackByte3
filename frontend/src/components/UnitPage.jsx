import React from "react";
import { useParams } from "react-router-dom";

const UnitPage = () => {
  const { sectionId, unitId } = useParams();

  const formattedUnitId = unitId ? unitId.replace(/-/g, " ").toUpperCase() : "Loading...";
  const formattedSectionId = sectionId ? sectionId.replace(/-/g, " ") : "";

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-[#538031] mb-4">
        {formattedUnitId}
      </h1>
      <p className="text-lg">
        This is the content for <strong>{formattedUnitId.toLowerCase()}</strong> of{" "}
        <strong>{formattedSectionId}</strong>. Add your content here.
      </p>
    </div>
  );
};

export default UnitPage;
