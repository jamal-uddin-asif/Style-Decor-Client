import React from "react";
import { ServiceCardSkeleton } from "./ServicesCardSkeleton";
import Container from "../../Components/Shared/Container";

const ServicesLoading = () => {
  return (
    <Container>
      <div className="grid p-2 lg:grid-cols-4 md:grid-cols-3  gap-5">
        {[...Array(8).keys()].map((i) => (
          <ServiceCardSkeleton key={i} />
        ))}
      </div>
    </Container>
  );
};

export default ServicesLoading;
